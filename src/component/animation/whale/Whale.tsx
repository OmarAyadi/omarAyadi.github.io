import React from 'react';
import './whale.scss'

function Whale() {
    return (
            <div className="whale-scene">
                <div className="whale-upper">
                    <div className="whale-moon">
                        <div className="whale-crater1"></div>
                        <div className="whale-crater2"></div>
                    </div>
                    <div className="whale-star1"></div>
                    <div className="whale-star2"></div>
                    <div className="whale-star3"></div>
                    <div className="whale-cloud1">
                        <div className="whale-circle"></div>
                        <div className="whale-filler"></div>
                    </div>
                    <div className="whale-cloud2">
                        <div className="whale-circle"></div>
                        <div className="whale-filler"></div>
                    </div>
                    <div className="whale-tail">
                        <div className="whale-left"></div>
                        <div className="whale-right"></div>
                        <div className="whale-body"></div>
                    </div>

                    <div className="whale-drop"></div>

                </div>
                <div className="whale-lower">
                    <div className="whale">
                        <div className="whale-eye"></div>
                        <div className="whale-detail1">
                            <div className="whale-detail2"></div>
                        </div>

                    </div>
                    <div className="whale-fin"></div>
                </div>
            </div>
    );
}

export default Whale;