import React from 'react'
import ReactDOM from "react-dom/client";

import Home from "./pages/home";
import Login from "./pages/login";

import { BrowserRouter ,Routes , Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='login' element={<Login/>}/>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
