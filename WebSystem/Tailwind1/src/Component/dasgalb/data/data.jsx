import GrilledSteak from '../assets/GrilledSteak.avif'
import HealthySalad from '../assets/HealthySalad.avif'
import ItalianPast from '../assets/ItalianPasta.avif'
import chefInfo1 from '../assets/chefInfo.avif'
export const navLinks = [
    { name: "Home", href: "#" },
    { name: "Menu", href: "#" },
    { name: "About", href: "#" },
    { name: "Reservation", href: "#" },
    { name: "Contact", href: "#" },
];

export const dishes = [
    {
        name: "Grilled Steak",
        description: "Juicy grilled beef served with vegetables.",
        price: "$18",
        image: GrilledSteak,
    },
    {
        name: "Italian Pasta",
        description: "Creamy pasta with fresh herbs and parmesan cheese.",
        price: "$14",
        image: ItalianPast,
    },
    {
        name: "Healthy Salad",
        description: "Fresh vegetables with a light lemon dressing.",
        price: "$10",
        image: HealthySalad,
    },
];

export const chefInfo = {
    title: "Our Special Chef",
    description:
        "Our chef creates delicious dishes with fresh ingredients and a passion for quality food every day.",
    image: chefInfo1,
};

export const footerLinks = ["Menu", "Gallery", "Booking", "Location"];