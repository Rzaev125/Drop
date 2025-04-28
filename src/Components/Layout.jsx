import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";

function Layout() {
    return (  
        <div className='page'>
            <Navbar />
            <Outlet />
        </div>
    );
}

export default Layout;