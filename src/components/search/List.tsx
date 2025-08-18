
"use client";
import React from 'react';
import { RegionGroup, regionGroupData } from '@/types/prefecture';
import { RegionTotalRoom } from '@/types/room';
import { City } from '@/app/api/cityService';
import { PrefectureTotalRoom } from '@/hooks/usePrefectureData';

interface ListProps {
  regionTotals: RegionTotalRoom[];
  count_prefecture: number;
  regionPrefectures: Map<number, PrefectureTotalRoom[]>;
  cities: City[];
  selectedPrefectureId: number | null;
  selectedRegion: RegionGroup | null;
  setSelectedRegion: (region: RegionGroup | null) => void;
  handlePrefectureSelect: (prefecture: PrefectureTotalRoom) => Promise<void>;
  onSelectCity?: (cityName: string | null) => void;
}

export default function List({
  regionTotals,
  count_prefecture,
  regionPrefectures,
  cities,
  selectedPrefectureId,
  selectedRegion,
  setSelectedRegion,
  handlePrefectureSelect,
  onSelectCity
}: ListProps) {

  return (
    <div>
      {/* Wrap search */}
      <div className="d-flex flex-column pd-1 g-1 r-12 search-container">
        {/* Search */}
        <div className="d-flex pd-05 bg-white r-12 g-05 wrap-search-by">
          {/* Location */}
          <div className="dropdown flex-grow-1">
            <div
              className="pd-05 r-12 search-by dropdown-toggle active"
              data-bs-toggle="dropdown"
              data-bs-auto-close="outside"
              aria-expanded="false"
            >
              <div className="d-flex align-items-center justify-content-between">
                <div className="d-flex align-items-center g-05">
                  <i className="icon-distance-s"></i>
                  <span className="text-highlight fs-05-1 w-7">Location</span>
                </div>
                <div className="form-check">
                  <input className="form-check-input" type="radio" />
                </div>
              </div>
              <div className="text-grey fs-05-1">Search by Location</div>
            </div>
            <div className="dropdown-menu border-none pd-0">
              <div className="d-flex pd-1 g-1 bg-grey r-8">
                <div className="d-flex flex-column bg-white pd-05 r-8 tab-size g-05">
                  <div className="d-flex flex-column g-05">
                      {regionGroupData.map((region) => (
                    <div key={region._id}>
                      {/* Region header */}
                      <div 
                        className={`d-flex align-items-center pd-05 g-05 area ${
                          selectedRegion?._id === region._id ? 'active' : ''
                        }`}
                        onClick={() => setSelectedRegion(
                          selectedRegion?._id === region._id ? null : region
                        )}
                        style={{ cursor: 'pointer' }}
                      >
                        <img src="https://arealty.jp/content/images/pft/aichi.png" alt="" />
                        <div className="d-flex flex-column flex-grow-1">
                          <strong>{region.title.en}</strong>
                          <span className="text-grey fs-03-08 t-n-wrap">
                            {regionTotals.find(r => r._id === region._id)?.totalRoom} results
                          </span>
                        </div>
                        <div>
                          <i className={`icon-arrow ${
                            selectedRegion?._id === region._id ? 'rotate-180' : ''
                          }`}></i>
                        </div>
                      </div>
                      {selectedRegion?._id === region._id && (
                        <div className="d-flex flex-column" style={{ paddingLeft: '20px' }}>
                          {regionPrefectures.get(region._id)?.map((prefecture) => (
                            <div key={prefecture._id}>
                              <label 
                                className="form-check-label item"
                                onClick={() => handlePrefectureSelect(prefecture)}
                              >
                                <input 
                                  className="form-check-input" 
                                  type="radio"
                                  name="prefecture" 
                                  checked={selectedPrefectureId === prefecture._id}
                                  onChange={() => {}} // Để tránh warning controlled component
                                />
                                <span style={{ marginLeft: '8px' }}>
                                  {prefecture.name}
                                </span>
                                <span className="text-grey">
                                  ({prefecture.total_room})
                                </span>
                              </label>


                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                      ))}
                   
                  </div>
                </div>
                <div className="d-flex flex-column bg-white pd-05 r-8 g-05 tab-size">
                  <div className="w-7">Area</div>
                  <div
                    className="d-flex align-items-center pd-05 r-8 g-03 search-on-dropdown"
                  >
                    <div>
                      <i className="icon-search"></i>
                    </div>
                    <input
                      className="pd-0"
                      type="text"
                      name="searchArea"
                      id="searchArea"
                      placeholder="Search Area"
                    />
                    <div>
                      <i className="icon-close"></i>
                    </div>
                  </div>
                  <div className="d-flex flex-column">
                    {/* Hiển thị cities khi có prefecture được chọn */}
                    {selectedPrefectureId && cities && cities.length > 0 ? (
                      <div className="cities-list">
                        {cities.map(city => (
                          <div key={city._id} className="city-item">
                            <label className="form-check-label">
                              <input 
                                type="radio" 
                                name="city"
                                className="form-check-input"
                                onChange={() => onSelectCity?.(city.name)}
                                onClick={() => onSelectCity?.(city.name)}
                              />
                              <span style={{ marginLeft:'8px'}}>
                                {city.name}
                              </span>
                            </label>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <></>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Train line */}
                    <div className="dropdown flex-grow-1">
                        <div className="pd-05 r-12 search-by dropdown-toggle" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center g-05">
                                    <i className="icon-directions-s"></i>
                                    <span className="text-highlight fs-05-1 w-7">Train Lines</span>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="" id=""/>
                                    {/* <!-- <label className="form-check-label" for="radioDefault1">
                                                            Default radio
                                                        </label> --> */}
                                </div>
                            </div>
                            <div className="text-grey fs-05-1 ">Search by Train Line</div>
                        </div>
                        <div className="dropdown-menu border-none pd-0">
                            <div className="d-flex pd-1 g-1 bg-grey r-8">
                                <div className="d-flex flex-column bg-white pd-05 r-8 tab-size g-05">
                                    <div className="d-flex flex-column g-05">
                                        <div className="d-flex align-items-center pd-05 g-05 area">
                                            <img src="/images/image_1.jpg" alt=""/>
                                            <div className="d-flex flex-column flex-grow-1">
                                                <strong>Hokkaido</strong>
                                                <span className="text-grey fs-03-08 t-n-wrap">7512 results</span>
                                            </div>
                                            <div>
                                                <i className="icon-arrow"></i>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column">
                                            <label className="form-check-label item" htmlFor="">
                                                <input className="form-check-input" type="radio" name="" id=""/>
                                                Aomori
                                            </label>
                                            <label className="form-check-label item" htmlFor="">
                                                <input className="form-check-input" type="radio" name="" id=""/>
                                                Aomori
                                            </label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pd-05 g-05 area">
                                        <img src="/images/image_1.jpg" alt=""/>
                                        <div className="d-flex flex-column flex-grow-1">
                                            <strong>Hokkaido</strong>
                                            <span className="text-grey fs-03-08">7512 results</span>
                                        </div>
                                        <div>
                                            <i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center pd-05 g-05 area">
                                        <img src="/images/image_1.jpg" alt=""/>
                                        <div className="d-flex flex-column flex-grow-1">
                                            <strong>Hokkaido</strong>
                                            <span className="text-grey fs-03-08">7512 results</span>
                                        </div>
                                        <div>
                                            <i className="icon-arrow"></i>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-column bg-white pd-05 r-8 g-05 tab-size">
                                    <div className="w-7">Line</div>
                                    <div className="d-flex align-items-center pd-05 r-8 g-03 search-on-dropdown">
                                        <div>
                                            <i className="icon-search"></i>
                                        </div>
                                        <input className="pd-0" type="text" name="" id="" placeholder="Search Line"/>
                                        <div>
                                            <i className="icon-close"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex flex-column bg-white pd-05 r-8 g-05 tab-size">
                                    <div className="w-7">Station</div>
                                    <div className="d-flex align-items-center pd-05 r-8 g-03 search-on-dropdown">
                                        <div>
                                            <i className="icon-search"></i>
                                        </div>
                                        <input className="pd-0" type="text" name="" id="" placeholder="Search Station"/>
                                        <div>
                                            <i className="icon-close"></i>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column">
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                      {/* Destination */}
                    <div className="dropdown flex-grow-1">
                        <div className="pd-05 r-12 search-by dropdown-toggle" data-bs-toggle="dropdown"
                            data-bs-auto-close="outside" aria-expanded="false">
                            <div className="d-flex align-items-center justify-content-between">
                                <div className="d-flex align-items-center g-05">
                                    <i className="icon-explore-s"></i>
                                    <span className="text-highlight fs-05-1 w-7">Destination</span>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="" id=""/>
                                    {/* <!-- <label className="form-check-label" for="radioDefault1">
                                                            Default radio
                                                        </label> --> */}
                                </div>
                            </div>
                            <div className="text-grey fs-05-1 ">Search by Destination</div>
                        </div>
                        <div className="dropdown-menu border-none pd-0">
                            <div className="d-flex pd-1 g-1 bg-grey r-8">
                                <div className="d-flex flex-column bg-white pd-05 r-8 g-05">
                                    <div className="w-7">Search Destination</div>
                                    <div className="d-flex align-items-center pd-05 r-8 g-03 search-on-dropdown">
                                        <div>
                                            <i className="icon-search"></i>
                                        </div>
                                        <input className="pd-0" type="text" name="" id="" placeholder="Search Destination"/>
                                        <div>
                                            <i className="icon-close"></i>
                                        </div>
                                    </div>
                                    <div className="w-7">Required Time</div>
                                    <div className="d-grid grid-2">
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                    </div>
                                    <div className="w-7">Number Transit</div>
                                    <div className="d-grid grid-2">
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                            <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                        <label className="form-check-label item" htmlFor="">
                                            <input className="form-check-input" type="radio" name="" id=""/>
                                            Aomori
                                        </label>
                                    </div>
                                </div>
                                <div className="d-flex flex-column bg-white pd-05 r-8 g-05 tab-size">
                                    <div className="w-7">Nearest Station</div>
                                    <div className="d-flex flex-column">
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                        <label className="form-check-label item w-7" htmlFor="">
                                            <input className="form-check-input" type="checkbox" value="" id=""/>
                                            Daita <span className="text-grey">(2530)</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
              
        <ul className="d-flex justify-content-between flex-grow-1 nav-ul bg-feature r-12 sort">
          <li className="pd-05 text-cl-white r-4 fs-05-1 active">Recommended</li>
          <li className="pd-05 text-cl-white r-4 fs-05-1">Lowest Price</li>
          <li className="pd-05 text-cl-white r-4 fs-05-1">Highest Price</li>
          <li className="pd-05 text-cl-white r-4 fs-05-1">Smallest Size</li>
          <li className="pd-05 text-cl-white r-4 fs-05-1">Biggest Size</li>
        </ul>
        <img className="img-home-search" src="/images/home.png" alt="" />
        </div>

        {/* Sort */}
       

        {/* <div className="d-flex g-05">
                <div className="filter-item bg-white">
                    Tokyo
                    <i className="icon-cancel"></i>
                </div>
                <div className="filter-item bg-white">
                    Minamikarasuyama
                    <i className="icon-cancel"></i>
                </div>
                <div className="filter-item bg-white">
                    Itabashi-ku
                    <i className="icon-cancel"></i>
                </div>
                <div className="filter-item bg-grey">
                    Remove all
                    <i className="icon-cancel"></i>
                </div>
            </div> */}
      </div>
  );
}
