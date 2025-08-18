import { RoomItem } from '@/types/roomItem';
import type { CardProps, TrainLineInfo } from '@/components/search/Card';

export function mapRoomToCardProps(room: RoomItem): CardProps {
  const r: any = room as any;

  // Images: support either image_url_N fields or images[].url
  const legacyImages: string[] = [];
  for (let i = 1; i <= 10; i++) {
    const key = `image_url_${i}`;
    if (typeof r[key] === 'string' && r[key]) legacyImages.push(r[key]);
  }
  const mainImageSrc = r.image_url_1 || r?.images?.[0]?.url || undefined;
  const galleryImages = legacyImages.length > 1
    ? legacyImages.slice(1, 4)
    : (r?.images?.slice(1, 4)?.map((i: any) => i.url) ?? []);

  // Address & title
  const address = room.address || [room.chome_banchi, room.district, room.city, room.prefecture]
    .filter(Boolean)
    .join(', ');
  const titleBase: string = r.building_name_en || r.building_name?.en || r.building_name || '';
  const title = `${titleBase}${room.unit_no ? ` - ${room.unit_no}` : ''}`;

  // Train lines
  const trainLines: TrainLineInfo[] = [
    room.train_line_name_1 && room.station_name_1 ? { text: `${room.train_line_name_1}, ${room.station_name_1} - ${room.walk_1 ?? '-'} min walk` } : null,
    room.train_line_name_2 && room.station_name_2 ? { text: `${room.train_line_name_2}, ${room.station_name_2} - ${room.walk_2 ?? '-'} min walk` } : null,
    room.train_line_name_3 && room.station_name_3 ? { text: `${room.train_line_name_3}, ${room.station_name_3} - ${room.walk_3 ?? '-'} min walk` } : null,
  ].filter(Boolean) as TrainLineInfo[];

  // Stats
  const stats: CardProps['stats'] = {
    layout: room.room_type ?? '-',
    size: `${room.size ?? 0}m²`,
    floor: String(room.floor_no ?? '-'),
    bedroom: '-',
  };

  // Features
  const features: string[] = [];
  if ((room.months_key ?? 0) === 0) features.push('No key money');
  if ((room.months_deposit ?? 0) === 0) features.push('No Deposit');
  if ((room.months_agency ?? 0) === 0) features.push('No Agency Fee');
  if ((room as any).elevator === 'Y' || (room as any).elevator === true) features.push('Elevator');
  if ((room as any).gym === 'Y' || (room as any).gym === true) features.push('Gym');

  // Price
  const total = room.total_monthly ?? ((room.monthly_rent ?? 0) + (room.monthly_maintenance ?? 0));
  const price = `￥${total.toLocaleString('ja-JP')}`;

  return {
    mainImageSrc,
    galleryImages,
    address,
    title,
    trainLines,
    stats,
    features,
    price,
    ctaLabel: 'View Detail',
  };
}


