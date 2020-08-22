import React from 'react';
import style from "./style.module.scss";

export interface Props{
    title?: string;
    children: any;
}
const CardDeck = (props:Props) => {
    return (
        <div className={`${style.cardDeck}`}>
            {
                props.title ? (
                    <React.Fragment>
                        <h1 className={`text-center ${style.cardDeck__title}`}>{props.title}</h1>
                    </React.Fragment>
                ) : null
            }
            <div className={style.cardDeck__cardHolder}>
                {props.children}
            </div>
        </div>
    )
}

export default CardDeck;
