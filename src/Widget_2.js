import React from 'react';
import Lottie from "react-lottie";
import * as animationData from './lap-lottie-animation-json.json';

function Widget_2() {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };
    return (
        <div className='widget'>
            <div className="widget_box" style={{"marginLeft":"70px"}}>
                <h2 className="widget_head">
                    <span>
                        <img
                            style={{ "marginLeft": "-20px", "marginBottom": "-17px", "marginRight": "20px" }}
                            src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-icon2.webp'
                            className='widget_img' />
                    </span>
                    Delve
                </h2>
                <p className="widget_content">
                We worked with Microsoft to integrate their AI & VR technology and develop this set of iOS & Android apps that explores the life and legacy of this influential 20th-century artist.
                </p>

                <img style={{ "marginTop": "30px" }} src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-logo2.webp' />
            </div>

            <div className="widget_animation" style={{"marginLeft":"100px"}}>
                <Lottie options={defaultOptions} height={500} width={500} />
            </div>
        </div>
    );
}

export default Widget_2