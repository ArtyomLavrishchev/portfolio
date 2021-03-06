import React from "react";
import Skill from "./skill/Skill";
import style from "./Skills.module.css"
import styleContainer from "../../../common/styles/Container.module.scss";
import cssIcon from "../../../assets/images/icons/cssIcon.svg"
import htmlIcon from "../../../assets/images/icons/htmlIcon.svg"
import jsIcon from "../../../assets/images/icons/jsIcon.svg"
import reactIcon from "../../../assets/images/icons/reactIcon.svg"
import typescriptIcon from "../../../assets/images/icons/typescriptIcon.svg"
import reduxIcon from "../../../assets/images/icons/reduxIcon.svg"

const skills = [
    {name: "JavaScript", icon: jsIcon},
    {name: "TypeScript", icon: typescriptIcon},
    {name: "HTML", icon: htmlIcon},
    {name: "CSS", icon: cssIcon},
    {name: "React", icon: reactIcon},
    {name: "Redux", icon: reduxIcon}
]

export const Skills = (props) => {
    return (
        <div className={`${styleContainer.container} ${style.skillsContainer}`}>
            <h3 className={style.title}>MY SKILLS</h3>
            <div>
                <div className={style.skills}>
                    {skills.map(s => <Skill theme={props.theme} icon={s.icon} title={s.name} key={s.name}/>)}
                </div>
            </div>
        </div>
    )
}