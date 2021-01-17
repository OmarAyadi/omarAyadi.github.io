import React from 'react';
import {Link} from 'react-router-dom'
import './styles/hover-button.css'

type HoverButtonProps = {
    link: string,
    text: string
}

function HoverButton({link, text}: HoverButtonProps) {
    return (
        <>
            <Link to={link}>
                <button className="hover-button">
                <span className="hover-button-circle" aria-hidden="true">
                    <span className="hover-button-icon hover-button-arrow"></span>
                </span>
                    <span className="hover-button-text">{text}</span>
                </button>
            </Link>
        </>
    );
}

export default HoverButton;