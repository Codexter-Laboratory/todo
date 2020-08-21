import React from 'react';
import style from "./style.module.scss"

export interface Props{
    logo_1: string;
    logo_2: string;
    title: string;
}
const LogoDeck = (props:Props) => {
    return (
        <div className={style.logo_deck_container}>
            <div>
                <h1 className={style.title}>{props.title}</h1>
            </div>
            <div>
                <img className={style.container_logo_1} src={props.logo_1}/>
                <img className={style.container_logo_2} src={props.logo_2}/>
            </div>
        </div>
    )
}

export default LogoDeck;