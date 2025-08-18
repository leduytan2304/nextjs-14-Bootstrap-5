import axiosClient from "@/api/axiosClient";
import { API_BASE_ROUTE_PROXY } from "@/ultis/constants";

export interface Line {
  _id: number;
  name: string;
  name_ja: string;
  prefecture_ids: number[];
}

export const lineService = {
  getLinesByPrefectures: (prefectureIds: number[]) => {
    return axiosClient.get<Line[]>(`${API_BASE_ROUTE_PROXY}/lines`, {
      params: { 
        prefecture_ids: JSON.stringify(prefectureIds) // Format: [1,2,3]
      }
    });
  }
};
