import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
//Pages
import Home from './pages/Home'
import Company from './pages/Company'
import Services from './pages/Services'
import Contact from './pages/Contact'
  //layouts
 import RootLayout from './layouts/Rootlayout'

 const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RootLayout/>}>
      <Route index element = {<Home/>}/>
      <Route path = "/Company" element = {<Company/>}/>
      <Route path = "/Services" element = {<Services/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
    </Route> 
  )
 )
function App() {
 return (
    <RouterProvider router = {router}/>
  )
}

export default App
