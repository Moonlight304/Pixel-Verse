import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { Game } from './Game.jsx'
import { Link } from "react-router-dom";
import { Cart } from '../store/atoms/Cart.jsx'

export function Card({ index, game }) {

    const [cart, setCart] = useRecoilState(Cart);

    return (
        <div className="gamecard">
            <div className="gameimage">
                <img src={game.background_image} alt="game_image" />
            </div>
            <div className="gamedetails">
                <Link to={`/show/${game.id}`} > <div className="gametitle"> {game.name} </div> </Link>

                <div className="gamereleased">Released : <span style={{ color: "black" }}>{game.released}</span> </div>

                <div className="gameprice">$ {game.reviews_count}.00 </div>

            </div>

            {/* Adding items to cart */}
            <div className="buynow">
                <button onClick={() => {
                    setCart([...cart, game]);
                    
                    console.log(cart);
                }}> Add to Cart </button>
            </div>
        </div >
    );
}