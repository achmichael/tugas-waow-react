import React from "react";
import { Form } from "../components/Form";
import { AuthTemplate } from "../components/AuthTemplate";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";

const Login = () => {
    
    const navigate = useNavigate();
    const { setUser } = useAuth();
    
    const handleSubmit = (email, password) => {
        const user = localStorage.getItem('user');
        const savedUser = user ? JSON.parse(user) : '';
        if (savedUser.email === email && savedUser.password === password) {
            setUser(savedUser);
            navigate('/dashboard');
        }
        return;
    }

    return (
        <AuthTemplate>
            <Form isLogin={true} handleSubmit={handleSubmit} />
        </AuthTemplate>
    )
}

export { Login }