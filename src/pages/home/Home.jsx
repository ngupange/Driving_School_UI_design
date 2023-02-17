import "./home.css"
import Navbar from '../../components/navbar/Navbar'
import Header from "../../components/header/Header"
import Citysection from "../../components/bycities/CitiesSection"
import LicenceType from "../../components/licenceType/LicenceType"
import TopSchool from "../../components/topRatedSchools/TopSchool"

const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Citysection />
                <h1 className="homeTitle">Browse by licence type</h1>
                <LicenceType />
                <h1 className="homeTitle">Top rated Instructors</h1>
                <TopSchool />
            </div>
        </div>
    )
}

export default Home