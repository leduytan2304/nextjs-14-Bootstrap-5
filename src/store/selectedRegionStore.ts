import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { RegionGroup } from '@/types/prefecture';

interface SelectedRegionState {
  selectedRegion: RegionGroup | null;
  setSelectedRegion: (region: RegionGroup | null) => void;
  clearSelectedRegion: () => void;
}

export const useSelectedRegionStore = create<SelectedRegionState>()(
  persist(
    (set) => ({
      selectedRegion: null,
      setSelectedRegion: (region) => set({ selectedRegion: region }),
      clearSelectedRegion: () => set({ selectedRegion: null }),
    }),
    {
      name: 'selected-region-store', // tên unique cho localStorage key
    }
  )
);
