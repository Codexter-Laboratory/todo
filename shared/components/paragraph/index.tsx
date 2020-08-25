import React from 'react';
import Markdown from 'react-markdown';

interface Props {
    title: string;
    description: string;
    sub_description?: string;
    children: any;
}


const Paragraph = (props: Props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <Markdown escapeHtml={false} source={props.description}/>
            <Markdown escapeHtml={false} source={props.sub_description}/>
            {props.children}
        </div>
    );
}

export default Paragraph;
