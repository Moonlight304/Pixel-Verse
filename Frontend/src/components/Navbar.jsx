import "../index.css"

export function Navbar() {
    return (<div className="navbar">
        <div className="logo">Pixel-Verse</div>
        <div className="navitems">
            <div className="home item">Home</div>
            <div className="services item">Services</div>
            <div className="contactus item">Contact Us</div>
            <div className="aboutus item">About Us</div>
        </div>
        <div className="profile">
            <div className="cart">Cart</div>
            <div className="logout">LogOut</div>
        </div>
    </div>);
}