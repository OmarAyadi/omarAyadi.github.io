import React from 'react';
import './moving-boat.scss'

function MovingBoat() {

    const createWaves = (wavesNumber: number) => {

        const waves: Array<JSX.Element> = []


        for (let i = 0; i < wavesNumber; i++) {
            waves.push(<div key={i} className="wave">
                <div className="graphic"></div>
            </div>)
        }
        return waves
    }

    return (
        <div className="summerdream">
            <div className="sea">
                <div className="surface">
                    <div className="fish"></div>
                </div>
            </div>
            <div className="ship">
                <div className="rotate">
                    <div className="move">
                        <div className="body">
                            <div className="waves">
                                <div className="bodywaves">
                                    {createWaves(50)}
                                </div>
                                <div className="oarwaves -left">
                                    {createWaves(20)}
                                </div>
                                <div className="oarwaves -right">
                                    {createWaves(20)}
                                </div>
                            </div>
                            <div className="base"></div>
                            <div className="board -front"></div>
                            <div className="board -back"></div>
                        </div>
                        <div className="oars">
                            <div className="oar -left">
                                <div className="row -left">
                                    <div className="depth -left">
                                        <div className="graphic -left"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="oar -right">
                                <div className="row -right">
                                    <div className="depth -right">
                                        <div className="graphic -right"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="human">
                            <div className="legs">
                                <div className="leg -left"></div>
                                <div className="leg -right"></div>
                            </div>
                            <div className="hat"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovingBoat;