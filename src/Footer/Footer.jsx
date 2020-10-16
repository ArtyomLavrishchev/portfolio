import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css"
import style from "./Footer.module.css";


function Footer() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <span>Artem Lavrishchev</span>
                <div className={style.icons}>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                    <div className={style.icon}></div>
                </div>
                <span>ⓒ 2020 All rights reserved.</span>
            </div>
        </div>
    );
}

export default Footer;
