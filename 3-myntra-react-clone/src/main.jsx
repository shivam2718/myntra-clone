import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css"
import ReactDOM from "react-dom/client";
import React from "react";
import App from './routes/App.jsx'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import Bag from "./routes/Bag.jsx"
import Home from './routes/Home.jsx'
import { Navigate } from "react-router-dom";
import {Provider} from "react-redux"
import myntraStore from './store/index.js'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag/> },
      { path: "/pages/bag.html", element: <Navigate to="/bag" replace /> },
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
  <Provider store={myntraStore}>
<RouterProvider router={router}/>
  </Provider>
</React.StrictMode>
);
