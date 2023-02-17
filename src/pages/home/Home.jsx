import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from "../../components/header/Header"
import Citysection from "../../components/bycities/CitiesSection"
import LicenceType from "../../components/licenceType/LicenceType"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Citysection />
                <h1 className="homeTitle">Browse by licence type</h1>
                <LicenceType />
            </div>
        </div>
    )
}

export default Home