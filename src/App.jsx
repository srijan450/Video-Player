import React, { useState } from 'react'
import { Route, Routes } from 'react-router'
import Controls from './components/Controls'
import Footer from './components/Footer'
import Header from './components/Header'
import Player from './components/Player'
import Sidebar from './components/Sidebar'
import About from './Pages/About'
import Home from './Pages/Home'

function App() {
    const [mode, setmode] = useState("dark")
    return (
        <>
            <Header mode={mode} setmode={setmode} />
            <Routes>
                <Route exact path="" element={<Home mode={mode} />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
            <Footer mode={mode} />
        </>
    )
}

export default App
