import React from 'react'
import All from "./page/All"
import Applications  from "./page/Applications"
// import Totop from './components/Totop'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";
import Login from './dashboard/Login'
import DeshboardMain from './dashboard/DeshboardMain';

const App = () => {
const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<All />} />
        <Route path="/applications" element={<Applications />} />
        <Route path="/welcomelogin" element={<Login />} />
        <Route path="/TechPort_Dashboard/:userid" element={<DeshboardMain />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router= {router}/>
    </div>
  )
}

// const Root = () => {
//   return (
//     <All/>
//   )
// }

export default App