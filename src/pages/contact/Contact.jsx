import React from 'react';
import style from "./Contact.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../header/Header";
import {Preloader} from "../../common/preloader/Preloader";
import {useFormik} from 'formik'
import axios from 'axios'

function Contact() {
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: async (values) => {
            await axios.post('https://smtp-nodejs-server01.herokuapp.com/sendMessage', values)
        },
    });
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <Header h1Title={"GET IN"} spanTitle={" TOUCH"} rearTitle={"CONTACT"}/>
                    <form onSubmit={formik.handleSubmit}>
                        <label htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder={"Your email"}
                        />
                        <label htmlFor="name">Your name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder={"Your name"}
                        />
                        <label htmlFor="message">Your message</label>
                        <textarea
                            id="message"
                            name="message"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder={"Your name"}
                        />

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
