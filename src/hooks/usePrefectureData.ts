import { useState, useEffect } from 'react';
import { prefectureService } from '@/app/api/prefectureService';
import { roomService } from '@/app/api/roomService';
import { Prefecture, RegionGroup, regionGroupData } from '@/types/prefecture';
import { RoomNumberResponse, RegionTotalRoom } from '@/types/room';

export interface PrefectureTotalRoom extends Prefecture {
  total_room: number;
}

interface UsePrefectureDataReturn {
  regionTotals: RegionTotalRoom[];
  count_prefecture: number;
  prefectureNames: Map<number, string>;
  regionPrefectures: Map<number, PrefectureTotalRoom[]>;
}

export const usePrefectureData = (): UsePrefectureDataReturn => {
  const [regionTotals, setRegionTotals] = useState<RegionTotalRoom[]>([]);
  const [count_prefecture, setCountPrefecture] = useState<number>(0);
  const [prefectureNames, setPrefectureNames] = useState<Map<number, string>>(new Map());
  const [regionPrefectures, setRegionPrefectures] = useState<Map<number, PrefectureTotalRoom[]>>(new Map());
  useEffect(() => {
    const fetchData = async () => {
      try {
        // 1. Fetch prefectures
        const prefectureRes = await prefectureService.getAll();
        const prefectures: Prefecture[] = Array.isArray(prefectureRes?.data)
          ? prefectureRes.data
          : Array.isArray(prefectureRes)
          ? prefectureRes
          : [];

        // 2. Lưu tất cả _id vào list_prefecture
        const list_prefecture = prefectures.map(p => p._id);

        // 3. Tạo Map để tra cứu nhanh
        const prefectureMap = new Map<number, Prefecture>();
        const namesMap = new Map<number, string>();
        prefectures.forEach(p => {
          prefectureMap.set(p._id, p);
          namesMap.set(p._id, p.name); // Lưu tên của prefecture
        });

        // 4. Cập nhật regionGroupData với prefectures
        const updatedRegions: RegionGroup[] = regionGroupData.map(region => {
          // Lấy danh sách tên prefecture cho mỗi region
          const prefectureNames = region.ids
            .filter(id => prefectureMap.has(id))
            .map(id => ({
              id,
              name: prefectureMap.get(id)?.name || ''
            }));

          // Cập nhật prefecture_province_name với tên các prefecture

          return {
            ...region,
            prefectures: region.ids.filter(id => prefectureMap.has(id)),
          };
        });

        setPrefectureNames(namesMap);

        // 5. Fetch số phòng cho tất cả prefectures
        const roomAxiosRes = await roomService.getRoomNumber(list_prefecture);
        const roomRes: RoomNumberResponse = roomAxiosRes.data ?? roomAxiosRes;

        if (roomRes) {
          // 6. Tạo Map Prefecture với total_room
          const prefecturesWithRooms: PrefectureTotalRoom[] = prefectures.map(prefecture => ({
            ...prefecture,
            total_room: roomRes ? Number(roomRes[`v2_pft_${prefecture._id}`] || 0) : 0
          }));

          // 7. Tạo Map lưu danh sách Prefecture với total_room cho mỗi region
          const prefecturesByRegion = new Map<number, PrefectureTotalRoom[]>();
          regionGroupData.forEach(region => {
            const regionPrefecturesData = region.ids
              .map(id => prefecturesWithRooms.find(p => p._id === id))
              .filter((prefecture): prefecture is PrefectureTotalRoom => prefecture !== undefined);
            prefecturesByRegion.set(region._id, regionPrefecturesData);
          });
          setRegionPrefectures(prefecturesByRegion);

          // 8. Tính tổng số phòng cho từng region
          const regionTotalsData: RegionTotalRoom[] = updatedRegions.map(region => {
            const total = region.ids.reduce((sum, id) => {
              const key = `v2_pft_${id}`;
              return sum + (key in roomRes ? Number(roomRes[key]) : 0);
            }, 0);

            return {
              _id: region._id,
              totalRoom: total,
            };
          });

          setRegionTotals(regionTotalsData);

          // 7. Tổng tất cả phòng
          const totalRoomsAll = regionTotalsData.reduce((sum, r) => sum + r.totalRoom, 0);
          setCountPrefecture(totalRoomsAll);

        } else {
          setRegionTotals(updatedRegions.map(r => ({ _id: r._id, totalRoom: 0 })));
          setCountPrefecture(0);
          setRegionPrefectures(new Map());
        }
      } catch (error) {
        console.error("Lỗi khi fetch data:", error);
        setRegionTotals(regionGroupData.map(r => ({ _id: r._id, totalRoom: 0 })));
        setCountPrefecture(0);
        setRegionPrefectures(new Map());
      }
    };

    fetchData();
  }, []);

  return { regionTotals, count_prefecture, prefectureNames, regionPrefectures };
};
