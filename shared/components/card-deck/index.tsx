import React from 'react';

export interface Props{
    children: any;
}
const CardDeck = (props:Props) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default CardDeck;