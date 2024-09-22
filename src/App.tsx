import './App.css';
import {useState} from "react";
import './types.ts';
import GameField from './components/GameField';
import AttemptCount from './components/AttemptCount';
import ResetGame from './components/ResetGame';

const createItems = () => {
    const items = Array.from({ length: 36 }, () => ({
        hasItem: false,
        clicked: false,
    }));

    const randomIndex = Math.floor(Math.random() * 36);
    items[randomIndex].hasItem = true;
    return items;
};


const App = () => {
    const [items, setItems] = useState(createItems());
    const [attempts, setAttempts] = useState(0);
    const [gameOver, setGameOver] = useState(false);


    const handleItemClick = (index) => {
        if (items[index].clicked || gameOver) return;

        const updateItems = [...items];
        updateItems[index].clicked = true;

        setAttempts(prevAttempts => prevAttempts + 1);
        setItems(updateItems);

        if (updateItems[index].hasItem) {
            alert('Item found!');
            setGameOver(true);
        }
    };

    const resetGame = () => {
        setItems(createItems());
        setAttempts(0);
        setGameOver(false);
    };


    return (
        <div className="App">
                <AttemptCount attempts={attempts} />
                <GameField items={items} onItemClick={handleItemClick} />
                <ResetGame onResetGame={resetGame}/>
        </div>
    );
};

export default App;
