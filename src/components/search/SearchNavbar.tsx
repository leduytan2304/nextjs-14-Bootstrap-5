import React from 'react';

export default function SearchNavbar() {
    return (
        
        <div className="d-flex align-items-center pdx-3 bg-white">
        <ul className="d-flex nav-ul g-3">
            <li className="bold f-size-1 active">HOME</li>
            <li>
                <div className="dropdown">
                    <div className="d-flex align-items-center g-05 bold f-size-1 dropdown-toggle" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        FIND A ROOM
                        <div>
                            <i className="icon-arrow"></i>
                        </div>
                    </div>
                    <ul className="dropdown-menu border-none">
                        <div className="d-flex flex-column">
                            <div className="d-flex align-items-center pdx-1 pdy-05 r-4 mode active">
                                <div className="d-flex align-items-center flex-grow-1 g-03">
                                    <div className="dot-fillter"></div>
                                    <span>Rent</span>
                                </div>
                                <div>
                                    <i className="icon-check"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pdx-1 pdy-05 r-4 mode">
                                <div className="d-flex align-items-center flex-grow-1 g-03">
                                    <div className="dot-fillter"></div>
                                    <span>Buy</span>
                                </div>
                                <div>
                                    <i className="icon-check"></i>
                                </div>
                            </div>
                            <div className="d-flex align-items-center pdx-1 pdy-05 r-4 mode">
                                <div className="d-flex align-items-center flex-grow-1 g-03">
                                    <div className="dot-fillter"></div>
                                    <span>Short-term</span>
                                </div>
                                <div>
                                    <i className="icon-check"></i>
                                </div>
                            </div>
                        </div>
                    </ul>
                </div>
            </li>
            <li className="bold f-size-1">BLOG</li>
        </ul>
        <ul className="nav-ul mx-auto">
            <li>
                <img src="/images/arealty_logo.png" alt=""/>
            </li>
        </ul>
        <ul className="d-flex nav-ul g-3">
            <li><i className="icon-add-room"></i></li>
            <li className="bold f-size-1">About us</li>
            {/* <!-- <li className="bold f-size-1">lang</li> -->
            <!-- <li className="bold f-size-1">login</li> --> */}
        </ul>
    </div>
    );
}