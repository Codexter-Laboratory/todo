import React from 'react';
import styles from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";
import useTranslation from "../../../hooks/useTranslations";

export interface Props {
    title: string;
    description: string;
    sub_description: string;
    icon: ImageInterface;
    children?: any;
    number?: string;
    padding?: boolean;
}

const Cards = (props: Props) => {
    const {locale} = useTranslation();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const layout = props.padding? `${styles.card__container} ${styles.card__container_padding}` : styles.card__container;
    return (
        <div className={layout} dir={dir}>
            <h1 className={styles.card__number}>{props.number}</h1>
            <div className={styles.card__image_container}>
            <img className={styles.card__image} src={`${process.env.CMS_URL}${props.icon.url}`} alt={props.icon.name}/>
            </div>
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
