// import React from 'react';
import carPng from "../../assets/car.png"
import car2Png from "../../assets/banner-car.png"
import PropTypes from 'prop-types';

const Hero = ({theme}) => {
    return (
        <div className="dark:bg-black dark:text-white duration-300 relative -z-20">
            <div className="container min-h-[620px] flex">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2">
                    {/*  */}
                    <div className="order-1 sm:order-2">
                        <img src={theme == "dark" ? carPng : car2Png} alt="cars" className="relative -z-10 max-h[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"/>
                    </div>
                    {/*  */}
                    <div className="order-2 sm:order-1 space-y-5 sm:pr-32">
                        <p className="text-primary text-2xl font-serif">Easy</p>
                        <h1 className="text-5xl font-semibold lg:text-7xl font-serif">Car Rente</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto velit ab quidem atque inventore officia quaerat nulla incidunt tempore!
                        </p>
                        <button className="bg-primary btn text-black px-6 py-2 rounded-md hover:bg-primary/80 duration-300">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;

Hero.propTypes ={
    theme:PropTypes.object.isRequired
}