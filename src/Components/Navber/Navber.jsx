// import React from 'react';
import { NavLink } from "react-router-dom";
import { BiSolidSun } from "react-icons/bi";
import { BiSolidMoon } from "react-icons/bi";

const navlinks = [
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


    return (
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300">
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
                    {/* dark mode */}
                    <div>
                        {
                            theme == "dark"? (<BiSolidSun onClick={() => setTheme("light")} className="text-2xl"/>) : (
                                <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl"/>
                            )
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navber;