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
        <div className={style.service_container}>
            {
                props.title ? (
                    <React.Fragment>
                        <img className={style.top_image} src={`${process.env.CMS_URL}${props.icon.url}`} alt={props.icon.name}/>
                        <h2 className={style.title}>{props.title}</h2>
                        <img className="brand-separator" alt="separator"
                             src="/illustrations/separator.svg"/>
                    </React.Fragment>
                ) : null
            }
            <p className={`paragraph ${style.description}`}>{props.description}</p>
            <p className={style.sub_description}>{props.subDescription}</p>
        </div>
    )
}

export default Service;
