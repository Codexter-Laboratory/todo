import React from 'react';
import style from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";
import useTranslation from "hooks/useTranslations";

export interface serviceProps {
    icon: ImageInterface
    title: string;
    description?: string;
    subDescription?: string;
}

const Service = (props: serviceProps) => {
    const {locale} = useTranslation();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <div className={style.service__container} dir={dir}>
            {
                props.title ? (
                    <React.Fragment>
                        <div className={style.service__top_image_container}>
                            <img className={style.service__top_image} src={`${process.env.CMS_URL}${props.icon.url}`}
                                 alt={props.icon.name}/>
                        </div>
                        <h2 className={style.service__title}>{props.title}</h2>
                        <div className="brand-separator"/>
                    </React.Fragment>
                ) : null
            }
            <p className={`paragraph ${style.service_description}`}>{props.description}</p>
            {props.subDescription? <p className={`paragraph ${style.service_description}`}>{props.subDescription}</p>: null}

        </div>
    )
}

export default Service;
