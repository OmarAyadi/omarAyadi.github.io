import React, {useEffect} from 'react';
import './component/_global-styles/app.scss'
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import {User_Profile_Data} from "./data";
import {NavBar, NotFoundScreen, Profile} from "./component";
import {ThemeProvider} from "./component/theme/ThemeContext";
import Test from "./component/Test";

function App() {

    useEffect(() => {
        document.title = User_Profile_Data.name
    }, [])

    return (
        <ThemeProvider>
            <Router basename="/">
                {/*<NavBar/>*/}
                <Switch>
                    <Route path="/" exact component={Profile}/>
                    <Route path="/nav" exact component={NavBar}/>
                    <Route path="/test" exact component={Test}/>
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
