// import React from 'react';
import caar from "../../assets/car1.png"
const About = () => {
    return (
        <div className="dark:bg-dark bg-slate-100 dark:text-white duration-300 sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container min-h-[600px] flex">
                <div className="grid place-items-center grid-cols-1 sm:grid-cols-2 ">     
                {/* image section */}
                    <div className="order-2 sm:order-1">
                        <img src={caar} alt="cars" className=" max-h-[300px] sm:scale-105 sm:-translate-x-11 drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"/>
                    </div>
                    {/* writen section */}
                    <div className="order-1 sm:order-2 space-y-5 sm:pr-32">
                        <p className="text-3xl font-serif font-bold">About Us</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto velit ab quidem .
                        </p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto velit ab quidem .
                        </p>
                        <button className="border-2 rounded-md py-2 px-6 text-primary tracking-wider duration-500 hover:text-black hover:bg-primary/80 border-primary">Get Started</button>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;