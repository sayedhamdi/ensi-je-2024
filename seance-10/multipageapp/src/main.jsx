import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import Layout from "./Layout.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout withNav>
        <Home />
      </Layout>
    ),
  },
  {
    path: "/about",
    element: (
      <Layout withNav>
        <About />
      </Layout>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
