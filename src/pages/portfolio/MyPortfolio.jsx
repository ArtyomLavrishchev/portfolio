import React from 'react';
import style from "./MyPortfolio.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Work from "./work/Work";
import Header from "../header/Header";
import {Preloader} from "../../common/preloader/Preloader";

function MyPortfolio() {
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <Header h1Title={"MY"} spanTitle={" PORTFOLIO"} rearTitle={"WORKS"}/>
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
        </>
    );
}

export default MyPortfolio;
