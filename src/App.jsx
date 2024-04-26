import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
  import {useState,useEffect} from 'react'
//Pages
import Home from './pages/Home'
import Company from './pages/Company'
import Services from './pages/Services'
import Contact from './pages/Contact'
import Web from './pages/web'
//form
import Formweb from './components/jsx/form'
  //layouts
 import RootLayout from './layouts/Rootlayout'
import About from './components/jsx/about'
import Market from './components/jsx/market'
import Solution from './components/jsx/solution'
import Process from './components/jsx/process'
import Teams from './components/jsx/Teams'

 const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path = "/" element={<RootLayout/>}>
        
      <Route index element = {<Home/>}/>
      <Route path = "/Company" element = {<Company/>}/>
      <Route path = "/Services" element = {<Services/>}/>
      <Route path = "/About"   element = {<About/>}/>
      <Route path = "/Marketing" element = {<Market/>}/>
      <Route path = "/Solution" element = {<Solution/>}/>
      <Route path = "/Teams"    element = {<Teams/>}/>
      <Route path = "/Process" element = {<Process/>}/>
      <Route path = "/Contact" element = {<Contact/>}/>
      </Route> 
      <Route path = "/Form" element = {<Formweb/>}/>
      <Route path = "/Web"  element = {<Web/>}/>
     
      </>  
  )
 )
function App() {
 
    return (
    <RouterProvider router = {router}/>
  )
}

export default App
