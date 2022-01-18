import React from 'react';
import Carrousel from './Carrousel';
import TimeUntil from './TimeUntil';

const Featured = () => {
    return (
        <div style={{position:'relative'}}>

            <Carrousel/>

            <div className="event_name">
                <div className="wrapper">
                Yankee Stadium 2022
                </div>
            </div>

            <TimeUntil/>

        </div>
    );
};

export default Featured;
