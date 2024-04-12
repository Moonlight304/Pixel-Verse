// import image from '../assets/gameimage1.jpg'

export function Card({
    title
}){
    return <div className="gamecard">
        <div className="gameimage">
            <img src='/assets/gameimage1.png' alt="game_image" />
        </div>
        <div className="gamedetails">
            <div className="gametitle">{title}</div>
            <div className="gamedescription">Des</div>
            <div className="gameprice">price</div>
        </div>
        <div className="buynow">
            <button>BuyNow</button>
        </div>
    </div>

}