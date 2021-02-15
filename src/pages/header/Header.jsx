import React from 'react';
import style from "./Header.module.scss"
import {useSelector} from "react-redux";

function Header(props) {
    const selectedColor = useSelector(state => state.theme.themeColor)

    return (
        <header className={style.header}>
            <h1 className={style.frontTitle}>
                {props.h1Title}
                <span style={{color: selectedColor, transition: '1s'}}>{props.spanTitle}</span>
            </h1>
            <span className={style.backTitle}>{props.rearTitle}</span>
        </header>
    );
}

export default Header;
