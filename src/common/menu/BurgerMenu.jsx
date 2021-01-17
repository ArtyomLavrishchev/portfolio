import React, {useState} from "react";
import style from "./BurgerMenu.module.scss"
import {NavLink} from "react-router-dom";
import {PATH} from "../routes/Routes1";

export const BurgerMenu = (props) => {
    const [checked, setChecked] = useState(false);

    const activeColor =  props.theme.text
    const closeMenu = () => setChecked(false)
    const activeMenuClass = `${checked ? style.burgerMenuActive : ''} ${style.burgerMenu}`

    return (
        <div className={activeMenuClass}>
            <div onClick={() => setChecked(!checked)} className={style.burgerMenuButton}>
                <span className={style.burgerMenuLines}/>
            </div>
            <div className={style.burgerMenuNav}>
                <NavLink activeStyle={activeColor} onClick={closeMenu} to={PATH.HOME}>
                    <span>HOME</span>
                </NavLink>
                <NavLink activeStyle={activeColor} onClick={closeMenu} to={PATH.ABOUT_ME}>
                    <span>ABOUT</span>
                </NavLink>
                <NavLink activeStyle={activeColor} onClick={closeMenu} to={PATH.PORTFOLIO}>
                    <span>PORTFOLIO</span>
                </NavLink>
                <NavLink activeStyle={activeColor} onClick={closeMenu} to={PATH.CONTACTS}>
                    <span>CONTACT</span>
                </NavLink>
                <div className={style.settings}>
                    {props.colors.map(color => <span onClick={() => props.setColor(color)} className={style.color} style={{'background': color }}/>)}
                </div>
            </div>
        </div>
    )
}
//activeStyle={activeColor}