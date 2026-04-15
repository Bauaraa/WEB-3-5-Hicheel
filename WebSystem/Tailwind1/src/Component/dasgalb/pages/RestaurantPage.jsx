import React from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import MenuSection from "../components/MenuSection";
import ChefSection from "../components/ChefSection";
import Footer from "../components/Footer";

const RestaurantPage = () => {
    return (
        <div>
            <Navbar />
            <Showcase />
            <MenuSection />
            <ChefSection />
            <Footer />
        </div>
    );
};

export default RestaurantPage;