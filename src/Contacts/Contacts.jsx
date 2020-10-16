import React from 'react';
import style from "./Contacts.module.css"
import styleContainer from "../Common/Styles/Container.module.css"

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h2>Contacts</h2>
                <form name={"Contacts"} className={style.form}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea/>
                </form>
                <button>"Send"</button>
            </div>
        </div>
    );
}

export default Contacts;
