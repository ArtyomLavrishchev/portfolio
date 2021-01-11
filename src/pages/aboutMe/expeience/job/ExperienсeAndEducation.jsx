import React from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import style from "./ExperienсeAndEducation.module.css"

export const ExperienceAndEducation = (props) => {
    return (
        props.experience.map(w => {
            return (
                <div key={w.id} className={style.wrapper}>
                    <div>
                        <FontAwesomeIcon className={style.icon} icon={w.logo}/>
                    </div>
                    <div>
                        <span>{w.date}</span>
                    </div>
                    <div>
                        <h5>{w.specialty}</h5>
                        <span>{` - ${w.organisation}`}</span>
                    </div>
                    <div>
                        <p>{w.description}</p>
                    </div>
                </div>
            )
        })
    )
}