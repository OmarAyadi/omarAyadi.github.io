import React from 'react';
import './lantern.scss'

function Lantern() {
    return (
        <div className="stage">
            <div className="scene">
                <div className="halo">
                    <i></i>
                    <span className="halo-star"></span>
                    <span className="halo-star"></span>
                    <span className="halo-star"></span>
                    <i></i>
                    <i></i>
                    <i></i>
                </div>
                <div className="lantern">
                    <div className="lantern-handle"></div>
                    <div className="lantern-inner">
                        <div className="lantern-chain"></div>
                        <div className="lantern-head"></div>
                        <div className="lantern-body">
                            <div className="lantern-spark"></div>
                            <div className="lantern-spark"></div>
                            <div className="lantern-spark"></div>
                            <div className="lantern-flame"></div>
                        </div>
                        <div className="lantern-base"></div>
                    </div>
                </div>
                <div className="planets">
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                    <div className="planet"></div>
                </div>
            </div>
        </div>
    );
}

export default Lantern;