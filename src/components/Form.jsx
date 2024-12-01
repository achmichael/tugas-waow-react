import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BiHide } from "react-icons/bi";
import { Input } from "./Input";
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlinePhone } from "react-icons/md";
import { useNavigate } from "react-router";

const Form  = ({ isLogin = false, handleSubmit }) => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name === 'email'){
            setEmail(value);
        }else{
            setPassword(value);
        }
    }

    const handleFormSubmit = () => {
        handleSubmit(email, password);
    }

    return (
        <div className="flex flex-col items-center bg-transparent border-none w-1/2 py-10">
             <div className="w-[80%] space-y-2">
                <div className="py-12">
                    <h2 className="text-3xl font-poppins font-bold text-white tracking-wider">
                        WAOW <span className="font-semibold">{isLogin ? "Log In" : "Register"}</span>
                    </h2>
                </div>
                {!isLogin && 
                    <FullName />
                }
                <div className="space-y-6">
                    <Input name="email" type="text" placeholder="Email" icon={<AiOutlineMail className="text-gray-400" />} onChange={handleChange} className="w-full py-2 bg-transparent outline-none text-white placeholder:text-gray-400" />
                    {isLogin 
                        && 
                        <Input name="password" isGray={true} type="password" placeholder="Password" icon={<BiHide className="text-gray-400" />} onChange={handleChange} className="w-full py-2 rounded-full text-black focus:outline-none placeholder:text-gray-400" />
                    }
                    {
                        !isLogin
                           &&
                           <>
                                <Input isGray={true} type="phone" placeholder="Phone Number" icon={<MdOutlinePhone className="text-black"/>} onChange={handleChange} className="w-full py-2 rounded-full text-black focus:outline-none placeholder:text-black" />
                                <Input type="password" placeholder="Password" icon={<BiHide className="text-gray-400" />} onChange={handleChange} className="w-full py-2 rounded-full bg-transparent text-black focus:outline-none placeholder:text-gray-400" />
                           </>
                    }
                </div>
                {
                    isLogin 
                      && 
                      <div className="py-6">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2">
                                    <input type="checkbox" className="w-4 h-4 rounded-full" />
                                    <label className="text-white font-poppins text-sm">Remember me</label>
                                </div>
                                <a href="#" className="text-white font-poppins text-sm no-underline">Forgot password?</a>
                            </div>
                        </div>
                }
                <div className="py-12 px-4 flex flex-col items-center space-y-2">
                    <button onClick={handleFormSubmit} className="rounded-full p-2 text-center w-72 bg-white flex items-center justify-center space-x-1">
                         <p className="text-black text-sm font-poppins">{isLogin ? "Log in" : "Register"}</p>
                         <FaArrowRight className="text-black"/>
                    </button>
                    <p className="text-white text-sm font-thin"> {isLogin ? "don't have account?" : "Have already account?"} <button onClick={() => navigate(isLogin ? '/register' : '/login')} className="bg-transparent font-bold no-underline text-white p-0 hover:border-none active:outline-none">{isLogin ? 'Register' : 'Log In'}</button></p>
                </div>
             </div>
        </div>
    )
}

const FullName = () => {
    return (
        <div className="flex items-center space-x-1 py-3">
           <input type="text" placeholder="First Name" className="w-full max-w-1/2 shadow-lg rounded-full py-2 px-4 bg-secondary outline-none text-black placeholder:text-black" />
           <input type="text" placeholder="Last Name" className="w-full max-w-1/2 border border-secondary rounded-full py-2 px-4 bg-transparent outline-none text-gray-400 placeholder:text-gray-400" />
        </div>
    )
}

export { Form }
