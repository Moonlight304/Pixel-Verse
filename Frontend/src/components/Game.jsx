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

    //gameData.name
    //gameData.released
    //gameData.description_raw
    //gameData.background_image
    //gameData.background_image_additional
    //gameData.ratings_count
    //gameData.rating
    //gameData.website

    return (
        <>
            <div className="u">
                <div className="utitle"><h1>{gameData.name}</h1></div>
                <div className="udetails">
                    <div className="ureleased"><span style={{color:"gray"}}>Released on :</span><b>{gameData.released}</b></div>
                    <div className="udesc">{gameData.description_raw}</div>
                    <div className="uimages">
                        <div className="uimg"><img src={gameData.background_image} alt="main image" /></div>
                        <div className="uimg"><img src={gameData.background_image_additional} alt="additional data" /></div>
                    </div>
                    <div className="uratings">
                        <div className="uratingstitle">Ratings</div>
                        <div className="urcount"><b>{gameData.ratings_count}</b></div>
                        <div className="avgrating">Avg Rating : {gameData.rating}</div>
                    </div>
                    <div className="gamewebsite"><a href={gameData.website}>{gameData.name}</a></div>
                </div>
            </div>
        </>
    );
}