import React from "react";
import styleContainer from "../../../common/styles/Container.module.css";
import style from "./Experience.module.css";
import {ExperienceAndEducation} from "./job/ExperienсeAndEducation";
import {faUserGraduate, faUserTie} from "@fortawesome/free-solid-svg-icons";

const jobs = [
    {
        id: 1,
        specialty: "GEOINFORMATION SYSTEMS SPECIALIST",
        organisation: "DATUM GROUP",
        date: "2018-PRESENT",
        description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
        logo: faUserTie
    },
    {
        id: 2,
        specialty: "HEAD OF AUTO VINYL STUDIO",
        organisation: "INDIVIDUAL ENTREPRENEUR LAVRISHCHEV ARTEM SERGEEVICH",
        date: "2014-2018",
        description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
        logo: faUserTie
    }
]

const university = [
    {
        id: 1,
        specialty: "FRONTEND DEVELOPER",
        organisation: "IT-INCUBATOR",
        date: "2020-PRESENT",
        description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
        logo: faUserGraduate
    },
    {
        id: 2,
        specialty: "GEOECOLOGY",
        organisation: "SOUTH FEDERAL UNIVERSITY",
        date: "2007-2012",
        description: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
        logo: faUserGraduate
    }
]

export const Experience = () => {
    return (
        <div className={`${styleContainer.container} ${style.experienceContainer}`}>
            <h2>EXPERIENCE & EDUCATION</h2>
            <div className={style.wrapper}>
                <div>
                    <ExperienceAndEducation experience={jobs}/>
                </div>
                <div>
                    <ExperienceAndEducation experience={university}/>
                </div>
            </div>
        </div>
    )
}