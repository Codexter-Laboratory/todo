import React, {FC} from 'react';
import Card from "react-bootstrap/cjs/Card";

export interface cardProps{
    title: string;
    description: string;
    sub_description: string;
    icon: string;
    children: any;
}

const Cards = (props: cardProps) => {
    console.log(props);
        return (
            <Card style={{width: '18rem'}}>
                <Card.Img variant="top" src={props.icon}/>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
                    <Card.Text>{props.sub_description}</Card.Text>
                </Card.Body>
                {props.children}
            </Card>
        );
};

export default Cards;