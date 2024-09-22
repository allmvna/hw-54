import React from 'react';
import {ItemProps} from '../types.ts';

const Item: React.FC<ItemProps> = ({onClick, clicked, hasItem}) => {
    return (
        <div onClick={onClick}>
            {clicked ? (hasItem ? '☺︎' : '☹︎') : ''}
        </div>
    );
};

export default Item;