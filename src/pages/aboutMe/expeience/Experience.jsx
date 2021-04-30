import React from "react";
import styleContainer from "../../../common/styles/Container.module.scss";
import style from "./Experience.module.scss";
import {ExperienceAndEducation} from "./job/ExperienсeAndEducation";
import {faUserGraduate, faUserTie} from "@fortawesome/free-solid-svg-icons";
import MyCV from '../../../assets/cv/LavrishchevArtem.pdf';

const jobs = [
    {
        id: 1,
        specialty: "Frontend Developer",
        organisation: "ZUZEX",
        date: "2021-PRESENT",
        description: "React JS developer",
        logo: faUserTie
    },
    {
        id: 2,
        specialty: "GEOINFORMATION SYSTEMS SPECIALIST",
        organisation: "DATUM GROUP",
        date: "2018-2021",
        description: `Work in various information systems (ArcGIS, QGIS, Zulu, etc.), preparation of reporting documentation,
                      quality control of work employees. Participation in projects for creation of various GIS systems for state structures,
                      infrastructure companies and large business. Database creation and cartographic material as a basis for IT solutions.`,
        logo: faUserTie
    },
    {
        id: 3,
        specialty: "HEAD OF AUTO VINYL STUDIO",
        organisation: "INDIVIDUAL ENTREPRENEUR LAVRISHCHEV ARTEM SERGEEVICH",
        date: "2014-2018",
        description: "Organization of a stable service functioning at all stages work.",
        logo: faUserTie
    },
]

const university = [
    {
        id: 1,
        specialty: "FRONTEND DEVELOPER",
        organisation: "IT-INCUBATOR",
        date: "2020-2021",
        description: "JS, React, Redux courses",
        logo: faUserGraduate
    },
    {
        id: 2,
        specialty: "GEOECOLOGY",
        organisation: "SOUTH FEDERAL UNIVERSITY",
        date: "2007-2012",
        description: null,
        logo: faUserGraduate
    }
]

export const Experience = (props) => {
    return (
        <div className={`${styleContainer.container} ${style.experienceContainer}`}>
            <h3 className={style.title}>EXPERIENCE & EDUCATION</h3>
            <div className={style.wrapper}>
                <div className={style.item}>
                    <ExperienceAndEducation theme={props.theme} experience={jobs}/>
                </div>
                <div className={style.item}>
                    <ExperienceAndEducation theme={props.theme} experience={university}/>
                    <a className={style.cv} href={MyCV} download="LavrishchevArtemCV.pdf"> DOWNLOAD CV </a>
                </div>
            </div>
        </div>
    )
}