import React from 'react';
import style from "./style.module.scss"

export interface Props{
    Logo_1: string;
    Logo_2: string;
    Title: string;
}
const LogoDeck = (props:Props) => {
    return (
        <div>
        <div>
            {props.Title}
        </div>
        <div>
            <img className={style.container} src={props.Logo_1}/>
            <img className={style.container} src={props.Logo_2}/>
        </div>
        </div>
    )
}

export default LogoDeck;