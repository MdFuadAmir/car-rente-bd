// import React from 'react';

const Contact = () => {
    return (
        <div className="bg-white dark:bg-black py-12">
            <div className="container">
                <div className="bg-gray-800  rounded-lg grid grid-cols-1 sm:grid-cols-3 gap-6 py-8 px-6">
                    <div className=" col-span-2 space-y-3">
                        <h2 className="text-white text-4xl sm:text-5xl font-serif font-bold">Let`s collaborate on your upcoming car rental venture</h2>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, in dolorem dolore officia nisi at eum ratione ut consequuntur !</p>
                    </div>
                    <div className=" grid place-items-center">
                        <a href="/" className=" inline-block font-semibold py-2 px-6 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300">Contact</a>
                    </div>

                </div>


            </div>
            
        </div>
    );
};

export default Contact;
