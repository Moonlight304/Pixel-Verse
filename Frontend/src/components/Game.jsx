import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from 'axios'

export function Game() {
    const { id } = useParams();

    const [gameData, setGameData] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(`https://api.rawg.io/api/games/${id}?key=3ed74fd8a97249858285e21f6e5768ea`);
            setGameData(response.data);
            console.log(response.data);
        }
        fetchData();
    }, [id]);

    console.log("GAMESSS");

    return (
        <>
            <h1> Welcome to Game Page </h1>

            <h1> {gameData.name} </h1>
        </>
    );
}