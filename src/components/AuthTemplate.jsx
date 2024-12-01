import React from "react";
import { SideIcon } from "../components/SideIcon";
import Telkom from "../assets/telkom.png";

const AuthTemplate = ({ children }) => {
    return (
        <div className="w-full min-h-screen bg-primary overflow-hidden">
            <div className="content-center mt-16 z-10">
                <div className="container mx-auto w-full flex items-stretch space-x-10 p-12">
                    <SideIcon />
                    {children}
                </div>
            </div>
            <div className="skew-x-[50deg] z-10 absolute top-0 left-0 w-[50px] h-[80%] bg-white origin-top-right"></div>
            <div className="skew-y-[35deg] z-10 absolute top-0 left-0 w-40 h-[90%] bg-white origin-top-left"></div>
            <div className="absolute bottom-0 left-0 w-40 h-[10%] bg-white"></div>
            <div className="skew-y-[40deg] z-10 absolute top-[16%] left-[10%] w-40 h-[90%] bg-white origin-top-left"></div>
            <div className="skew-y-[40deg] z-10 absolute top-[26%] left-[20%] w-40 h-[80%] bg-white origin-top-left"></div>
            <div className="skew-y-[40deg] z-10 absolute top-[36%] left-[30%] w-40 h-[70%] bg-white origin-top-left"></div>
            <div className="skew-y-[40deg] z-10 absolute top-[60%] left-[40%] w-20 h-[50%] bg-white origin-top-left"></div>
            <div className="z-10 absolute top-[76%] left-[45%] w-20 h-[18%] bg-white origin-top-left rounded-br-full"></div>
            <div className="-skew-x-[30deg] z-10 absolute bottom-0 left-[49.5%] w-[50px] h-[20%] bg-white origin-top-left"></div>
            <div className="absolute bottom-5 left-[5%] z-20">
                <img src={Telkom} alt=""/>
            </div>
        </div>
    )
}

export { AuthTemplate }