// import React from 'react';
import img1 from "../../assets/maruf.png"
import img2 from "../../assets/arafa.png"
import img3 from "../../assets/fuad.jpg"

const reviewData = [
    {
        id: 1,
        name: "Maruf",
        image: img1,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid minus nihil illum natus id placeat.",
    },
    {
        id: 2,
        name: "Arafa",
        image: img2,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid minus nihil illum natus id placeat.",
    },
    {
        id: 3,
        name: "Fuad",
        image: img3,
        discription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid minus nihil illum natus id placeat.",
    },
]

const Review = () => {
    return (
        <div className="dark:bg-black dark:text-white py-14 sm:pb-24">
            <div className="container">
                {/* header */}
                <div className=" space-y-4 pb-12">
                    <p className="text-3xl font-semibold text-center sm:text-4xl font-serif">What Our Clients Choose us</p>
                    <p className=" text-center sm:px-44">Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, aliquid minus nihil illum natus id placeat.</p>
                </div>
                {/* card section */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-black dark:text-white">
                        {
                          reviewData.map((review) => (
                            <div key={review.id} className="space-y-7 card group bg-gray-100 dark:bg-white/20 p-4 duration-300 rounded-lg ">
                                <div className="flex justify-center">
                                    <img src={review?.image} alt="Profile Pic" className="w-20 h-20 rounded-full"/>
                                </div>
                                <div className=" space-y-3 text-center p-4">
                                <div className="rating">
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400"  />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                                    <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" checked/>
                                </div>
                                    <p className="text-sm">{review.discription}</p>
                                    <h3 className="text-xl font-serif font-semibold">{review.name}</h3>
                                </div>
                            </div>
                          ))   
                        }
                    

                </div>
            </div>
            
        </div>
    );
};

export default Review;