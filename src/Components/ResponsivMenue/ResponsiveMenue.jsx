// import React from 'react';
import PropTypes from 'prop-types';
import { FaUserCircle } from "react-icons/fa";
import { navlinks } from '../Navber/Navber';



const ResponsiveMenue = ({showMenue}) => {
    return (
        <div className={`${showMenue ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pt-16 pb-6 transition-all duration-300 `}>
            <div className='card'>
                <div className='flex items-center gap-3 justify-start'>
                    <FaUserCircle size={50}/>
                    <div>
                        <h1>Hello User</h1>
                        <h1>Premium User</h1>
                    </div>
                    {/* links */}
                </div>
                    <nav className='mt-12'>
                        <ul className=' space-y-4 text-xl'>
                            {
                                navlinks.map((link) =>(
                                    <li key={link?.id}>{link.name}</li>
                                ))
                            }
                        </ul>
                    </nav>
            </div>
            <div>
                <h1>Made with by <a href="https://github.com/MdFuadAmir/car-rente-bd" className='text-blue-500'>KST.Fuad</a></h1>
            </div>
        </div>
    );
};

export default ResponsiveMenue;

ResponsiveMenue.propTypes ={
    showMenue: PropTypes.object.isRequired
}