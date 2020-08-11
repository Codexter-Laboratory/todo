import React from 'react';
import style from './style.module.scss'
export interface serviceProps{
    icon: string;
    title: string;
    description: string;
}

const Service = (props: serviceProps) => {
    return (
        <div id="circle" className={style.main}>
            <div>
                <img src={props.icon} alt="" />
            </div>
            <div>
                <h4  className={style.header}>{props.title}</h4>
                <p  className={style.dash}>-------</p>
                <p   className={style.text}>{props.description}</p>
            </div>
        </div>
    )
}

export default Service;