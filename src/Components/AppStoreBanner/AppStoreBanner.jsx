// import React from 'react';
import img1 from "../../assets/website/pattern.jpeg"
import img2 from "../../assets/website/play_store.png"
import img3 from "../../assets/website/app_store.png"
const bannerImage ={
    backgroundImage: `url(${img1})`,
    backgroundRepet: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition: "center",
    hight: "100%",
    width: "100%"
}

const AppStoreBanner = () => {
    return (
        <div className="bg-white dark:bg-black py-10">
            <div className="container">
            <div className="text-black sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl p-4" style={bannerImage}>
                <div className=" space-y-6 max-w-xlmx-auto">
                    <h1 className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started with our app</h1>
                    <p className="text-center sm:px-20">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ea laboriosam veritatis laudantium cupiditate praesentium natus distinctio animi neque dolorem!</p>
                </div>
                <div className="flex justify-center flex-wrap items-center gap-4">
                        <a href="/">
                            <img src={img2} alt="PlayStore" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                        </a>
                        <a href="/">
                            <img src={img3} alt="AppStore" className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]"/>
                        </a>
                </div>
            </div>
        </div>
        </div>
    );
};

export default AppStoreBanner;