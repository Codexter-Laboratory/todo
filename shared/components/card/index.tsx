import React from 'react';
import styles from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";

export interface Props {
    title: string;
    description: string;
    sub_description: string;
    icon: ImageInterface;
    children?: any;
    number?: string;
}

const Cards = (props: Props) => {
    return (
        <div className={styles.card__container}>
            <h1>{props.number}</h1>
            <img className={styles.card__image} src={`${process.env.CMS_URL}${props.icon.url}`} alt={props.icon.name}/>
            <div className={styles.card__inside_container}>
                <h2 className={styles.card__title}>{props.title}</h2>
                <div className={`paragraph ${styles.card__description}`}>
                    <p>{props.description}</p>
                </div>
                <div className={`paragraph ${styles.card__sub_description}`}>{props.sub_description}</div>
                {props.children}
            </div>
        </div>
    );
};

export default Cards;
