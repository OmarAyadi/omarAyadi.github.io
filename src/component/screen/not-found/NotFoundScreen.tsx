import React from 'react';
import './not-found-screen.scss'
import {HoverButton} from "../../button";

function NotFoundScreen() {
    return (
        <>
            <div className="nfs-wrapper">
                <div className="nfs-error">
                    <span className="nfs-error-number">4</span>
                    <div className="nfs-error-illustration">
                        <div className="nfs-error-illustration-circle"></div>
                        <div className="nfs-error-illustration-clip">
                            <div className="nfs-error-illustration-paper">
                                <div className="nfs-error-illustration-face">
                                    <div className="nfs-error-illustration-eyes">
                                        <div
                                            className="nfs-error-illustration-eye nfs-error-illustration-eye-left"></div>
                                        <div
                                            className="nfs-error-illustration-eye nfs-error-illustration-eye-right"></div>
                                    </div>
                                    <div
                                        className="nfs-error-illustration-rosyCheeks nfs-error-illustration-rosyCheeks-left"></div>
                                    <div
                                        className="nfs-error-illustration-rosyCheeks nfs-error-illustration-rosyCheeks-right"></div>
                                    <div className="nfs-error-illustration-mouth"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <span className="nfs-error-number">4</span>
                </div>

                <div className="nfs-direction">
                    <div className="nfs-direction-text">Oops. The page you're looking for doesn't exist.</div>
                    <HoverButton
                        link="/"
                        text="Back Home"
                    />
                </div>
            </div>
        </>
    );
}

export default NotFoundScreen;