import React, {Fragment} from 'react';
import style from "./style.module.scss";
import useTranslation from "../../../hooks/useTranslations";
import {LabelsStubs} from "../../stubs/labels.stubs";

export interface Props {
    title?: string;
    children: any;
}

const CardDeck = (props: Props) => {
    const {locale} = useTranslation();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    const renderLabel = (title: string) => {
        const arr = LabelsStubs.filter(l => l.title === title);
        const label = arr[0];
        return label[locale];
    };
    return (
        <div className={`${style.cardDeck__container}`} dir={dir}>
            {
                props.title ? (<div className={`${style.cardDeck__top_container}`}>

                    <Fragment>
                        <h1 className={`text-center ${style.cardDeck__title}`}>{renderLabel(props.title)}</h1>
                    </Fragment>

                </div>) : null
            }
            <div className={style.cardDeck__card_holder}>
                {props.children}
            </div>
        </div>
    )
}

export default CardDeck;
