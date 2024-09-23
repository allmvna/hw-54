import './App.css';
import {useState} from 'react';
import './types.ts';
import GameField from './components/GameField';
import AttemptCount from './components/AttemptCount';
import ResetGame from './components/ResetGame';
import {Alert, Box, Container, Typography} from '@mui/material';


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
    const [alertMessage, setAlertMessage] = useState<string | null>(null);


    const handleItemClick = (index: number) => {
        if (items[index].clicked || gameOver) return;

        const updateItems = [...items];
        updateItems[index].clicked = true;

        setAttempts(prevAttempts => prevAttempts + 1);
        setItems(updateItems);

        if (updateItems[index].hasItem) {
            setAlertMessage('Шар найден! Нажми кнопку "Сбросить", чтобы начать заново.');
            setGameOver(true);
        }
    };


    const resetGame = () => {
        setItems(createItems());
        setAttempts(0);
        setGameOver(false);
        setAlertMessage(null);
    };

        return (
        <Container maxWidth="sm">
            <Typography marginTop= '20px' textAlign= 'center' variant="h5" component="h1" gutterBottom>
               Игра на интуицию: Найди методом тыка красный шарик 🔴!
            </Typography>
            {alertMessage && (
                <Alert
                    severity="info"
                    onClose={() => setAlertMessage(null)}
                    style={{ marginTop: '20px', marginBottom: '10px' }}
                >
                    {alertMessage}
                </Alert>
            )}
            <AttemptCount attempts={attempts} />
            <GameField items={items} onItemClick={handleItemClick}/>
            <Box textAlign= 'center' marginTop= '20px'>
                <ResetGame onResetGame={resetGame}/>
            </Box>
        </Container>
    );
};

export default App;
