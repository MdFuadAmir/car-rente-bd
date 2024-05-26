import React, { useEffect } from 'react';
import Navber from "../Navber/Navber";
import Hero from '../Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import CarList from '../CarList/CarList';
import Review from '../Review/Review';

const Home = () => {
    const [theme, setTheme] = React.useState(localStorage.getItem("theme") ?  localStorage.getItem("theme") : "light");
    const element = document.documentElement;
    useEffect(() =>{
        if(theme == "dark"){
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }

    },[theme])
    return (
        <div>
            <Navber theme={theme} setTheme={setTheme}/>
            <Hero theme={theme}/>
            <About theme={theme}/>
            <Services />
            <CarList />
            <Review />
        </div>
    );
};

export default Home;

