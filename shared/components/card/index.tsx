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
        <div className={styles.card_style}>
            <h5>{props.number}</h5>
            <img className={styles.card_image} src={`${process.env.CMS_URL}${props.icon.url}`} alt={props.icon.name}/>
            <h1 className={styles.card_title}>{props.title}</h1>
            <div className={styles.card_description}>
                <h2>{props.description}</h2>
            </div>
            <div className={styles.card_sub_description}>{props.sub_description}</div>
            {props.children}
        </div>
    );
};

export default Cards;
