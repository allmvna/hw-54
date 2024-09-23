import React from 'react';
import {ItemProps} from '../types.ts';
import {Button} from '@mui/material';

const Item: React.FC<ItemProps> = ({index, onClick, clicked, hasItem}) => {
    const buttonColor: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' =
        clicked ? (hasItem ? 'success' : 'error') : 'primary';
    return (
        <Button
            variant="contained"
            color={buttonColor}
            onClick={() => onClick(index)}
            disabled={clicked}
            style={{
                margin: '10px',
                minWidth: '60px',
                height: '60px',
                borderRadius: '12px',
                boxShadow: clicked ? 'none' : '0px 4px 6px rgba(0, 0, 0, 0.1)'
            }}
        >
            {clicked ? (hasItem ? '🔴' : '🔵') : ''}
        </Button>
    );
};

export default Item;