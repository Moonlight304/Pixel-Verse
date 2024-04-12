import { Game } from './Game.jsx'
import { Link } from "react-router-dom";

export function Card({
    id,
    title,
    description,
    imageURL,
    price
}) {

    return (
        <div className="gamecard">
            <div className="gameimage">
                <img src={imageURL} alt="game_image" />
            </div>
            <div className="gamedetails">
                <Link to={`/show/${id}`} > <div className="gametitle"> {title} </div> </Link>

                <div className="gamedescription">Released : <span style={{ color: "black" }}>{description}</span> </div>

                <div className="gameprice">$ {price}.00 </div>

            </div>
            <div className="buynow">
                <button> Add to Cart </button>
            </div>
        </div>
    );

}