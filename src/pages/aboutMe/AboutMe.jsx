import React from 'react';
import Header from "../header/Header";
import {PersonalInfos} from "./personal-infos/PersonalInfos";
import {Skills} from "./skills/Skills";
import {Experience} from "./expeience/Experience";
import {Preloader} from "../../common/preloader/Preloader";
import style from "./AboutMe.module.scss"


function AboutMe(props) {
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <Header h1Title={"ABOUT"} spanTitle={" ME"} rearTitle={"RESUME"}/>
                <PersonalInfos/>
                <Skills theme={props.theme}/>
                <Experience theme={props.theme}/>
            </div>
        </>
    );
}

export default AboutMe;
