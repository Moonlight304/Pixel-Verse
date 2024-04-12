import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Card } from './components/Card'
import { CardList } from './components/CardList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from './components/Game'

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

            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<CardList gameArray={gameArray} />} />
                    <Route path="/show/:id" element={<Game />}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App
