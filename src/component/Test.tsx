import React from 'react';

import './test.css'
import {Profile} from "./index";
import Layout from "./screen/Layout";

function Test() {

    return (
        <div className="test2">
            <Layout><Profile/></Layout>
            {/*<SpinText/>*/}
        </div>
    );
}

export default Test;