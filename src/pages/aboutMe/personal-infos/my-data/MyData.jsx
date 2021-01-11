import React from "react";
import style from "./MyData.module.css";

export const MyData = (props) => {
    return (
        <div>
            <h3 className={style.title}>PERSONAL INFOS</h3>
            <div className={style.wrapper}>
                <div className={style.block}>
                    {props.me.map(d => <div key={d.item}>
                            <span className={style.item}>{`${d.item}:`}</span>
                            <span className={style.value}>{`${d.value}`}</span>
                        </div>
                    )}
                </div>
                <div className={style.block}>
                    {props.contacts.map(d => <div key={d.item}>
                            <span className={style.item}>{`${d.item}:`}</span>
                            <span className={style.value}>{`${d.value}`}</span>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}