import { NavLink,Outlet } from "react-router-dom";
import '../assets/css/root.css'
export default function RootLayout(){
    return (
        <>
        <div class="absolute top-0 left-0 w-16 md:w-32 lg:w-48">
         <img src="src\assets\logo\pixellogo.png" alt=""/>
           </div>
           
       <nav className="absolute top-0 right-0 block sm:inline">
        <div class="container flex items-center justify-center p-6 mx-auto text-gray-600 capitalize dark:text-gray-300">
        <a href="#" class="text-gray-800 dark:text-gray-200 border-b-2 border-blue-500 mx-1.5 sm:mx-6">Home</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Company</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Services</a>

        <a href="#" class="border-b-2 border-transparent hover:text-gray-800 dark:hover:text-gray-200 hover:border-blue-500 mx-1.5 sm:mx-6">Contact</a>
     </div>
    </nav>
    <main>
        <Outlet/>
    </main>
        </>
    );
}