import { Link } from "react-router-dom"

export default function Header() {
    return <>
    <header 
        className="sticky top-0 left-0 w-full shadow z-50"
        style={{
            background: 'linear-gradient(rgb(120, 140, 176) 0%, rgb(174, 185, 212) 100%'
        }}
    >
        <div className="p-4 flex justify-between items-center">
            <div className="mr-auto px-8">
                <Link to={"/"} className="group">
                    <svg width="50" height="50" viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25" r="24" fill="black" className="group-hover:fill-gray-700 transition duration-300"/>
                        <text x="20" y="30" text-anchor="middle" font-size="32" font-family="Arial" fill="white">L</text>
                        <text x="30" y="40" text-anchor="middle" font-size="32" font-family="Arial" fill="white">N</text>
                        <circle cx="47" cy="47" r="3" fill="black" />
                    </svg>
                </Link>
            </div>
            <div className="flex gap-6">
                <Link to={"/about"} className="underline hover:text-gray-500 font-bold text-white">About Me</Link>
                <Link to={"/projects"} className="underline hover:text-gray-500 font-bold text-white">My Projects</Link>
                <Link to={"/experience"} className="underline hover:text-gray-500 font-bold text-white">Experience</Link>
                {/* <Link to={"/skills"} className="underline hover:text-gray-500">Skills</Link> */}
                <Link to={"/contact"} className="underline hover:text-gray-500 font-bold text-white">Contact</Link>
            </div>
        </div>
    </header>
    </>
}