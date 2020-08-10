import React from 'react';

interface parProps {
    header: string;
    content: string;
    subContent:string;
    children: any;
    
}

const Paragraph = (props: parProps) => {
    return (
        <div>
            <h1>{props.header}</h1>
            <div>
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