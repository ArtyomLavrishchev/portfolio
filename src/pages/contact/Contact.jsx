import React, {useState} from 'react';
import style from "./Contact.module.scss"
import styleContainer from "../../common/styles/Container.module.scss"
import Header from "../header/Header";
import {Preloader} from "../../common/preloader/Preloader";
import {useFormik} from 'formik'
import axios from 'axios'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane} from "@fortawesome/free-regular-svg-icons";

function Contact(props) {
    const [disable, setDisable] = useState(false)
    const {block} = props.theme
    const formik = useFormik({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        onSubmit: async (values) => {
            setDisable(true)
            await axios.post('https://smtp-nodejs-server01.herokuapp.com/sendMessage', values)
                .then(() => setDisable(false))
        },
    });
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <Header h1Title={"GET IN"} spanTitle={" TOUCH"} rearTitle={"CONTACT"}/>
                <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                    <div className={style.contacts}>
                        <h3>DON'T BE SHY !</h3>
                        <p>Feel free to get in touch with me. I am always open to discussing new projects, creative
                            ideas or opportunities to be part of your visions.</p>
                        <p>
                            <span>MAIL ME</span>
                            <a href="mailto:temalggt540@gmail.com" type={"email"}>temalggt540@gmail.com</a>

                        </p>
                        <p>
                            <span>CALL ME</span>
                            <a href="tel:+7 (989)711 61 72">+7 989 711 61 72</a>

                        </p>
                    </div>
                    <form onSubmit={formik.handleSubmit} className={style.form}>
                        <label htmlFor="email"/>
                        <input
                            className={style.formArea}
                            id="email"
                            name="email"
                            type="email"
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            placeholder={"YOUR EMAIL"}
                        />
                        <label htmlFor="name"/>
                        <input
                            className={style.formArea}
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                            placeholder={"YOUR NAME"}
                        />
                        <label htmlFor="message"/>
                        <textarea
                            className={style.messageArea}
                            id="message"
                            name="message"
                            onChange={formik.handleChange}
                            value={formik.values.message}
                            placeholder={"YOUR MESSAGE"}
                        />
                        <button disabled={disable} style={block} className={style.btn} type="submit">
                            SEND <span><FontAwesomeIcon icon={faPaperPlane}/></span>
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Contact;
