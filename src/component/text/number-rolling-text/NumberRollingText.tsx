import React from 'react';
import './number-rolling-text.scss'

type NumberRollingTextProps = {
    text: string
}

function NumberRollingText({text}: NumberRollingTextProps) {
    const geneText = "Software Engineer"

    return (
            <div className="nrt-letters">
                {
                    geneText.split("").map(
                        (letter, index) => (
                            <span key={index} className="nrt-letter">{letter}</span>
                        )
                    )
                }
            </div>
    );
}

export default NumberRollingText;