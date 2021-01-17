import React from 'react';
import './translating-text.scss'

type TranslatingTextProps = {
    name : string
}

function TranslatingText({name} : TranslatingTextProps) {
    return (
        <div className="name-loading">
            <h2 data-text={name} className="name-loading_name">{name}</h2>
        </div>
    );
}

export default TranslatingText;