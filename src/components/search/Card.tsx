import React from 'react';
export type TrainLineInfo = {
  text: string;
};
export const dynamic = 'force-dynamic';
export const revalidate = 0;
export type RoomStats = {
  layout: string;
  size: string; // include unit, e.g. 21.21m²
  floor: string;
  bedroom: string;
};

export type CardProps = {
  mainImageSrc?: string;
  galleryImages?: string[];
  address?: string;
  title?: string;
  trainLines?: TrainLineInfo[];
  stats?: RoomStats;
  features?: string[];
  price?: string; // include currency, e.g. ￥134,330
  ctaLabel?: string;
};
import image1 from '../../../arealty_new_html/images/image_1.jpg'
import image2 from '../../../arealty_new_html/images/image_2.jpg'
import image3 from '../../../arealty_new_html/images/image_3.jpg'
import image4 from '../../../arealty_new_html/images/image_4.jpg'

export default function SearchNavbar({
  mainImageSrc = image1.src,
  galleryImages = [image2.src, image3.src, image4.src],
  address = '4-39-24, Nishishinjuku, Shinjuku-ku, Tokyo',
  title = '3-Sky Court Hatsudai - 401',
  trainLines = [
    { text: 'Toei Ōedo, Nishishinjuku Go Choume - 6 min walk' },
    { text: 'Keiō, Hatsudai - 6 walk' },
  ],
  stats = { layout: '1DK', size: '21.21m²', floor: '1', bedroom: '2' },
  features = ['No key money', 'No Deposit', 'No Agency Fee', 'Elevator', 'Gym'],
  price = '￥134,330',
  ctaLabel = 'View Detail',
}: CardProps) {
  return (
    <div className="d-flex justify-content-between pd-1 bg-white r-12 g-2w">
      <div className="d-flex flex-grow-1 g-2w">
        {/* Image section */}
        <div className="d-flex flex-column g-05">
          <div className="d-flex img-avt r-4">
            <img src={mainImageSrc} alt="main" />
          </div>
          <div className="d-flex g-05">
            {galleryImages.map((src, idx) => (
              <div key={idx} className="img-item r-4">
                <img src={src} alt={`gallery-${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Info section */}
        <div className="d-flex flex-column flex-grow-1 g-05">
          <div className="d-flex align-items-center pdy-02 pdx-05 g-05 r-23 address">
            <div>
              <i className="icon-distance"></i>
            </div>
            <span className="t-n-wrap fs-05-1">{address}</span>
          </div>

          <h5 className="mg-0 fs-1-15">{title}</h5>

          <div className="d-flex flex-column g-03">
            {trainLines.map((line, idx) => (
              <div key={idx} className="d-flex g-05 text-grey">
                <div style={{ marginTop: '0.4rem' }}>
                  <i className="icon-train"></i>
                </div>
                <div className="fs-05-1">{line.text}</div>
              </div>
            ))}
          </div>

          <div
            className="d-flex justify-content-between pdy-1w pdx-2w r-12 bg-r-info g-03"
            style={{ maxWidth: '600px' }}
          >
            <div className="d-flex flex-column g-05">
              <span className="text-grey fs-05-1">Layout</span>
              <span className="fs-05-1 w-7  ">{stats.layout}</span>
            </div>
            <div className="d-flex flex-column g-05">
              <span className="text-grey fs-05-1">Size</span>
              <span className="fs-05-1 w-7 ">{stats.size}</span>
            </div>
            <div className="d-flex flex-column g-05">
              <span className="text-grey fs-05-1">Floor</span>
              <span className="fs-05-1 w-7 ">{stats.floor}</span>
            </div>
            <div className="d-flex flex-column g-05">
              <span className="text-grey fs-05-1">Bedroom</span>
              <span className="fs-05-1 w-7 ">{stats.bedroom}</span>
            </div>
          </div>

          <div className="d-flex flex-wrap g-05">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className="pdx-05 pdy-02 bg-grey text-grey r-23 t-n-wrap fs-03-08"
              >
                {feature}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA section */}
      <div className="d-flex flex-column justify-content-between">
        <div className="d-flex justify-content-end">
          <i className="icon-add-room"></i>
        </div>
        <div className="d-flex flex-column g-1">
          <div className="d-flex flex-column justify-content-center">
            <h4 className="text-cl-feature mg-0 fs-1-15">{price}</h4>
            <span className="text-grey t-n-wrap fs-03-08">Total monthly fee</span>
          </div>
          <button className="btn-custom pdx-1w pdy-05w r-12 bg-feature text-cl-white fs-05-1 w-7">
            {ctaLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
