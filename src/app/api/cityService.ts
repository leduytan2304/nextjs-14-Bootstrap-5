import axiosClient from "@/api/axiosClient";
import { API_BASE_ROUTE_PROXY } from "@/ultis/constants";

export interface City {
  _id: number;
  name: string;
  name_ja: string;
  prefecture_id: number;
}

export const cityService = {
  getCitiesByPrefectures: (prefectureId: number) => {
    return axiosClient.get<City[]>(`${API_BASE_ROUTE_PROXY}/cities`, {
      params: { 
        prefectures: `[${prefectureId}]`
      }
    });
  }
};
