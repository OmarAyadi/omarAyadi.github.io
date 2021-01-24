import React from 'react';
import './component/_global-styles/app.scss'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "./component/theme/ThemeContext";
import {NotFoundScreen} from "./component/screen";
import {Profile} from "./component/profile";
import Test from "./component/Test";
import {About} from "./component/about";
import {Work} from "./component/work";
import {Skills} from "./component/skill";

function App() {


    return (
        <ThemeProvider>
            <Router basename={"/"}>
                <Switch>
                    <Route path="/" exact component={Profile}/>
                    <Route path="/about" component={About}/>
                    <Route path="/work" exact component={Work}/>
                    <Route path="/skills" exact component={Skills}/>
                    <Route component={NotFoundScreen}></Route>
                </Switch>
            </Router>
        </ThemeProvider>
    );
}

// todo
// 1. install messanger APP https://www.facebook.com/business/m/add-messenger-to-your-website
// chat bot with api.ai


export default App;
