import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Card } from './components/Card'

import axios from 'axios'

const API_URL = "https://api.rawg.io/api/games?key=3ed74fd8a97249858285e21f6e5768ea&page_size=30"

function App() {
    const [gameArray, setGameArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(API_URL);
            setGameArray(response.data.results);
            console.log(response.data.results);
        }
        fetchData();
    }, []);


    return (
        <>
            <Navbar />

            <div className="gameList">
                {gameArray.map((game,index) => {
                    return <Card key={index} title={game.name} description={game.released} imageURL={game.background_image} price={game.reviews_count} />
                })}
            </div>
        </>
    )
}

export default App
