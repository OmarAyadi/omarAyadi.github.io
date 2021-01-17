import React, {useEffect} from 'react';

import './test.css'
import useThemeToggle from "./theme/ThemeToggle";
import {ConsoleText} from "./text";
import {User_Profile_Data} from "../data";
import {Layout} from "./screen";
import {Profile} from "./profile";

function Test() {

    const {themeToggle} = useThemeToggle()

    return (
        <div className="test2">
            <Layout>
                <Profile/>
            </Layout>

        </div>
    );
}

export default Test;