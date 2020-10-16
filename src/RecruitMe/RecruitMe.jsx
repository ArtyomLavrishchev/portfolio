import React from 'react';
import styleContainer from "../Common/Styles/Container.module.css"
import style from "./RecruitMe.module.css";


function RecruitMe() {
    return (
        <div className={style.block}>
            <div className={`${styleContainer.container} ${style.container}`}>
                <h3>I'm considering remote work options</h3>
                <button>Recruit Me</button>
            </div>
        </div>
    );
}

export default RecruitMe;
