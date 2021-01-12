import React, {useEffect} from 'react';
import "./app.css"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import { Profile, AboutMe, Work, Loading} from './component'

function App() {

    useEffect(() => {
        document.title = "Mohamed Omar Ayadi"
    }, [])

    return (
        <>
            <Router>
                {/*<NavBar/>*/}
                <Switch>
                    <Route path="/" exact component={Loading}/>
                    <Route path="/profile" component={Profile}/>
                    <Route path="/about" component={AboutMe}/>
                    <Route path="/work" component={Work}/>
                </Switch>
            </Router>
        </>
    );
}

// todo
// install messanger APP
//    https://www.facebook.com/business/m/add-messenger-to-your-website

export default App;
