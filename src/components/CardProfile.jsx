import React from "react";
import Profile from "../assets/profile.png";
import { IoCameraSharp } from "react-icons/io5";

const CardProfile = () => {
    return (
        <div className="h-full content-center">
            <div className="bg-bg-card container w-1/2 rounded-lg shadow-lg mx-auto relative py-10 px-4">
                <div className="flex items-center justify-between">
                    <div className="flex flex-col items-center">
                        <div className="rounded-lg absolute inset-0 px-5 py-2 bg-primary max-w-52 max-h-16">
                            <h2 className="text-white text-3xl tracking-wider text-center font-poppins font-semibold rounded-lg p-2">
                                Profile
                            </h2>
                        </div>
                        <div className="space-y-10 mt-10 px-7 py-4">
                            <Data label={"Username"} value={"Kim Dokja"} />
                            <Data label={"E-Mail"} value={"dokja@gmail.com"} />
                            <Data label={"Phone"} value={"+62 812xxx"} />
                            <Data label={"Location"} value={"Malang, Indonesia"} />
                        </div>
                    </div>

                    <div className="px-12">
                        <Image />
                    </div>
                </div>
                
            </div>
        </div>
    )
}

const Data = ({ label, value }) => {
    return (
        <div className="flex flex-col items-center space-y-1">
            <p className="text-gray-400 text-base font-poppins">{label}</p>
            <p className="text-white border-b border-gray-400 font-poppins">{value}</p>
        </div>
    )
}

const Image = () => {
    return (
        <div className="flex flex-col items-center space-y-12">
            <div className="relative">
               <img src={Profile} alt="" className="w-40 h-40 rounded-full" />
                <div className="absolute bottom-0 right-0 rounded-full w-10 h-10 bg-white flex items-center shadow-lg justify-center">
                    <IoCameraSharp className="text-black text-xl" />
                </div>
            </div>
            <Button />
        </div>
    )
}

const Button = () => {
    return (
        <button className="px-10 py-2 rounded-lg bg-primary text-white text-base font-poppins shadow-lg">
            Save
        </button>
    )
}
export { CardProfile };