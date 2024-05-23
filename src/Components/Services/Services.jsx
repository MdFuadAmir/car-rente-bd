// import React from 'react';
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillData =[
    {
        id: 1,
        name: "Best PRice",
        link: "/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nulla quasi optio qui",
        icon: (<FaCameraRetro className="group-hover:text-black duration-300 text-5xl text-primary"/>),
    },
    {
        id: 2,
        name: "Fast and Safe",
        link: "/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nulla quasi optio qui",
        icon: (<GiNotebook className="group-hover:text-black duration-300 text-5xl text-primary"/>),
    },
    {
        id: 3,
        name: "Experience Drivers",
        link: "/",
        description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur nulla quasi optio qui",
        icon: (<SlNote className="group-hover:text-black duration-300 text-5xl text-primary"/>),
    },
]

const Services = () => {
    return (
        <div className="dark:bg-black dark:text-white sm:min-h-[600px] sm:grid sm:place-items-center">
            <div className="container">
                <div className="mb-12">
                    <h1 className="text-3xl font-semibold text-center font-serif sm:text-4xl">Why Choose Us</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {
                        skillData.map((skill) => (
                            <div key={skill.id} className="card text-center group space-y-3 sm:space-y-6 p-4 sm:py-16 bg-dark hover:bg-primary duration-500 hover:text-black rounded-lg">
                                <div className="grid place-items-center">
                                    {skill.icon}
                                </div>
                                <h1>{skill.name}</h1>
                                <p>{skill.description}</p>
                                <a href={skill.link}>Learn More</a>
                            </div>

                        ))
                    }
                </div>
            </div>
            

        </div>
    );
};

export default Services;