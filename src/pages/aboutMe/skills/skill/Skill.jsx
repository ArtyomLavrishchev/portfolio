import React from 'react';
import style from "./Skill.module.css"

function Skill(props) {
    return (
        <div className={style.skill}>
            <div className={style.item}>
                <div style={{boxShadow: `0 0 0 10px ${props.theme.block.backgroundColor}`}} className={style.logoBack}>
                <img src={props.icon} alt={props.title} className={style.icon}/>
                </div>
            </div>
            <span>{props.title}</span>
        </div>
    );
}

export default Skill;
