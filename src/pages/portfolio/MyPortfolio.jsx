import React from 'react';
import style from "./MyPortfolio.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../header/Header";
import {Preloader} from "../../common/preloader/Preloader";
import Slider from "./Sliders/Slider";
import socialNet from "../../assets/images/works/socialnet.png"
import trainingCards from "../../assets/images/works/trainingCards.png"
import todo from "../../assets/images/works/todo.png"
import chat from "../../assets/images/works/chat.png"


function MyPortfolio({theme}) {
    const works = [
        {
            id: 1,
            title: "Social network",
            img: socialNet,
            url: "https://artyomlavrishchev.github.io/social-network/"
        },
        {
            id: 2,
            title: "Todolist",
            img: todo,
            url: "https://artyomlavrishchev.github.io/social-network/"
        },
        {
            id: 3,
            title: "Training cards",
            img: trainingCards,
            url: "https://sshaporov.github.io/friday/"
        },
        {
            id: 4,
            title: "Chat_socket_io",
            img: chat,
            url: "https://artyomlavrishchev.github.io/chat_socket_io/"
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
