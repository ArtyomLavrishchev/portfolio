import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import Home from "../../pages/home/Home";
import MyPortfolio from "../../pages/portfolio/MyPortfolio";
import AboutMe from "../../pages/aboutMe/AboutMe";
import Contact from "../../pages/contact/Contact";

export const PATH = {
    HOME: "/home",
    ABOUT_ME: "/about_me",
    PORTFOLIO: "/portfolio",
    CONTACTS: "/contact",
}

function Routes(props) {
    return (
        <div>
            <Switch>
                <Route path={"/"} exact render={() => <Redirect to={PATH.HOME}/>}/>
                <Route path={PATH.HOME} render={() => <Home theme={props.theme}/>}/>
                <Route path={PATH.ABOUT_ME} render={() => <AboutMe theme={props.theme}/>}/>
                <Route path={PATH.PORTFOLIO} render={() => <MyPortfolio theme={props.theme}/>}/>
                <Route path={PATH.CONTACTS} render={() => <Contact theme={props.theme}/>}/>
            </Switch>
        </div>
    );
}

export default Routes;
