import React from 'react';
import style from "./Header.module.css"

function Header(props) {
    return (
        <div className={style.header}>
            <h1 className={style.frontTitle}>
                {props.h1Title}
                <span>{props.spanTitle}</span>
            </h1>
            <span className={style.backTitle}>{props.rearTitle}</span>
        </div>
    );
}

export default Header;
