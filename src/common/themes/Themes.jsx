import React, {useState} from "react";
import style from './Themes.module.css'

export const Themes = (props) => {
    const [checked, setChecked] = useState(false);
    const isActive = (e) => {
        let newActiveValue = e.currentTarget.checked
        setChecked(newActiveValue)
    }

    const activeMenuClass = `${checked ? style.menuActive : style.menu}`


    return (
        <div className={style.wrapper}>
            <div className={activeMenuClass}>
                <label className={style.label}>
                    <input type={"checkbox"} onChange={isActive} className={style.checkbox}/>
                    <span style={props.theme.text} className={style.fake}><div>{checked ? "\u2716" : "\u2699"}</div></span>
                </label>
                {props.colors.map(color => <div onClick={() => props.setColor(color)} className={style.color} style={{'background': color }}/>)}
            </div>
        </div>
    )
}