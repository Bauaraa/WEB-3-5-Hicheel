import GrilledSteak from "../assets/GrilledSteak.avif";
import HealthySalad from "../assets/HealthySalad.avif";
import ItalianPasta from "../assets/ItalianPasta.avif";
import chefInfo1 from "../assets/chefInfo.avif";

export const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "About", href: "#" },
    { name: "Reservation", href: "#" },
    { name: "Contact", href: "#" },
];

export const dishes = [
    {
        id: 1,
        name: "Grilled Steak",
        description: "Juicy grilled beef served with vegetables.",
        price: "$18",
        image: GrilledSteak,
    },
    {
        id: 2,
        name: "Italian Pasta",
        description: "Creamy pasta with fresh herbs and parmesan cheese.",
        price: "$14",
        image: ItalianPasta,
    },
    {
        id: 3,
        name: "Healthy Salad",
        description: "Fresh vegetables with a light lemon dressing.",
        price: "$10",
        image: HealthySalad,
    },
];

export const menuDetails = [
    {
        id: 1,
        name: "Grilled Steak",
        price: "$18",
        serving: "Serves 1",
        prepTime: "20 min",
        description:
            "Tender grilled beef served with roasted vegetables and a savory house sauce for a rich and satisfying main dish.",
        extras: ["Herb butter finish", "Seasonal vegetables", "Choice of side sauce"],
    },
    {
        id: 2,
        name: "Italian Pasta",
        price: "$14",
        serving: "Serves 1",
        prepTime: "15 min",
        description:
            "Creamy pasta blended with parmesan, fresh herbs, and a smooth sauce that makes it a comforting customer favorite.",
        extras: ["Fresh parmesan topping", "Garlic bread option", "Balanced creamy texture"],
    },
    {
        id: 3,
        name: "Healthy Salad",
        price: "$10",
        serving: "Serves 1",
        prepTime: "10 min",
        description:
            "A refreshing mix of crisp vegetables and lemon dressing, perfect for a light meal that still feels complete.",
        extras: ["Fresh lemon dressing", "Crunchy seasonal greens", "Light and clean flavor"],
    },
];

export const authContent = {
    booking: {
        eyebrow: "Reserve Your Table",
        title: "Book your dining experience",
        description:
            "Reserve a table, choose your preferred time, and let us prepare a warm dining experience for you.",
        primaryLabel: "Confirm Booking",
        secondaryText: "Already have a reservation account?",
        secondaryAction: "Login",
        fields: [
            { label: "Full Name", type: "text", placeholder: "Enter your full name" },
            { label: "Phone Number", type: "tel", placeholder: "Enter your phone number" },
            { label: "Guests", type: "number", placeholder: "How many guests?" },
            { label: "Date", type: "date", placeholder: "" },
        ],
    },
    login: {
        eyebrow: "Welcome Back",
        title: "Login to manage your bookings",
        description:
            "Check your reservations, update your details, and keep track of your favorite menu selections.",
        primaryLabel: "Login",
        secondaryText: "Need to book a table first?",
        secondaryAction: "Book Table",
        fields: [
            { label: "Email", type: "email", placeholder: "Enter your email" },
            { label: "Password", type: "password", placeholder: "Enter your password" },
        ],
    },
};

export const chefInfo = {
    title: "Our Special Chef",
    description:
        "Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.",
    image: chefInfo1,
    story:
        "Chef Elena leads the kitchen with a simple idea: every plate should feel warm, balanced, and memorable. Her menus focus on fresh produce, thoughtful preparation, and comfort without losing elegance.",
    philosophy: [
        "Cook with fresh seasonal ingredients whenever possible",
        "Keep flavors clean so each ingredient stands out",
        "Create dishes that feel welcoming, not complicated",
    ],
};

export const footerLinks = ["Menu", "Gallery", "Booking", "Location"];
