import React,{lazy, Suspense, useEffect, useState}from "react";
import ReactDOM from "react-dom/client";

import Header from "./src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./src/component/AboutUs";
import ContactUs from "./src/component/ContactUs";
import ErrorElement from "./src/component/ErrorElement";
import RestrauntMenu from "./src/component/RestrauntMenu";
import UserContext from "./src/utils/userContext";
import { Provider } from "react-redux";
import appStore from "./src/utils/store";
import ShoopingCart from "./src/component/ShoopingCart";
// import ShoopingCart from "./src/component/ShoopingCart";
// import Cartitem from "./src/component/Cartitem";
// import Cart from "./src/component/cart";
// import Grocery from "./src/component/Grocery";
// import { lazy } from "react";

const Grocery = lazy(()=> import("./src/component/Grocery")

  )

function AppLayout() {
  const[loginuser,setLoginUser]= useState()
  useEffect(()=>{
const data={
  name:"Parul Mishra"
}
setLoginUser(data.name)
  },[])


 
  return (
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:loginuser}}>
    <div className="app">
      <Header />
      <Outlet />
    </div>
    </UserContext.Provider>
    </Provider>
  );
}
// const appRouter = createBrowserRouter([
//   { path: "/", element: <AppLayout /> ,errorElement:<ErrorElement/>},

//   { path: "/about", element: <AboutUs /> },

//   { path: "/contact", element: <ContactUs /> },
// ]);

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/restraunt/:resId", element: <RestrauntMenu/> },
      {path:"/cart", element: <ShoopingCart/>},
    
      { path: "/grocery", element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense> },
    ],
    errorElement: <ErrorElement />,
  },

  // { path: "/contact", element: <ContactUs /> },
]);
export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
