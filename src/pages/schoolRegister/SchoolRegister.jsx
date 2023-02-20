import "./schoolRegister.css"
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

const SchoolRegister = () => {
    return (
        <div>
            <Navbar />
            <Header type="list" />
            School Register (Protected)
        </div>
    )
}

export default SchoolRegister