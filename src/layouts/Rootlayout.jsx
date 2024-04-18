import { NavLink,Outlet } from "react-router-dom";
import '../assets/css/root.css'
export default function RootLayout(){
   
    return (
<>

<main>
    <Outlet/>
 </main>
</>
    )
}