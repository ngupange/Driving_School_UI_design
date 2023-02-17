import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from "../../components/header/Header"
import Citysection from "../../components/bycities/CitiesSection"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Citysection />
            </div>
        </div>
    )
}

export default Home