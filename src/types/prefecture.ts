export interface RegionGroup {
    _id: number;
    title: {
      en: string;
      vi: string;
      ja: string;
      cnt: string;
      cns: string;
    };
    imgSrc: string;
    expanded: boolean;
    expanded_line: boolean;
    ids: number[];
    region_num_room: number;
    prefectures: number[]; 
  }

export const regionGroupData: RegionGroup[] = [
    {
        _id: 1,
        title: {
            en: "Hokkaido",
            vi: "Hokkaido",
            ja: "北海道",
            cnt: "Hokkaido",
            cns: "Hokkaido",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [12, 3, 16, 24, 2, 44, 8],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 2,
        title: {
            en: "Kanto",
            vi: "Kanto",
            ja: "関東",
            cnt: "Kanto",
            cns: "Kanto",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: true,
        expanded_line: true,
        ids: [40, 19, 34, 4, 14, 38, 10],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 3,
        title: {
            en: "Northern",
            vi: "Northern",
            ja: "北部",
            cnt: "Northern",
            cns: "Northern",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [29, 42, 15, 6, 46, 26],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 4,
        title: {
            en: "Central",
            vi: "Central",
            ja: "中部",
            cnt: "Central",
            cns: "Central",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [9, 37, 1, 23],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 5,
        title: {
            en: "Kansai",
            vi: "Kansai",
            ja: "関西",
            cnt: "Kansai",
            cns: "Kansai",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [32, 22, 13, 28, 35, 43],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 6,
        title: {
            en: "Chugoku",
            vi: "Chugoku",
            ja: "中国",
            cnt: "Chugoku",
            cns: "Chugoku",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [41, 36, 31, 11, 45],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 7,
        title: {
            en: "Shikoku",
            vi: "Shikoku",
            ja: "四国",
            cnt: "Shikoku",
            cns: "Shikoku",
        },
        imgSrc: "/content/images/pft/aichi.png",expanded: false,
        expanded_line: false,
        ids: [39, 17, 5, 20],
        region_num_room: 0,
        prefectures: []
    },
    {
        _id: 9,
        title: {
            en: "Kyushu/Okinawa",
            vi: "Kyushu/Okinawa",
            ja: "九州・沖縄",
            cnt: "Kyushu/Okinawa",
            cns: "Kyushu/Okinawa",
        },
        imgSrc: "/content/images/pft/aichi.png",
        expanded: false,
        expanded_line: false,
        ids: [7, 18, 21, 25, 27, 30, 33, 47],
        region_num_room: 0,
        prefectures: []
    }
];
export interface Prefecture {
    _id: number;
    name: string;
    name_ja: string;
    total_room: number | null;
}


