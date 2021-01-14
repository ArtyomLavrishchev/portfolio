import React from 'react';
import './App.css';
import Routes from "./common/routes/Routes1";
import Nav from "./common/nav/Nav";
import {Themes} from "./common/themes/Themes";
import {useDispatch, useSelector} from "react-redux";
import {setThemeColorAC} from "./redux/themesReducer";
import {useWindowSize} from "./common/hooks/hooks";

function App() {
    const size = useWindowSize()
    const dispatch = useDispatch()
    const colorsForTheme = useSelector(state => state.theme.colors)
    const selectedColor = useSelector(state => state.theme.themeColor)
    const setColor = (color) => {
        dispatch(setThemeColorAC(color))
    }
    const theme = {
        block: {
            backgroundColor: selectedColor,
        },
        text: {
            color: selectedColor
        }
    }
    return (
        <div className={"App"}>
            <Themes setColor={setColor} colors={colorsForTheme} theme={theme}/>
            <Nav theme={theme}/>
            <Routes size={size} theme={theme}/>
        </div>
    );
}

export default App;
