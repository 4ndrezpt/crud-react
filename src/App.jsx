import { useState } from 'react'
import  useLocalStorage  from 'use-local-storage';

import { Routes, Route, NavLink, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { CreateUser } from "./components/CreateUser";
import { DetailUser } from './components/DetailUser';
import { EditUser } from "./components/EditUser";


export const App = ()=> {
  const localValue = window.matchMedia("prefers-color-scheme: dark").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark",false);

  return (
    <div className="App"
      data-theme={isDark ? "dark" : "light"}>
        <Navbar title={"Crud-React"}
          isChecked={isDark}
          handleChange={()=> setIsDark(!isDark)}>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}/>
          <Route path="/about" element={<About></About>}/>
          <Route path="/faq" element={<FAQ></FAQ>}/>
          <Route path="/contact" element={<Contact></Contact>}/>
          <Route path="/*" element={ <Navigate to="/"/>}/>
          <Route path="user/create" element={<CreateUser></CreateUser>}/>
          <Route path="user/details/:email" element={<DetailUser></DetailUser>}/>
          <Route path="user/edit/:id" element={<EditUser></EditUser>}/>
        </Routes>

        <Footer></Footer>
    </div>
  )
}
