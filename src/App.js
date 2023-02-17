import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import User from "./pages/user/User";
import School from "./pages/school/school/School";
import SchoolRegister from "./pages/school/schoolRegister/SchoolRegister";
import SchoolList from "./pages/school/schoolList/SchoolList";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/user" element={<User />} />
        <Route path="/schools" element={<SchoolList />} />
        <Route path="/school/:id" element={<School />} />
        <Route path="/school/:user_id/register" element={<SchoolRegister />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
