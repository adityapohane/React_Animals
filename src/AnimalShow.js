import React from 'react';
import { useState } from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import horse from './svg/horse.svg';
import heart from './svg/heart.svg'

const svgMap = {
    bird,
    cat,
    cow,
    dog,
    gator,
    horse
}


const AnimalShow = ({ type }) => {
    const [click, setclick] = useState(0);
    function handleClick() {
        setclick(click + 1);
       
    }
    return (
        <div onClick={handleClick}>
            <img src={svgMap[type]} alt="abc" />
            <img src={heart} alt="alt"
            style={{width:10 + 10*click +'px'}}/>
        </div>
    )
}

export default AnimalShow