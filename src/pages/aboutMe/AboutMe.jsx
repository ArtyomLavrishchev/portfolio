import React from 'react';
import Header from "../header/Header";
import {PersonalInfos} from "./personal-infos/PersonalInfos";
import {Skills} from "./skills/Skills";
import {Experience} from "./expeience/Experience";

function AboutMe() {
    return (
        <>
            <Header h1Title={"ABOUT"} spanTitle={" ME"} rearTitle={"RESUME"}/>
            <PersonalInfos/>
            <Skills/>
            <Experience/>
        </>
    );
}

export default AboutMe;
