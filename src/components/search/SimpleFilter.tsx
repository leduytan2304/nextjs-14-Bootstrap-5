import React from 'react';

export default function SimpleFilter() {
  return (
    <div>
       <div className="d-flex g-05">
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
            </div>
        </div>
  )
}