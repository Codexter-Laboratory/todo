import React from 'react';
import style from "./style.module.scss"

export interface Props{
    Logo_1: string;
    Logo_2: string;
    Title: string;
}
const LogoDeck = (props:Props) => {
    return (
        <div className={style.logo_deck_container}>
            <div>
                <h1 className={style.title}>{props.Title}</h1>
            </div>
            <div>
                <img className={style.container_logo_1} src={props.Logo_1}/>
                <img className={style.container_logo_2} src={props.Logo_2}/>
            </div>
        </div>
    )
}

export default LogoDeck;