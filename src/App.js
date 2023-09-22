import React, {useEffect, useState} from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import {  onAuthStateChanged } from "firebase/auth";

import 'react-toastify/dist/ReactToastify.css';

import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Navbar from '../src/components/Navbar'
import {ToastContainer} from "react-toastify";
import {auth} from "./firebase";


const App = () => {
    const [users,setUsers]=useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUsers(user)
            } else {

            }
        });
    }, []);
    return (
        <div>
            <BrowserRouter>
                {users?.accessToken && <Navbar/>}
                <Routes>
                    <Route path="/" element={<Auth/>}/>
                    <Route path="dashboard"  element={<Home users={users}/>}/>

                </Routes>
            </BrowserRouter>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                theme="light"
            />
        </div>
    )
}
export default App
