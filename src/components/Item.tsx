import React from 'react';

interface ItemProps {
    hasItem: boolean;
    clicked: boolean;
    onClick: () => void;
}

const Item: React.FC<ItemProps> = ({onClick, clicked, hasItem}) => {
    return (
        <div onClick={onClick}>
            {clicked ? (hasItem ? '☺︎' : '☹︎') : ''}
        </div>
    );
};

export default Item;