// import React from 'react';
import { FaLocationArrow } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { FiAlignJustify } from "react-icons/fi";
import { FaInstagramSquare } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
    return (
            <footer className="footer p-10 bg-white dark:bg-gray-800 text-black dark:text-white">
  <aside className=" space-y-2">
    <h1 className="text-3xl font-serif font-bold">Car-Rente-Bd</h1>
    <p>Lorem ipsum dolor sit amet consectetur. <br /> Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Possimus, voluptate.</p>
    <p className="flex items-center gap-4 font-serif"><FaLocationArrow className="text-xl"/> Kataikhana moor,Kushtia</p>
    <p className="flex items-center gap-4 font-serif"><MdOutlinePhoneAndroid className="text-xl"/> +88017******31</p>
    <div className="flex gap-4 items-center">
        <a href="/" className=" hover:text-primary duration-300"><FaInstagramSquare className="text-2xl"/></a>
        <a href="/" className=" hover:text-primary duration-300"><FaFacebook className="text-2xl"/></a>
        <a href="/" className=" hover:text-primary duration-300"><CiLinkedin className="text-2xl"/></a>
    </div>
  </aside>
  <nav>
    <h6 className="footer-title">Important Links</h6> 
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Home</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Cars</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>About</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Contact</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Important Links</h6> 
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>About us</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Contact</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Jobs</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Important Links</h6> 
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Terms of use</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Privacy policy</a>
    <a href="/" className="link link-hover flex gap-2"><FiAlignJustify className="font-bold text-xl"/>Cookie policy</a>
  </nav>
</footer>
    );
};

export default Footer;