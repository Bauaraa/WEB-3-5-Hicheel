import React, { useState, useEffect } from "react";
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
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [pendingDish, setPendingDish] = useState(null);
    const [user, setUser] = useState(null);

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

    const attemptAddOrder = (dish) => {
        if (!isAuthenticated) {
            setAuthMode("login");
            setPendingDish(dish);
            setAuthOpen(true);
            return;
        }
        addOrder(dish);
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

    const handleAuthSuccess = (userData) => {
        setIsAuthenticated(true);
        setUser(userData);
        setAuthOpen(false);
        if (pendingDish) {
            addOrder(pendingDish);
            setPendingDish(null);
        }
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        setUser(null);
        setOrders([]);
    };

    const handleUpdateUser = (updatedUser) => {
        setUser(updatedUser);
    };
    // Load persisted user and orders from localStorage
    useEffect(() => {
        try {
            const saved = localStorage.getItem("fh_user");
            if (saved) {
                const parsed = JSON.parse(saved);
                setUser(parsed);
                setIsAuthenticated(true);
            }
            const savedOrders = localStorage.getItem("fh_orders");
            if (savedOrders) {
                setOrders(JSON.parse(savedOrders));
            }
        } catch (err) {
            // ignore parse errors
        }
    }, []);
    // Persist user
    useEffect(() => {
        if (user) {
            localStorage.setItem("fh_user", JSON.stringify(user));
        } else {
            localStorage.removeItem("fh_user");
        }
    }, [user]);
    // Persist orders
    useEffect(() => {
        localStorage.setItem("fh_orders", JSON.stringify(orders));
    }, [orders]);

    console.log(isOpen);

    return (
        <div>
            <Navbar openBooking={openBooking} openLogin={openLogin} openOrders={openOrders} isLoggedIn={isAuthenticated} accountName={user?.name || ""} onLogout={handleLogout} />
            <MenuIntroModal state={isOpen} close={() => setIsOpen(false)} />
            <Showcase state={isOpen} close={() => setIsOpen(false)} orders={orders} addOrder={attemptAddOrder} />
            <AuthModal mode={authMode} open={authOpen} close={() => setAuthOpen(false)} switchMode={() => setAuthMode((currentMode) => currentMode === "login" ? "signup" : currentMode === "signup" ? "booking" : "login")} onLoginSuccess={handleAuthSuccess} />
            <MenuSection open={openBooking} />
            <PlacedOrders open={ordersOpen} close={() => setOrdersOpen(false)} orders={orders} addOrder={attemptAddOrder} removeOrder={removeOrder} user={user} onUpdateUser={handleUpdateUser} />
            <ChefSection />
            <Footer />
        </div>
    );
};

export default RestaurantPage;