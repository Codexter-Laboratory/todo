import React from 'react';
import style from "./style.module.scss";

export interface Props{
    children: any;
}
const CardDeck = (props:Props) => {
    return (
        <div className={style.card_container}>
            {props.children}
        </div>
    )
}

export default CardDeck;