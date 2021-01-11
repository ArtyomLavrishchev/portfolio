import React from 'react';
import style from "./Contact.module.css"
import styleContainer from "../../common/styles/Container.module.css"
import Header from "../header/Header";

function Contact() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <Header h1Title={"GET IN"} spanTitle={" TOUCH"} rearTitle={"CONTACT"}/>
                <form name={"Contact"} className={style.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                </form>
                <button>"Send"</button>
            </div>
        </div>
    );
}

export default Contact;
