import React from 'react';
import {ResetGameProps} from '../types';
import {Button} from '@mui/material';

const ResetGame: React.FC<ResetGameProps> = ({onResetGame}) => {
    return (
        <Button variant="contained" color="primary" onClick={onResetGame}>
            Сбросить
        </Button>
    );
};

export default ResetGame;