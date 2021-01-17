import React from 'react';
import './moving-planet.scss'

function MovingPlanet() {
    return (
        <div id="movingPlanet">
            <div id="movingPlanet__sun"></div>
            <div className="orbit" id="earth-orbit">
                <div className="globe" id="earth">
                    <div className="orbit" id="moon-orbit">
                        <div className="globe" id="moon"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovingPlanet;