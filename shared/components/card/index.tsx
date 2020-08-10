import React from 'react';
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
            <Card style={{position:"absolute", top: "300px", left:"40px", width:"200px"}}>
                <Card.Title style={{font:'400rem'}}><h1>{props.title}</h1></Card.Title>
                <Card.Img variant="top" src={props.icon}/>
                <Card.Body>
                    <Card.Subtitle className="mb-2 text-muted">{props.description}</Card.Subtitle>
                    <Card.Text>{props.sub_description}</Card.Text>
                </Card.Body>
                {props.children}
            </Card>
        );
};

export default Cards;