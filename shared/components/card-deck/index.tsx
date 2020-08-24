import React, {Fragment} from 'react';
import style from "./style.module.scss";

export interface Props {
    title?: string;
    children: any;
}

const CardDeck = (props: Props) => {
    return (
        <div className={`${style.cardDeck__container}`}>
            <div className={`${style.cardDeck__top_container}`}>
                {
                    props.title ? (
                        <Fragment>
                            <h1 className={`text-center ${style.cardDeck__title}`}>{props.title}</h1>
                        </Fragment>
                    ) : null
                }
            </div>
            <div className={style.cardDeck__card_holder}>
                {props.children}
            </div>
        </div>
    )
}

export default CardDeck;
