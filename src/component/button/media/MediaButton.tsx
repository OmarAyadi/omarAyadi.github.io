import React from 'react';
import "./media-button.scss"

import {IconContext} from 'react-icons';

type MediaButtonProps = {
    Icon: JSX.Element,
    text: string,
    cName: string
}

function MediaButton({Icon, text, cName}: MediaButtonProps) {


    return (
        <>
            <div className="media-button-wrapper">
                <IconContext.Provider value={{className: 'media-button-icon ' + cName}}>
                    {Icon}
                </IconContext.Provider>
                <div className="media-button-tooltip">
                    <span className={"media-button-tooltip-text " + cName}>{text}</span>
                </div>
            </div>
        </>
    );
}

export default MediaButton;