import './App.css';
import {useState} from "react";
import Item from './components/Item';

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

    const handleItemClick = (index: number) => {
        setItems(items.map((item, i) =>
            i === index ? { ...item, clicked: true } : item
        ));
    };

    return (
        <div className="App">
            {items.map((item, index) => (
                <Item
                    key={index}
                    hasItem={item.hasItem}
                    clicked={item.clicked}
                    onClick={() => handleItemClick(index)}
                />
            ))}
        </div>
    );
};

export default App;
