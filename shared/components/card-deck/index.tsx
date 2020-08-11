import React from 'react';

export interface deckProps{
    children: any;
}
const CardDeck = (props:deckProps) => {
    return (
        <div>
            {props.children}
        </div>
    )
}

export default CardDeck;