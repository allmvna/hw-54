import './App.css';
import {useState} from "react";
import './types.ts';
import GameField from './components/GameField';
import AttemptCount from './components/AttemptCount';

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

    const handleItemClick = (index: number) => {
        const newItems = [...items];
        newItems[index].clicked = true;

        if (newItems[index].hasItem) {
            alert('Item found!');
            setAttempts(attempts + 1);
        }

        setItems(newItems);
    };


    return (
        <div className="App">
                <AttemptCount attempts={attempts} />
                <GameField items={items} onItemClick={handleItemClick} />
        </div>
    );
};

export default App;
