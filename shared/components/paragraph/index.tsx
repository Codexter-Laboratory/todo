import React from 'react';
import Markdown from 'react-markdown';

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
            <Markdown escapeHtml={false} source={props.description}/>
            <Markdown escapeHtml={false} source={props.sub_description}/>
            {props.children}
        </div>
    );
}

export default Paragraph;