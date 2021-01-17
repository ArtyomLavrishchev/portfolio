import React from 'react';
import Header from "../header/Header";
import {PersonalInfos} from "./personal-infos/PersonalInfos";
import {Skills} from "./skills/Skills";
import {Experience} from "./expeience/Experience";
import {Preloader} from "../../common/preloader/Preloader";

function AboutMe(props) {
    return (
        <>
            <Preloader/>
            <Header h1Title={"ABOUT"} spanTitle={" ME"} rearTitle={"RESUME"}/>
            <PersonalInfos/>
            <Skills theme={props.theme}/>
            <Experience theme={props.theme}/>
        </>
    );
}

export default AboutMe;
