import React from 'react';
import style from "./style.module.scss"

export interface Props {
    children: any;
    title: string;
}

const LogoDeck = (props: Props) => {
    return (
        <div className={style.logo_deck_container}>
            <h2 className={style.container__title}>{props.title}</h2>
            <div className={style.container__container_separator}/>
            <div className={style.container__logo_container}>
                {props.children}
            </div>
        </div>
    )
}

export default LogoDeck;
