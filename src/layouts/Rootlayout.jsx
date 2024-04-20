import { NavLink,Outlet } from "react-router-dom";
import '../assets/css/root.css'
export default function RootLayout(){
    return (
        <>
            <div class="absolute top-0 left-0 w-16 md:w-32 lg:w-48 ">
                <img src="src\assets\logo\pixellogo.png" alt="" />
            </div>

            <nav className="absolute top-0 right-0 block sm:inline">
                <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
                    <NavLink to="/" className="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">
                        Home
                    </NavLink>

                    <NavLink
                        to="/Company"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Company
                    </NavLink>

                    <NavLink
                        to="/Services" 
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Services
                    </NavLink>

                    <NavLink
                        to="/Contact"
                        className="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6"
                    >
                        Contact
                    </NavLink>
                </div>
            </nav>
            <main>
                <Outlet />
            </main>
        </>
    );
}