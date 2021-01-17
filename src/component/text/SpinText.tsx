import React from 'react';
import './styles/spin-text.scss'

function SpinText() {
    return (
        <div className="spin-text">
            <div className="spin-text__container">
                <p className="spin-text__container__text">
                    Hello
                </p>
                <ul className="spin-text__container__list">
                    <li className="spin-text__container__list__item">World !</li>
                    <li className="spin-text__container__list__item">Users !</li>
                    <li className="spin-text__container__list__item">There !</li>
                    <li className="spin-text__container__list__item">Everybody !</li>
                </ul>
            </div>
        </div>
    );
}

export default SpinText;