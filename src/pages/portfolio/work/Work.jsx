import React from 'react';
import style from "./work.module.scss"

function Work({work, theme}) {
    return (
        <div className={style.work}>
            <div style={{backgroundImage: `url(${work.img})`}} className={style.image}>
            </div>
            <div className={style.project}>
                <a style={theme.text} href={work.url}>{work.title}</a>
            </div>
        </div>
    );
}

export default Work;
