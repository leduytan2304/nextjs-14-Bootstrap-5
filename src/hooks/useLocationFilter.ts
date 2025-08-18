import { useCallback, useState } from 'react';
import { cityService, City } from '@/app/api/cityService';

interface UseLocationFilterReturn {
	selectedPrefectureId: number | null;
	cities: City[];
	selectPrefecture: (prefectureId: number | null) => Promise<void>;
	clearPrefecture: () => void;
	selectedCityName: string | null;
	selectCity: (cityName: string | null) => void;
}

export const useLocationFilter = (): UseLocationFilterReturn => {
	const [selectedPrefectureId, setSelectedPrefectureId] = useState<number | null>(null);
	const [cities, setCities] = useState<City[]>([]);
	const [selectedCityName, setSelectedCityName] = useState<string | null>(null);

	const selectPrefecture = useCallback(async (prefectureId: number | null) => {
		if (prefectureId == null) {
			setSelectedPrefectureId(null);
			setCities([]);
			setSelectedCityName(null);
			return;
		}
		try {
			setSelectedPrefectureId(prefectureId);
			const response = await cityService.getCitiesByPrefectures(prefectureId);
			const citiesData = (response as any)?.data || response || [];
			setCities(Array.isArray(citiesData) ? citiesData : []);
			setSelectedCityName(null);
		} catch (_error) {
			setCities([]);
			setSelectedCityName(null);
		}
	}, []);

	const clearPrefecture = useCallback(() => {
		setSelectedPrefectureId(null);
		setCities([]);
		setSelectedCityName(null);
	}, []);

	const selectCity = useCallback((cityName: string | null) => {
		setSelectedCityName(cityName);
	}, []);

	return { selectedPrefectureId, cities, selectPrefecture, clearPrefecture, selectedCityName, selectCity };
};


