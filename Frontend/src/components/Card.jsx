// import image from '../assets/gameimage1.jpg'
import { Game } from './Game'
import { BrowserRouter, Routes, Route } from "react-router-dom";

export function Card({
    id,
    title,
    description,
    imageURL,
    price
}) {

    // console.log({ id });
    // console.log(typeof({key}))

    function handleClick() {
        console.log("WORKED CLICK");

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Game />} />
            </Routes>
        </BrowserRouter>
    }

    return (
        <div className="gamecard">
            <div className="gameimage">
                <img src={imageURL} alt="game_image" />
            </div>
            <div className="gamedetails">
                <div onClick={handleClick} className="gametitle"> {title} </div>
                <div className="gamedescription">Released : <span style={{ color: "black" }}>{description}</span> </div>
                <div className="gameprice">$ {price}.00 </div>
            </div>
            <div className="buynow">
                <button> Add to Cart </button>
            </div>
        </div>
    );

}