import React from 'react';
import style from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";
import useTranslation from "hooks/useTranslations";

export interface serviceProps {
    icon: ImageInterface
    title: string;
    description?: string;
    subDescription?: string;
    pageName?: string;
}

const Service = (props: serviceProps) => {
    const {locale} = useTranslation();
    const dir = locale === 'ar' ? 'rtl' : 'ltr';

    return (
        <div>
            {
                props.pageName === 'page_business_privacy' ?
                    <div className={style.service__container} dir={dir}>
                        {
                            props.title ? (
                                <React.Fragment>
                                    <div className={style.container}>
                                        <div className={style.service__top_image_container}>
                                            <img className={style.service__top_image}
                                                 src={`https://api.potpay.io${props.icon.url}`}
                                                 alt={props.icon.name}/>
                                        </div>
                                        <h2 className={`text-center ${style.service__title}`}>{props.title}</h2>
                                        <div className={style.separator}>
                                            <div className='brand-separator'/>
                                        </div>
                                    </div>
                                </React.Fragment>
                            ) : null
                        }
                        <p className={`text-center ${style.service_description}`}>{props.description}</p>
                        {props.subDescription ?
                            <p className={`paragraph ${style.service_description}`}>{props.subDescription}</p> : null}

                    </div> :
                    <div className={style.service__container} dir={dir}>
                        {
                            props.title ? (
                                <React.Fragment>
                                    <div className={style.container}>
                                        <div className={style.service__top_image_container}>
                                            <img className={style.service__top_image}
                                                 src={`https://api.potpay.io${props.icon.url}`}
                                                 alt={props.icon.name}/>
                                        </div>
                                        <h2 className={`text-center ${style.service__title}`}>{props.title}</h2>
                                    </div>
                                </React.Fragment>
                            ) : null
                        }
                        <p className={`text-center ${style.service_description}`}>{props.description}</p>
                        {props.subDescription ?
                            <p className={`paragraph ${style.service_description}`}>{props.subDescription}</p> : null}
                    </div>
            }
                    </div>
    )
}

export default Service;
