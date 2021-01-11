import React from 'react';
import style from "./work.module.css"

function Work(props) {
    return (
        <div className={style.work}>
            <div className={style.image}>
                <button>Look</button>
            </div>
            <div className={style.project}>
                <h4>{props.title}</h4>
                <span className={style.description}>{props.description}</span>
            </div>
        </div>
    );
}

export default Work;
