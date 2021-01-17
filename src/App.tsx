import React, {useEffect} from 'react';
import './component/_global-styles/app.scss'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {User_Profile_Data} from "./data";
import {ThemeProvider} from "./component/theme/ThemeContext";
import {NotFoundScreen} from "./component/screen";
import {Profile} from "./component/profile";

function App() {

    return (
        <ThemeProvider>
            <Router basename="/">
                <Switch>
                    <Route path="/" exact component={Profile}/>
                    {/*<Route path="/test" exact component={Test}/>*/}
                    <Route component={NotFoundScreen}></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

// todo
// 1. install messanger APP https://www.facebook.com/business/m/add-messenger-to-your-website
// 2. add 404 page

export default App;
