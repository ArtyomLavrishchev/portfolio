import React from 'react';
import style from "./Nav.module.scss"
import {PATH} from "../routes/Routes1";
import {NavLink} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelopeOpen, faHome, faSuitcase, faUser} from "@fortawesome/free-solid-svg-icons";

function Nav(props) {
    const activeColor = props.theme.block
    return (
        <div className={style.navBlock}>
            <NavLink className={style.item} activeStyle={activeColor} to={PATH.HOME}>
                <span style={activeColor}>HOME</span>
                <FontAwesomeIcon icon={faHome}/>
            </NavLink>
            <NavLink className={style.item} activeStyle={activeColor} to={PATH.ABOUT_ME}>
                <span style={activeColor}>ABOUT</span>
                <FontAwesomeIcon icon={faUser}/>
            </NavLink>
            <NavLink className={style.item} activeStyle={activeColor} to={PATH.PORTFOLIO}>
                <span style={activeColor}>PORTFOLIO</span>
                <FontAwesomeIcon icon={faSuitcase}/>
            </NavLink>
            <NavLink className={style.item} activeStyle={activeColor} to={PATH.CONTACTS}>
                <span style={activeColor}>CONTACT</span>
                <FontAwesomeIcon icon={faEnvelopeOpen}/>
            </NavLink>

        </div>
    );
}

export default Nav;