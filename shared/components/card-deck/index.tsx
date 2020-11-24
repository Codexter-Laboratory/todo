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
                props.title === 'howItWorks' ? (<div className={style.cardDeck__top_container}>

                    <Fragment>
                        <h1 className={`text-center ${style.cardDeck_title_how}`}>{renderLabel(props.title)}</h1>
                    </Fragment>

                </div>) : props.title ? (<div className={style.cardDeck__top_container}>

                    <Fragment>
                        <h1 className={`text-center ${style.cardDeck_title}`}>{renderLabel(props.title)}</h1>
                    </Fragment>

                </div>) : null
            }
            {
                props.title === 'howItWorks'?
                <div className={style.cardDeck__card_holder_how}>
                    {props.children}
                </div> :
                <div className={style.cardDeck__card_holder}>
                    {props.children}
                </div>
            }
        </div>
    )
}

export default CardDeck;
