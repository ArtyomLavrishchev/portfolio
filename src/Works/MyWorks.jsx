import React from 'react';
import style from "./Works.module.css"
import styleContainer from "../Common/Styles/Container.module.css"
import Work from "./work/Work";

function MyWorks() {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>My works</h2>
                <div className={style.works}>
                    <Work title={"Project name"}
                          description={"Short description"}/>
                    <Work title={"Project name"}
                          description={"Short description"}/>
                </div>
            </div>
        </div>
    );
}

export default MyWorks;
