import React from 'react';
import Lottie from "react-lottie";
import * as animationData from './mobile-app-animation.json';

function Widget_3() {
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
            <div className="widget_animation">
                <Lottie options={defaultOptions} height={600} width={500} />
            </div>

            <div className="widget_box">
                <h2 className="widget_head">
                    <span>
                        <img
                            style={{ "marginLeft": "-20px", "marginBottom": "-17px", "marginRight": "20px" }}
                            src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-icon3.webp'
                            className='widget_img' />
                    </span>
                    Bloomberg News
                </h2>
                <p className="widget_content">
                We integrated with the Bloomberg team to design & develop the latest version of their flagship mobile app–serving millions of daily users.
                </p>

                <img style={{ "marginTop": "30px", "maxHeight":"22px" }} src='https://static.bluelabellabs.com/wp-content/uploads/2022/03/client-section-logo3.webp' />
            </div>
        </div>
    );
}
export default Widget_3;