import React from 'react';
import {Link} from 'react-router-dom'
import './styles/rolling-text.scss'


type RollingTextProps = {
    text : string,
    link : string,
    style : {
        fontSize : string,
        height : string
    }
}


function RollingText({text, link, style} : RollingTextProps) {

    // this function takes a string as input and return a JSX element
    // it will wrap the string between div and spans
    // Example : Omar will be
    // <div>
    //  <span>O</span>
    //  <span>m</span>
    //  <span>a</span>
    //  <span>r</span>
    // </div>
    const convertLetter = (text: string) => (
        <div className="rolling-text-block">
            {text.split("").map(
                (char, index) => (
                    <span key={index}
                          style={{
                              transitionDelay : 0.1*index + "s"
                          }}
                          className="rolling-text-letter">
                        {char}
                    </span>
                )
            )}
        </div>
    )

    return (
        <Link to={link}>
            <div className="rolling-text" style={{...style}}>
                {convertLetter(text)}
                {convertLetter(text)}
            </div>
        </Link>
    );
}

export default RollingText;