export interface RoomNumberResponse {
    [key: string]: string;
  }
  
  export interface RegionTotalRoom {
    _id: number;
    totalRoom: number;
  }
 
  export  interface UsePrefectureDataReturn {
    regionTotals: RegionTotalRoom[];
    count_prefecture: number;
  }