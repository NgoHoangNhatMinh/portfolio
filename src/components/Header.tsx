import { Link } from "react-router-dom"
import { useEffect, useState } from "react"

export default function Header() {
    const [showHeader, setShowHeader] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowHeader(window.scrollY > 100);
        };

        // call handleScroll everytime we scroll
        window.addEventListener("scroll", handleScroll);
        // Removes the event listener when the component unmounts
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return <>
    <header 
        className={`fixed top-0 left-0 w-full transition-transform duration-300 z-50 ${
            showHeader ? "translate-y-0" : "-translate-y-full"
        }`}
        style={{
            background: 'rgb(35, 35, 35)'
        }}
    >
        <div className="p-4 flex justify-between items-center">
            <div className="mr-auto px-8">
                <Link to={"/"} className="group">
                    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24" fill="white" className="group-hover:fill-neutral-300 transition duration-300"/>
                        <text x="20" y="30" text-anchor="middle" font-size="35" font-family="Arial" fill="black">L</text>
                        <text x="30" y="40" text-anchor="middle" font-size="35" font-family="Arial" fill="black">N</text>
                        <circle cx="47" cy="47" r="3" fill="white" />
                    </svg>
                </Link>
            </div>
            <div className="flex gap-6 px-8">
                <Link to={"/about"} className="underline hover:text-gray-500 font-bold text-white text-xl">About Me</Link>
                <Link to={"/projects"} className="underline hover:text-gray-500 font-bold text-white text-xl">My Projects</Link>
                <Link to={"/experience"} className="underline hover:text-gray-500 font-bold text-white text-xl">Experience</Link>
                {/* <Link to={"/skills"} className="underline hover:text-gray-500">Skills</Link> */}
                <Link to={"/contact"} className="underline hover:text-gray-500 font-bold text-white text-xl">Contact</Link>
            </div>
        </div>
    </header>
    </>
}