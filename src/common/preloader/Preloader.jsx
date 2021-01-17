import React, {useEffect, useState} from "react";
import style from "./Preloader.module.css"

export const Preloader = () => {
    const [onLoad, setOnLoad] = useState(false)
    useEffect(() => {
        setOnLoad(true)
    }, [])
    const finalClassName = `${onLoad ? style.onLoad : ''} ${style.preloader}`
    return (
        <div className={finalClassName}/>
    )
}