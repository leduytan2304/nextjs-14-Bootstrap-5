import axiosClient from "@/api/axiosClient";
import { Prefecture } from "@/types/prefecture";

import { API_BASE_ROUTE_REGION, API_BASE_ROUTE_PREFECTURE } from "@/ultis/constants";

// Sử dụng route nội bộ của Next.js: /api/region/prefectures
const API_BASE_ROUTE = `${API_BASE_ROUTE_REGION}${API_BASE_ROUTE_PREFECTURE}`;
console.log("API_BASE_ROUTE", `/api${API_BASE_ROUTE}`);
export const prefectureService = {
  /**
   * Lấy toàn bộ danh sách prefecture
   */
  getAll: () => {
    return axiosClient.get<Prefecture[]>(API_BASE_ROUTE);
  },


  /**
   * Lấy prefecture theo ID
   * @param id ID của prefecture
   */
  getById: (id: number) => {
    return axiosClient.get<Prefecture>(`${API_BASE_ROUTE}/${id}`);
  }
};
