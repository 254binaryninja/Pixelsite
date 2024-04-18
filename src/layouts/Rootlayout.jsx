import { NavLink,Outlet } from "react-router-dom";
import '../assets/css/root.css'
export default function RootLayout(){
    return (
        <>
            <ul className="menu-bar">
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
                <li>Help</li>
             </ul>
            <main>
                <Outlet />
            </main>
        </>
    );
}