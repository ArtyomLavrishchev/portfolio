import React from 'react';
import style from "./Home.module.scss"
import {NavLink} from "react-router-dom"
import styleContainer from "../../common/styles/Container.module.scss";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {Preloader} from "../../common/preloader/Preloader";

function Home(props) {
    const {text, block} = props.theme
    return (
        <>
            <Preloader/>
            <div className={style.wrapper}>
                <div className={`${styleContainer.container} ${style.mainBlock}`}>
                    <div style={block} className={style.colorBlock}/>
                    <div className={style.photo}/>
                    <div className={style.text}>
                        <div>
                            <h6 className={style.greeting}>Hi THERE!</h6>
                            <h1 style={text} className={style.myName}><span>I'M</span> ARTEM LAVRISHCHEV</h1>
                            <p className={style.aboutMe}>I'm a front‑end developer focused on crafting clean &
                                user‑friendly
                                experiences.
                                I am passionate about building excellent software that improves the lives of those
                                around
                                me.
                            </p>
                        </div>
                        <NavLink className={style.link} to={'/about_me'}>
                            <div style={block} className={style.button}>
                                MORE ABOUT ME
                                <span>
                    <FontAwesomeIcon icon={faUser}/>
                    </span>
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;