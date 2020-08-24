import React from 'react';
import style from './style.module.scss';
import {ImageInterface} from "shared/interfaces/image.interface";

export interface serviceProps {
    icon: ImageInterface
    title: string;
    description: string;
    subDescription: string;
}

const Service = (props: serviceProps) => {
    return (
        <div className={style.service__container}>
            {
                props.title ? (
                    <React.Fragment>
                        <img className={style.service__top_image} src={`${process.env.CMS_URL}${props.icon.url}`}
                             alt={props.icon.name}/>
                        <h2 className={style.service__title}>{props.title}</h2>
                        <div className="brand-separator" />
                    </React.Fragment>
                ) : null
            }
            <p className={`paragraph ${style.service__description}`}>{props.description}</p>
            <p className={`paragraph ${style.sub_description}`}>{props.subDescription}</p>
        </div>
    )
}

export default Service;
