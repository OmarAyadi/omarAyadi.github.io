import React from 'react';
import Footer from "../footer/Footer";

import './layout.scss'
import {NavBar} from "../../navBar";


type LayoutProps = {
    children: React.ReactNode
}

function Layout({children}: LayoutProps) {

    return (
        <>
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
        </>
    );
}

export default Layout;