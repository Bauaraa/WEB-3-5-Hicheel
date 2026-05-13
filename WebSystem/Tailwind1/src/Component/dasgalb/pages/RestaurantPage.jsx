import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Showcase from "../components/Showcase";
import MenuSection from "../components/MenuSection";
import ChefSection from "../components/ChefSection";
import Footer from "../components/Footer";
import AuthModal from "../components/AuthModal";
import MenuIntroModal from "../components/MenuIntroModal";
import PlacedOrders from "../components/PlacedOrders";
import { dishes } from "../data/data";

const RestaurantPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [authOpen, setAuthOpen] = useState(false);
    const [authMode, setAuthMode] = useState("booking");
    const [ordersOpen, setOrdersOpen] = useState(false);
    const [orders, setOrders] = useState([]);

    const addOrder = (dish) => {
        setOrders((prevOrders) => [
            ...prevOrders,
            {
                id: `FH-${Math.floor(2000 + Math.random() * 900)}`,
                name: dish.name,
                status: "Confirmed",
                eta: "12 min",
                total: dish.price,
                dish,
            },
        ]);
    };

    const removeOrder = (orderId) => {
        setOrders((prevOrders) => prevOrders.filter((order) => order.id !== orderId));
    };

    const openBooking = () => {
        setAuthMode("booking");
        setAuthOpen(true);
    };

    const openLogin = () => {
        setAuthMode("login");
        setAuthOpen(true);
    };

    const openOrders = () => {
        setOrdersOpen(true);
    };

    console.log(isOpen);

    return (
        <div>
            <Navbar openBooking={openBooking} openLogin={openLogin} openOrders={openOrders} />
            <MenuIntroModal state={isOpen} close={() => setIsOpen(false)} />
            <Showcase state={isOpen} close={() => setIsOpen(false)} orders={orders} addOrder={addOrder} />
            <AuthModal mode={authMode} open={authOpen} close={() => setAuthOpen(false)} switchMode={() => setAuthMode((currentMode) => currentMode === "login" ? "booking" : "login")} />
            <MenuSection open={openBooking} />
            <PlacedOrders open={ordersOpen} close={() => setOrdersOpen(false)} orders={orders} addOrder={addOrder} removeOrder={removeOrder} />
            <ChefSection />
            <Footer />
        </div>
    );
};

export default RestaurantPage;