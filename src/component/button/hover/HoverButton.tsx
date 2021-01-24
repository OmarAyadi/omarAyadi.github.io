import React from 'react';
import './hover-button.css'

type HoverButtonProps = {
    onClick: () => void,
    text: string
}

function HoverButton({onClick, text}: HoverButtonProps) {
    return (
        <>
            <button className="hover-button" onClick={onClick}>
                <span className="hover-button-circle" aria-hidden="true">
                    <span className="hover-button-icon hover-button-arrow"></span>
                </span>
                <span className="hover-button-text">{text}</span>
            </button>
        </>
    );
}

export default HoverButton;