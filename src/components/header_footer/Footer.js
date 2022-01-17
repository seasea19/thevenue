import React from 'react';
import Fade from 'react-reveal/Fade';

const footer = () => {
    return (
        <footer className="bck_red">
            <Fade delay={500}>
                <div className="font_righteous footer_logo_venue"> Openning Day</div>
                <div className="footer_copyright">
                    Yankee Stadium 2022. All rights reserved.
                </div>
            </Fade>
        </footer>
    );
};
export default footer;