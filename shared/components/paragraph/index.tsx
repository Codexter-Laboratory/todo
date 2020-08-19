import React from 'react';

interface Props {
    title: string;
    description: string;
    sub_description: string;
    children: any;
    
}

const Paragraph = (props: Props) => {
    return (
        <div>
            <h4>{props.title}</h4>
            <p>{props.description}</p>
            <p>{props.sub_description}</p>
            {props.children}
        </div>
    );
}

export default Paragraph;