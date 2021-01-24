import React from 'react';

import './test.css'
import {useThemeToggle} from "./theme";

function Test() {
    const {themeToggle} = useThemeToggle()


    return (
        <div className="">
            {themeToggle}

        </div>
    );
}

export default Test;