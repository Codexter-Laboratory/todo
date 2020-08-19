import React from 'react';
import style from './style.module.scss'
export interface serviceProps{
    icon: string;
    title: string;
    description: string;
    subDescription: string;
}

const Service = (props: serviceProps) => {
    return (
        <div className={style.main}>

                <img src={props.icon} alt="Service Card" />

                <h4  className={style.header}>{props.title}</h4>

                <p   className={style.description}>{props.description}</p>
                <p className={style.sub_description}>{props.subDescription}</p>

        </div>
    )
}

export default Service;