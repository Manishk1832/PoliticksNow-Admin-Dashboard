import Footer from "./Components/footer/Footer";
import Menu from "./Components/menu/Menu";
import Navbar from "./Components/navbar/Navbar";
import Message from "./Pages/Messages/Message";
import Home from "./Pages/Home/Home"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
  
  
} from "react-router-dom";
// import Login from "./Pages/Login/Login";
import "./Styles/global.scss"
// import Users from "./Pages/Users/Users";

function App() {

  const Layout = ()=>{
    return(
      <div className="main">
        <Navbar/>
        <div className="container">
          <div className="menuContainer">
           <Menu/>
          </div>
          <div className="contentContainer">
         <Outlet/>
          </div>
        </div>
        <Footer/>
      </div>
    )
  }


  const router = createBrowserRouter([
    
    {
      path: "/",
      element:<Layout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/messages",
          element:<Message/>

        },
        

      ]
    },
    // {
    //   path:"/login",
    //   element: <Login/>
    // }
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
