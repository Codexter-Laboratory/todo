import React from 'react';
import style from './style.module.scss'
export interface serviceProps{
    icon: string;
    title: string;
    description: string;
}

const Service = (props: serviceProps) => {
    return (
        <div className={`container-fluid ${style.service_container}`}>
            <div>
                <img src={props.icon} alt="Service Card" />
            </div>
            <div>
                <h4  className={style.header}>{props.title}</h4>

                <p   className={style.text}>{props.description}</p>
            </div>
        </div>
    )
}

export default Service;