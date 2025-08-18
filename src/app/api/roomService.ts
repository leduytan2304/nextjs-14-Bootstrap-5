import axiosClient from "@/api/axiosClient";
import { API_BASE_ROUTE_PROXY } from "@/ultis/constants";

const API_BASE_ROUTE = `${API_BASE_ROUTE_PROXY}/room`;

// Interface cho response
export interface RoomNumberResponse {
  [key: string]: string; // key là v2_pft_<id>, value là string số
}

// Interface cho payload
export interface RoomPayload {
  [key: string]: number;
}

const createRoomPayload = (prefectureIds: number[]): RoomPayload => {
  return prefectureIds.reduce((acc, id) => {
    acc[`v2_pft_${id}`] = 0;
    return acc;
  }, {} as RoomPayload);
};

export const roomService = {
  getRoomNumber: (prefectureIds: number[]) => {
    const payload = createRoomPayload(prefectureIds);
    // Sửa type từ number thành RoomNumberResponse
    return axiosClient.post<RoomNumberResponse>(API_BASE_ROUTE, payload);
  }
  
};