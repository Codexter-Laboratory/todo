import React from 'react';

export interface Props{
    children: any;
}
const LogoDeck = (props:Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default LogoDeck;