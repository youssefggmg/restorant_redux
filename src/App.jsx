import React, { useState, useEffect, createContext } from 'react'
import Navbare from './NavBar.jsx';
import Hero from './Hero.jsx';
import Mainpage from './Mainpage.jsx';
import Notfound from './Notfound.jsx';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./Footer.jsx";
import About from "./About.jsx"
import Addmeal from './Addmeal.jsx';
import "./style/globale.css"
import MealInfo from './MealInfo.jsx';
import { Provider } from 'react-redux';
import {store} from './redux/store';

export const MealContext = createContext({})

const App = () => {
    const [meal,setmeal]=useState("")
    const getmeal=(meal)=>{
        setmeal(meal)
    }
    // console.log(meal);
    return (
        <>
        <Provider store={store}>
            {/* <MealContext.Provider value={{meal}}> */}
                <Navbare />
                <BrowserRouter>
                    <Routes>
                        <Route index path='/' element={<div style={{ display: "flex", flexDirection: "column" }}>
                            <Hero /><Mainpage getmeal={getmeal} />
                        </div>} />
                        <Route path='*' element={<Notfound />} />
                        <Route path='/about' element={<div> <Hero /> <About /> </div>} />
                        <Route path='/addmeal' element={<div> <Addmeal /> </div>} />
                        <Route path='/mealinfo' element={<MealInfo />} />
                    </Routes>
                </BrowserRouter>
                <Footer />
            {/* </MealContext.Provider> */}
        </Provider>
        </>
    )
}

export default App
