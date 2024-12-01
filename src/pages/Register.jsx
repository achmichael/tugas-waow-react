import React from "react"
import { AuthTemplate } from "../components/AuthTemplate";
import { Form } from "../components/Form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router";
const Register = () => {

    const navigate = useNavigate();
    const { setUser } = useAuth();

    const handleSubmit = (email, password) => {
        setUser({ email, password });
        console.log(email, password);
        alert('Register Success');
        navigate('/login');
    }
    
    return (
        <AuthTemplate>
            <Form handleSubmit={handleSubmit} isLogin={false} />
        </AuthTemplate>
    )
}

export { Register }