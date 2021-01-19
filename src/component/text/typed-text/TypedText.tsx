import React from 'react';
import './typed-text.scss'

type TypedTextProps = {
    text: string;
}

function TypedText({text} : TypedTextProps) {
    return (
        <div className="typedText-content">
            {text}
        </div>
    );
}

export default TypedText;