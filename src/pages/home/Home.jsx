import React from 'react';
import style from "./Home.module.css"
import {NavLink} from "react-router-dom"
import photo from "../../assets/images/photo/photo.jpg"
import styleContainer from "../../common/styles/Container.module.css";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Home(props) {
    const myPhoto = {
        backgroundImage: `url(${photo})`
    }
    return (
        <div className={`${styleContainer.container} ${style.mainBlock}`}>
            <div style={props.theme.block} className={style.colorBlock}/>
            <div style={myPhoto} className={style.photo}/>
            <div className={style.text}>
                <h6 className={style.greeting}>Hi THERE!</h6>
                <h1 style={props.theme.text} className={style.myName}><span>I'M</span> ARTEM LAVRISHCHEV</h1>
                <p className={style.aboutMe}>I'm a front‑end developer focused on crafting clean &
                    user‑friendly
                    experiences.
                    I am passionate about building excellent software that improves the lives of those around me.
                </p>
                <NavLink className={style.link} to={'/about_me'}>
                <div style={props.theme.block} className={style.button}>
                    MORE ABOUT ME
                    <span>
                    <FontAwesomeIcon icon={faUser}/>
                    </span>
                </div>
            </NavLink>
            </div>
        </div>
    );
}

export default Home;