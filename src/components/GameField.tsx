import React from 'react';
import Item from './components/Item';
import {FieldProps} from '../types';


const GameField: React.FC<FieldProps>= ({items, onItemClick}) => {
    return (
        <div>
            {items.map((item, index) => (
                <Item
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => onItemClick(index)}
                />
            ))}
            
        </div>
    );
};

export default GameField;