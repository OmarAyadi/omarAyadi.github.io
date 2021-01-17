import React from 'react';
import {NavBar, useSplashScreen} from "../index";
import Footer from "./Footer";

import './styles/layout.scss'


type LayoutProps = {
    children: React.ReactNode
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