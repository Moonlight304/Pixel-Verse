import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Card } from './components/Card'
import { CardList } from './components/CardList'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Game } from './components/Game'
import { CartPage } from './components/CartPage'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';

import axios from 'axios'

const API_URL = "https://api.rawg.io/api/games?key=3ed74fd8a97249858285e21f6e5768ea&page_size=30"

function App() {
    const [gameArray, setGameArray] = useState([]);
    // const [cart, setCart] = useState([]);

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
            <RecoilRoot>
                <Navbar />

                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<CardList gameArray={gameArray} />} />
                        <Route path="/show/:id" element={<Game />} />
                        <Route path="/cart" element={<CartPage />} />
                    </Routes>
                </BrowserRouter>
            </RecoilRoot>
        </>
    )
}

export default App
