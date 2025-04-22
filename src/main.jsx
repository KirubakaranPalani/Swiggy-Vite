import React, { lazy, Suspense} from 'react';
import { createRoot }from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutUs from './screens/AboutUs';
import ContactUs from "./screens/ContactUs";
import ErrorComp from "./screens/ErrorComp";
import Body from "./ui-components/Body";
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './screens/Shimmer';

const Grocery = lazy(()=> import("./screens/Grocery"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Body /> },
      { path: "/about", element: <AboutUs /> },
      { path: "/contact", element: <ContactUs /> },
      { path: "/grocery", element: <Suspense fallback={<Shimmer/>}><Grocery /></Suspense> },
      { path: "/restaurantmenu/:resId", element: <RestaurantMenu />}
    ],
    errorElement: <ErrorComp />,
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter} />
)