import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calendar from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VunueNfo = () => {
    return (
        <div className="bck_black">
            <div className="center_wrapper">
                <div className="vn_wrapper">

                    <Zoom duration={500}>
                        <div className="vn_item">
                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>
                                    <div
                                    className="vn_title">
                                        style={{
                                            background:'url(${icon_calendar})'
                                        }}
                                    </div>
                                    <div className="vn_title">
                                        Event Location
                                    </div>
                                    <div className="vn_desc">
                                        1 E 161 St, Bronx, NY 10451
                                    </div>
                                    </div>
                            </div>
                        </div>

                    </Zoom>

                </div>
            </div>
        </div>
    );
};

export default VunueNfo;
            
