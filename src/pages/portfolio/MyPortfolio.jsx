import React from 'react';
import style from "./MyPortfolio.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../header/Header";
import {Preloader} from "../../common/preloader/Preloader";
import Slider from "./Slider/Slider";
import socialNet from "../../assets/images/works/socialnet.png"
import trainingCards from "../../assets/images/works/trainingCards.png"


function MyPortfolio({theme}) {
    const works = [
        {
            title: "Social network",
            img: socialNet,
            url: "https://artyomlavrishchev.github.io/social-network/"
        },
        {
            title: "Todolist",
            img: "https://img5.goodfon.ru/wallpaper/nbig/8/8b/abstraktsiia-kartinka-rendering-svetiashchiesia-volny-igra-s.jpg",
            url: "https://artyomlavrishchev.github.io/social-network/"
        },
        {
            title: "Training cards",
            img: trainingCards,
            url: "https://sshaporov.github.io/friday/"
        },
    ]
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <Header h1Title={"MY"} spanTitle={" PORTFOLIO"} rearTitle={"WORKS"}/>
                <div className={`${styleContainer.container} ${style.worksContainer}`}>
                    <Slider theme={theme} works={works}/>
                </div>

            </div>
        </>
    );
}

export default MyPortfolio;
