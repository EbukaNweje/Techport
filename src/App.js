import React from 'react'
import All from "./page/All"
import Applications  from "./page/Applications"
import Footer from './components/Footer'
// import Totop from './components/Totop'
import {
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Route
} from "react-router-dom";

const App = () => {
const router =  createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<All />} />
        <Route path="/applications" element={<Applications />} />
      </Route>
    )
  )
  return (
    <div>
      <RouterProvider router= {router}/>
      <Footer/>
    </div>
  )
}

// const Root = () => {
//   return (
//     <All/>
//   )
// }

export default App