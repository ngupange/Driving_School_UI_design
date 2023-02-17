import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="logoBox">
                    <img class="logoImg" src="logo.png" alt="Driving School App Logo" />
                </div>
                <div className="navItems">
                    <button className="navButton">Register</button>
                    <button className="navButton">Login</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar