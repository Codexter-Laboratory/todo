import React from 'react';
import style from './style.module.scss';
interface Props {
    header: string;
    content: string;
    subContent:string;
    children: any;
    
}

const Paragraph = (props: Props) => {
    return (
        <div>
            <h1 className={style.title}>{props.header}</h1>
            <a className={style.sub_title}>1.Introduction</a>
            <div className={style.paragraph_body}>
                {props.content}
            </div>
            <div>
                {props.subContent}
            </div>
            {props.children}
        </div>
    );
}

export default Paragraph;