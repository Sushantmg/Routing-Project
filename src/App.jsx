import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom"; // ✅ use 'react-router-dom'
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./Login/Login";
import Layouts from "./components/Layouts";
import Adminlayout from "./components/Adminlayout";

// Main routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layouts />, // Main layout
    children: [
      { path: "", element: <Home /> },      // "/"
      { path: "about", element: <About /> }, // "/about"
      { path: "contact", element: <Contact /> }, // "/contact"
      { path: "login", element: <Login /> }, // "/login"
    ],
  },
  {
    path: "/admin",
    element: <Adminlayout />, // Admin layout
    children: [
      { path: "", element: <Home /> },      // "/admin"
      { path: "about", element: <About /> }, // "/admin/about"
      { path: "contact", element: <Contact /> }, // "/admin/contact"
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
