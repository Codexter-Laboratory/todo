import React from 'react';
import Card from "react-bootstrap/cjs/Card";
import styles from './style.module.scss';

export interface Props{
    title: string;
    description: string;
    sub_description: string;
    icon: string;
    children: any;
}

const Cards = (props: Props) => {
    console.log(props);
        return (
                <Card className={styles.card_style}>
                    <h1 className={styles.card_title}>{props.title}</h1>
                     <img className={styles.card_image} src={props.icon}/>
                         <div className={styles.card_description}>
                             <h2>{props.description}</h2>
                         </div>
                    <div className={styles.card_sub_description}>{props.sub_description}</div>

                    {props.children}
                </Card>
        );
};

export default Cards;