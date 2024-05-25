// import React from 'react';
import car1 from "../../assets/car1.png"
import car2 from "../../assets/car5.png"
import car3 from "../../assets/car6.png"

const carList =[
    {
        id: 1,
        name: "BMW UX",
        price: 1000,
        image: car1,
    },
    {
        id: 2,
        name: "KIA UX",
        price: 999,
        image: car2,
    },
    {
        id: 3,
        name: "ALPHA UX",
        price: 880,
        image: car3,
    },
]

const CarList = () => {
    return (
        <div className="pb-24 bg-white dark:bg-dark dark:text-white pt-12">
            <div className="container">
                {/* heading */}
                <div>
                    <h1 className="text-3xl sm:text-4xl font-serif font-semibold mb-3">Car Rental Price.</h1>
                    <p className="text-sm pb-10">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, id?</p>
                </div>
                {/* car list */}
                <div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                        {
                            carList.map((list) => {
                                return(
                                    <div key={list.id}>
                                        <div  className="card space-y-3 border-2 border-gray-300 hover:border-primary p-3 rounded-xl relative group">
                                        <h3 className="text-xl font-semibold absolute top-0 left-3">12km</h3>
                                        <div className="w-full h-[120px] ">
                                        <img src={list.image} alt="" className="w-full h-[120px] object-contain sm:translate-x-8 group-hover:translate-x-16 duration-700"/>
                                        </div>
                                        <div className=" space-y-2">
                                        <h2 className=" text-primary font-semibold">{list.name}</h2>
                                        <div className="flex justify-between items-center text-xl font-semibold">
                                        <h2 className="">${list.price}/DAY</h2>
                                        <a href="/">Details</a>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                
                                    
                                );
                            })
                        }

                    </div>
                    <div className=" grid place-content-center mt-8">
                    <button className="border-2 rounded-md py-2 px-6 text-primary tracking-wider duration-500 hover:text-black hover:bg-primary/80 border-primary
                    ">Get Started</button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default CarList;