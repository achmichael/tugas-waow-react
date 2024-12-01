import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import Profile from "../assets/profile.png";

const Navbar = () => {
    return (
        <div className="flex items-center justify-between bg-transparent px-6 py-4">
            <Left />
            <Right />
        </div>
    )
}

const Left = () => {
    return (
        <div className="flex items-center space-x-8">
            <h2 className="font-bold text-white tracking-wider text-xl font-poppins">WAOW</h2>
            <div className="flex items-center space-x-4">
                <a href="" className="text-sm no-underline text-gray-400 font-poppins">Home</a>
                <a href="" className="text-sm text-white font-poppins after:border-b-2 after:border-white">Profile</a>
                <button className="flex items-center border-none bg-transparent p-0">
                    <p className="text-sm text-gray-400 font-poppins">Category</p>
                    <RiArrowDropDownLine className="text-gray-400" />
                </button>
            </div>
        </div>
    )
}

const Right = () => {
    return (
        <div className="flex items-center space-x-2 pr-5">
           <div className="flex bg-secondary rounded-full px-4 items-center">
                <input type="text" placeholder="Search" className="text-black focus:outline-none placeholder:text-sm placeholder:text-gray-800 font-poppins"/>
                <CiSearch className="text-gray-800" />
           </div>
           <img src={Profile} alt="" className="h-8 w-8 rounded-full" />
        </div>
    )
}

export { Navbar };