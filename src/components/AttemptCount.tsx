import React from 'react';
import {AttemptCountProps} from '../types';

const AttemptCount : React.FC<AttemptCountProps> = ({attempts}) => {
    return (
        <div>
            <p>Number of attempts: {attempts}</p>
        </div>
    );
};

export default AttemptCount;