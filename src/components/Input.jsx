import React from "react";

const Input = ({ type, placeholder, icon, isGray = false ,...rest }) => {
    return (
        <div className={`flex items-center border border-white rounded-full w-full px-6 ${isGray ? 'bg-secondary' : ''}`}>
           <input type="text" placeholder={placeholder} {...rest} />
           {icon && icon}
        </div>
    )
}

export { Input }