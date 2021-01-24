import React from 'react';
import Footer from "../footer/Footer";

import './layout.scss'
import {useSplashScreen} from "..";
import {NavBar} from "../../navBar";


type LayoutProps = {
    children: React.ReactNode,
}

function Layout({children}: LayoutProps) {
    const [loading, SplashScreen] = useSplashScreen()

    return (
        <>
            {loading ? SplashScreen :
                <div className="layout">
                    <div className="layout-top">
                        <NavBar/>
                    </div>
                    <div className="layout-body">
                        {children}
                    </div>
                    <div className="layout-bottom">
                        <Footer/>
                    </div>
                </div>
            }
        </>
    );
}

export default Layout;