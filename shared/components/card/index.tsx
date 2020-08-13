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
                <Card className={styles.CardStyle}>
                    <Card.Title><h1>{props.title}</h1></Card.Title>
                    <Card.Img variant="top" src={props.icon}/>
                    <Card.Body>
                        <Card.Subtitle className={styles.CardContent}><h2>{props.description}</h2></Card.Subtitle>
                        <Card.Text  className={styles.CardContent}>{props.sub_description}</Card.Text>
                    </Card.Body>
                    {props.children}
                </Card>
        );
};

export default Cards;