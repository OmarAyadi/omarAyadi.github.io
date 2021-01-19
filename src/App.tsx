import React from 'react';
import './component/_global-styles/app.scss'
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {ThemeProvider} from "./component/theme/ThemeContext";
import {NotFoundScreen, useSplashScreen} from "./component/screen";
import {Profile} from "./component/profile";
import Test from "./component/Test";
import {NavBar} from "./component/navBar";
import Footer from "./component/screen/footer/Footer";

function App() {

    const [loading, SplashScreen] = useSplashScreen()

    return (
        <ThemeProvider>

            {loading ? SplashScreen :
                <div className="appLayout">
                    <Router basename={"/"}>
                        <div className="appLayout-top">
                            <NavBar/>
                        </div>
                        <div className="appLayout-body">
                            <Switch>
                                <Route path="/" exact component={Profile}/>
                                <Route path="/test" exact component={Test}/>
                                <Route component={NotFoundScreen}></Route>
                            </Switch>
                        </div>
                        <div className="appLayout-bottom">
                            <Footer/>
                        </div>
                    </Router>
                </div>
            }
        </ThemeProvider>

    );
}

// todo
// 1. install messanger APP https://www.facebook.com/business/m/add-messenger-to-your-website

export default App;
