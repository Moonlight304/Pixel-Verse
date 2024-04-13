import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import './App.css'
import { Card } from './components/Card'
import { CardList } from './components/CardList'
import { Game } from './components/Game'
import { CartPage } from './components/CartPage'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from 'axios'


function App() {
    const [gameArray, setGameArray] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('http://localhost:3000');
                setGameArray(response.data.gameData);
                // console.log(response.data.results);
            }
            catch (e) {
                console.log("ERROR IN FRONTEND");
            }
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
