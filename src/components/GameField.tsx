import React from 'react';
import Item from './Item';
import {FieldProps} from '../types';


const GameField: React.FC<FieldProps>= ({items, onItemClick}) => {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            {items.map((item, index) => (
                <Item
                    key={index}
                    index={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={onItemClick}
                />
            ))}
        </div>
    );
};

export default GameField;