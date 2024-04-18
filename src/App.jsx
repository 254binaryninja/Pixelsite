import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider} from 'react-router-dom'
//Pages
  import Home from './pages/Home'
  //layouts
 import RootLayout from './layouts/Rootlayout'
 const router =createBrowserRouter(
  createRoutesFromElements(
    <Route path = "/" element={<RootLayout/>}>
      <Route index element = {<Home/>}/>
    </Route> 
  )
 )
function App() {
 return (
    <RouterProvider router = {router}/>
  )
}

export default App
