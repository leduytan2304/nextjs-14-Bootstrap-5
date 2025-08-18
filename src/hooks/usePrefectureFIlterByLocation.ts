import { useEffect, useState } from "react";
import { RoomResponse, RoomItem } from "../types/roomItem";

export const usePrefectureFIlterByLocation = ({ prefecture, city }: { prefecture?: string | null, city?: string | null }) => {
  const [rooms, setRooms] = useState<RoomItem[]>([]);
  const [totalRooms, setTotalRooms] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!prefecture) return; // không gọi API nếu chưa có prefecture

    const fetchRooms = async () => {
      setLoading(true);
      try {
        let response = await fetch(
          "/api/proxy/room/by_filters_v2_zip",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              offset:0,
              limit: 10,
              prefecture: prefecture, // gửi theo tên prefecture
              ...(city ? { city } : {}),
            }),
          }
        );

        if (!response.ok) {
          // fallback thử alias dash-case nếu 404
          if (response.status === 404) {
            response = await fetch("/api/proxy/room/by-filters-v2-zip", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                offset: 10,
                limit: 10,
                prefecture: prefecture,
                ...(city ? { city } : {}),
              }),
            });
          }
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
        }

        const raw: any = await response.json();
        const items: RoomItem[] = Array.isArray(raw)
          ? (raw as RoomItem[])
          : Array.isArray(raw?.item)
          ? (raw.item as RoomItem[])
          : Array.isArray(raw?.items)
          ? (raw.items as RoomItem[])
          : Array.isArray(raw?.data)
          ? (raw.data as RoomItem[])
          : Array.isArray(raw?.results)
          ? (raw.results as RoomItem[])
          : [];
        const total: number = typeof raw?.total_room === 'number'
          ? raw.total_room
          : typeof raw?.total === 'number'
          ? raw.total
          : typeof raw?.count === 'number'
          ? raw.count
          : items.length;
        setRooms(items);
        setTotalRooms(total);
      } catch (error) {
        console.error("Lỗi khi gọi API:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRooms();
  }, [prefecture, city]); 

  return { rooms, totalRooms, loading };
}