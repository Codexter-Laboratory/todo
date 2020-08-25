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
                <h2 className={style.title}>{props.title}</h2>
            </div>
            <div className={style.container__logo_container}>
                <img className={style.container__logo} src={props.logo_1}/>
                <img className={style.container__logo} src={props.logo_2}/>
            </div>
        </div>
    )
}

export default LogoDeck;
