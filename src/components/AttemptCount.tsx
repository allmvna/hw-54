import React from 'react';
import {AttemptCountProps} from '../types';
import {Typography} from '@mui/material';

const AttemptCount : React.FC<AttemptCountProps> = ({attempts}) => {
    return (
        <Typography variant="h6" textAlign= 'center'>
          Количество попыток: {attempts}
        </Typography>

    );
};

export default AttemptCount;