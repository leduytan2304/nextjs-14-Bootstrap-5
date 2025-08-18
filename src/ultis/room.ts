// types/Room.ts
export interface Location {
    type: "Point";
    coordinates: [number, number]; // [lng, lat]
  }
  
  export interface BuildingNames {
    en: string;
    ja: string;
    zh_CN: string;
    zh_TW: string;
  }
  
  export interface BuildingDescriptions {
    en: string;
    ja: string;
    zh_CN: string;
    zh_TW: string;
  }
  
  export interface BuildingLandmarks {
    en: string;
    ja: string;
    zh_CN: string;
    zh_TW: string;
  }
  
  export interface PropertyDescriptions {
    en: string;
    ja: string;
    zh_CN: string;
    zh_TW: string;
  }
  
  export interface PropertyOtherExpenses {
    en: string;
    ja: string;
    zh_CN: string;
    zh_TW: string;
  }
  
  export interface ImageItem {
    category: string;
    url: string;
  }
  
  export interface RoomItem {
    _id: string;
    version: string;
    room_link: string;
    src: string;
    link: string;
    property_csv_id: string;
    postcode: string;
    prefecture: string;
    city: string;
    district: string;
    chome_banchi: string;
    building_type: string;
    year: number;
    building_name: BuildingNames;
    building_description: BuildingDescriptions;
    building_landmarks: BuildingLandmarks;
    station_name_1?: string;
    train_line_name_1?: string;
    walk_1?: number;
    station_name_2?: string;
    train_line_name_2?: string;
    walk_2?: number;
    station_name_3?: string;
    train_line_name_3?: string;
    walk_3?: number;
    station_name_4?: string;
    train_line_name_4?: string;
    walk_4?: number;
    station_name_5?: string;
    train_line_name_5?: string;
    walk_5?: number;
    map_lat: number;
    map_lng: number;
    num_units: number;
    floors: number;
    basement_floors: number;
    parking: string;
    parking_cost: number;
    bicycle_parking: string;
    motorcycle_parking: string;
    structure: string;
    building_style: string;
    autolock: string;
    credit_card: string;
    concierge: string;
    delivery_box: string;
    elevator: string;
    gym: string;
    newly_built: string;
    pets: string;
    swimming_pool: string;
    ur: string;
    room_type: string;
    size: number;
    unit_no: number;
    ad_type: string;
    available_from: string;
    property_description: PropertyDescriptions;
    property_other_expenses: PropertyOtherExpenses;
    featured_a: string;
    featured_b: string;
    featured_c: string;
    floor_no: number;
    monthly_rent: number;
    monthly_maintenance: number;
    months_deposit: number;
    numeric_deposit: number;
    months_key: number;
    numeric_key: number;
    months_guarantor: number;
    numeric_guarantor: number;
    months_agency: number;
    numeric_agency: number;
    months_renewal: number;
    numeric_renewal: number;
    months_deposit_amortization: number;
    numeric_deposit_amortization: number;
    months_security_deposit: number;
    numeric_security_deposit: number;
    lock_exchange: number;
    fire_insurance: number;
    other_initial_fees: number;
    other_subscription_fees: number;
    no_guarantor: string;
    guarantor_agency: string;
    guarantor_agency_name: string;
    rent_negotiable: string;
    renewal_new_rent: string;
    lease_months: number;
    lease_type: string;
    short_term_ok: string;
    balcony_size: number;
    property_notes: string;
    custom_tel: string;
    notify_email: string;
    notify_cc: string;
    notify_bcc: string;
    facing_north: string;
    facing_northeast: string;
    facing_east: string;
    facing_southeast: string;
    facing_south: string;
    facing_southwest: string;
    facing_west: string;
    facing_northwest: string;
    aircon: string;
    aircon_heater: string;
    all_electric: string;
    auto_fill_bath: string;
    balcony: string;
    bath: string;
    bath_water_heater: string;
    blinds: string;
    bs: string;
    cable: string;
    carpet: string;
    cleaning_service: string;
    counter_kitchen: string;
    dishwasher: string;
    drapes: string;
    female_only: string;
    fireplace: string;
    flooring: string;
    full_kitchen: string;
    furnished: string;
    gas: string;
    induction_cooker: string;
    internet_broadband: string;
    internet_wifi: string;
    japanese_toilet: string;
    linen: string;
    loft: string;
    microwave: string;
    oven: string;
    phoneline: string;
    range: string;
    refrigerator: string;
    refrigerator_freezer: string;
    roof_balcony: string;
    separate_toilet: string;
    shower: string;
    soho: string;
    storage: string;
    student_friendly: string;
    system_kitchen: string;
    tatami: string;
    underfloor_heating: string;
    unit_bath: string;
    utensils_cutlery: string;
    veranda: string;
    washer_dryer: string;
    washing_machine: string;
    washlet: string;
    western_toilet: string;
    yard: string;
    update_images: string;
    images: ImageItem[];
    numeric_guarantor_max: number;
    discount: number;
    posted_by: string;
    is_priority: string;
    address: string;
    building_age: number;
    total_monthly: number;
    create_date: number;
    location: Location;
    lines: number[];
    stations: number[];
  }
  
  export interface RoomResponse {
    item: RoomItem[];
    total_room: number;
  }
  