import { Link } from "react-router-dom"

export default function Header() {
    return <>
    <header className="sticky top-0 left-0 w-full shadow z-50">
        <div className="p-4 flex justify-between items-center">
            <div className="flex gap-4">
                <Link to={"/"}><p>LN</p></Link>
                <br />
                <Link to={"/about"}>About Me</Link>
                <br />
                <Link to={"/projects"}>My Projects</Link>
                <br />
                <Link to={"/experience"}>Experience</Link>
                <br />
                <Link to={"/skills"}>Skills</Link>
            </div>
            <Link to={"/contact"} className="ml-auto">Contact</Link>
        </div>
    </header>
    </>
}