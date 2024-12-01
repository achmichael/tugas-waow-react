import React from "react";
import { Navbar } from "../components/Navbar";
import { CardProfile } from "../components/CardProfile";

const Dashboard = () => {
    return (
        <div className="bg-primary h-screen">
            <Navbar />
            <CardProfile />
        </div>
    )
}

export { Dashboard };