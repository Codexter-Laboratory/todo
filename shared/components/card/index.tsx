import React from 'react';
import styles from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";
import useTranslation from "../../../hooks/useTranslations";

export interface Props {
    title: string;
    description?: string;
    sub_description?: string;
    icon?: ImageInterface;
    children?: any;
    number?: string;
    padding?: boolean;
}

const Cards = (props: Props) => {
    const {locale} = useTranslation();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';
    const layout = props.padding ? `${styles.card__container} ${styles.card__container_padding}` : styles.card__container;
    return (
        <div className={layout} dir={dir}>
            {
                props.number ? <h1 className={` ${styles.card__number}`}>{props.number}</h1> : null
            }
            <div className={styles.card__image_container}>
                {
                    props.icon ?<img className={styles.card__image} src={`https://api.potpay.io${props.icon.url}`}
                         alt={props.icon.name}/>: null

                }
            </div>
            <div className={styles.card__inside_container}>
                <p className={styles.card__title}>{props.title}</p>
                <div className={`paragraph ${styles.card__description}`}>
                    {
                        props.description? <p>{props.description}</p>: null
                    }
                </div>
                {
                    props.sub_description? <div className={`paragraph ${styles.card__sub_description}`}>{props.sub_description}</div>: null
                }
                {props.children}
            </div>
        </div>
    );
};

export default Cards;
