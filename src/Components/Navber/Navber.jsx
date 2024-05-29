// import React from 'react';
import { NavLink } from "react-router-dom";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { HiMenuAlt1 } from "react-icons/hi";

import PropTypes from 'prop-types';
import ResponsiveMenue from "../ResponsivMenue/ResponsiveMenue";
import { useState } from "react";

export const navlinks = [
    {
        id: 1,
        name: "Home",
        link: "/"
    },
    {
        id: 2,
        name: "Cars",
        link: "/cars"
    },
    {
        id: 3,
        name: "About",
        link: "/about"
    },
    {
        id: 4,
        name: "Booking",
        link: "/booking"
    },
]
const Navber = ({theme, setTheme}) => {
    const [showMenue, setshowMenue] = useState(false);

    const toggleMenue = () =>{
        setshowMenue(!showMenue);
    }

    return (
        <nav className="shadow-md bg-white dark:bg-dark 
        dark:text-white duration-300">
            <div className="container">
                <div className="flex justify-between items-center">
                    {/* name */}
                    <div>
                        <h1 className="text-2xl font-bold font-serif">Car-Rente-Bd</h1>
                    </div>
                    {/* links */}
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-6">
                            {
                                navlinks.map((data) =>(
                                    <li key={data?.id} className="py-4"><NavLink to={data?.link} className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium">{data?.name}</NavLink></li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="flex items-center gap-4">
                    {/* dark mode */}
                    <div>
                        {
                            theme == "dark"? (<BiSolidSun onClick={() => setTheme("light")} className="text-2xl"/>) : (
                                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl"/>
                            )
                        }
                    </div>
                    {/* menue */}
                    <div className="md:hidden">
                    {
                        showMenue?(<HiMenuAlt3 onClick={toggleMenue} size={30} className=" cursor-pointer transition-all"/>): (<HiMenuAlt1 onClick={toggleMenue} size={30} className=" cursor-pointer transition-all"/>)
                    }
                    </div>

                    </div>
                </div>
            </div>
                    <div>
                        <ResponsiveMenue showMenue={showMenue}/>
                    </div>
            </nav>
    );
};

export default Navber;


Navber.propTypes ={
    theme:PropTypes.object.isRequired,
    setTheme:PropTypes.object.isRequired,
}