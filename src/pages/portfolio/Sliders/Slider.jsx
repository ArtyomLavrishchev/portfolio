import React from 'react';
import Coverflow from "./coverflow/Coverflow";
import {useWindowSize} from "../../../common/hooks/hooks";
import Cube from "./cube/Cube";

const Slider = ({works, theme}) => {
    const {width} = useWindowSize()
    return width > 990 ? <Coverflow works={works} theme={theme}/> :
        <Cube works={works} theme={theme}/>
};

export default Slider;