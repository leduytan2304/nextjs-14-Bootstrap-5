"use client";
import React from 'react';
import SimpleFilter from '../../components/search/SimpleFilter';
import Card from '../../components/search/Card';
import ComplexFilter from '../../components/search/ComplexFilter';
import List from '../../components/search/List';
import SearchNavbar from '../../components/search/SearchNavbar';
import { RegionGroup } from '@/types/prefecture';
import { useSelectedRegionStore } from '@/store/selectedRegionStore';
import { usePrefectureData, PrefectureTotalRoom } from '@/hooks/usePrefectureData';
import { useLocationFilter } from '@/hooks/useLocationFilter';
import { usePrefectureFIlterByLocation } from '@/hooks/usePrefectureFIlterByLocation';
import { RoomItem } from '@/types/roomItem';
import { mapRoomToCardProps } from '@/lib/roomCardMapper';

export default function Home() {
    // Sử dụng hook để lấy data prefecture và region
    const { regionTotals, count_prefecture, regionPrefectures, prefectureNames } = usePrefectureData();
    
    // State/location logic qua hook riêng
    const { cities, selectedPrefectureId, selectPrefecture, selectedCityName, selectCity } = useLocationFilter();

    // Trigger rooms-by-filters API when a prefecture is selected
    const selectedPrefectureName = selectedPrefectureId ? prefectureNames.get(selectedPrefectureId) ?? null : null;
    const { rooms, totalRooms, loading } = usePrefectureFIlterByLocation({ prefecture: selectedPrefectureName, city: selectedCityName });
    
    // Lấy state và action từ store
    const { selectedRegion, setSelectedRegion } = useSelectedRegionStore();

    // Hàm chọn prefecture dùng hook location filter
    const handlePrefectureSelect = async (prefecture: PrefectureTotalRoom) => {
        await selectPrefecture(prefecture._id);
    };

    return (
        <div data-bs-theme="light" className="d-flex flex-column flex-grow-1 g-1">
            <SearchNavbar />
            <div className="d-flex pdx-5w pdy-2w g-2">
                <div className="filter-container pd-1">
                    <ComplexFilter 
                        selectedPrefectureId={selectedPrefectureId}
                        onSelectPrefecture={selectPrefecture}
                        regionPrefectures={regionPrefectures}
                    />
                </div>
                <div className="d-flex flex-column flex-grow-1 g-1">
                    <List 
                        regionTotals={regionTotals}
                        count_prefecture={count_prefecture}
                        regionPrefectures={regionPrefectures}
                        cities={cities}
                        selectedPrefectureId={selectedPrefectureId}
                        selectedRegion={selectedRegion}
                        setSelectedRegion={setSelectedRegion}
                        handlePrefectureSelect={handlePrefectureSelect}
                        onSelectCity={selectCity}
                    />
                    <div className="d-flex g-05">
                        <SimpleFilter />
                    </div>
                    {loading && (
                        <div className="pd-1">Loading rooms…</div>
                    )}
                    {!loading && rooms && rooms.length > 0 && (
                        <div className="d-flex flex-column g-1">
                            {rooms.map((room: RoomItem) => (
                                <Card key={room._id} {...mapRoomToCardProps(room)} />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
