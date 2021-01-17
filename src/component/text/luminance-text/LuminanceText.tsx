import React from 'react';
import './luminance-text.scss'

type LuminanceTextProps = {
    text : string
}

function LuminanceText({text} : LuminanceTextProps) {
    return (
        <div className="luminance-wrapper">{text}</div>
    );
}

export default LuminanceText;