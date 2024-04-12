// import image from '../assets/gameimage1.jpg'

export function Card({
    title,
    description,
    imageURL,
    price
}) {
    return <div className="gamecard">
        <div className="gameimage">
            <img src={imageURL} alt="game_image" />
        </div>
        <div className="gamedetails">
            <div className="gametitle"> {title} </div>
            <div className="gamedescription">Released : <span style={{color:"black"}}>{description}</span> </div>
            <div className="gameprice">$ {price}.00 </div>
        </div>
        <div className="buynow">
            <button>BuyNow</button>
        </div>
    </div>

}