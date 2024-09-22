import './App.css';
import {useState} from "react";

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

    return (
        <div className="App"></div>
    );
};

export default App
