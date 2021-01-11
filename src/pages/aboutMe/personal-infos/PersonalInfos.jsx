import React from "react";
import style from "./PersonalInfos.module.css"
import styleContainer from "../../../common/styles/Container.module.css";
import {MyData} from "./my-data/MyData";

export const PersonalInfos = () => {
    let date = (new Date().getTime() - new Date('1990-08-27')) / (24 * 3600 * 365.25 * 1000) | 0
    const me = [
        {item: "First Name", value: "Artem"},
        {item: "Last Name", value: "Lavrishchev"},
        {item: "Age", value: `${date} Years`},
        {item: "Languages", value: "Russian, English"}
    ]

    const contacts = [
        {item: "Address", value: "Rostov-on-Don"},
        {item: "Phone", value: "+7(989)7116172"},
        {item: "Email", value: "temalggt540@gmail.com"},
        {item: "Skype", value: "Artem_Lavrishchev"},
    ]

    return (
        <div className={`${styleContainer.container} ${style.infoContainer}`}>
            <MyData me={me} contacts={contacts}/>
        </div>
    )
}