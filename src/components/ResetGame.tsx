import React from 'react';

const ResetGame = ({onResetGame}) => {
    return (
        <div>
            <button onClick={onResetGame}>Reset</button>
        </div>
    );
};

export default ResetGame;