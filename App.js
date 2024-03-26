import React,{lazy, Suspense}from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/component/Header";
import Body from "./src/component/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import AboutUs from "./src/component/AboutUs";
import ContactUs from "./src/component/ContactUs";
import ErrorElement from "./src/component/ErrorElement";
import RestrauntMenu from "./src/component/RestrauntMenu";
// import Grocery from "./src/component/Grocery";
// import { lazy } from "react";

const Grocery = lazy(()=> import("./src/component/Grocery")

  )

function AppLayout() {


 
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
      { path: "/grocery", element: <Suspense fallback={<h1>loading...</h1>}><Grocery/></Suspense> },
    ],
    errorElement: <ErrorElement />,
  },

  // { path: "/contact", element: <ContactUs /> },
]);
export default AppLayout;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
