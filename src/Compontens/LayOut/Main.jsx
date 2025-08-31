import { Outlet } from "react-router-dom";
import Navber from "../Home/Navber";
import Footer from "../Home/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
           <Outlet></Outlet> 
           <Footer></Footer>
        </div>
    );
};

export default Main;