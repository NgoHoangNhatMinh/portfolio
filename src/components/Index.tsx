import { Link } from "react-router-dom"
import { FaLinkedin, FaGithub } from "react-icons/fa"

export default function Index() {
    return <>
        <div className="hero flex gap-12 flex-col items-center border-b border-gray-200">
            <img src="src/assets/akchtually.jpg" alt="well akchtually" className="w-100 h-100 rounded-full my-12"/>
            <h1 className="text-xl font-bold my-12">Hello! I'm Lucas Ngo. I'm trying to build cool stuffs, which you can check out here.</h1>
        </div>
        <div className="about flex gap-12 flex-col items-center border-b border-gray-200">
            <h1 className="text-xl font-bold my-12">Outside of coding stuffs, I like music and chess. Here are some of my photos:</h1>
            <div className="flex flex-col items-center">
                <img src="src/assets/mala_sushi.jpg" alt="" className="w-150"/>
                <p>That's me in the middle with the blue guitar :)</p>
            </div>
            <div className="flex flex-col items-center">
                <img src="src/assets/guitar.jpg" alt="" className="w-150"/>
                <p>And this is me performing</p>
            </div>
        </div>
        <div className="projects flex gap-12 flex-col items-center border-b border-gray-200 py-12">
            <h1 className="text-xl font-bold">These are some of things I worked and am working on:</h1>
            <div>
                <h2>A forum website</h2>
                <Link to={"https://cvwoforum.netlify.app/"}>CVWO Forum</Link>
                <img src="src/assets/CVWO.png" alt="" className="w-150"/>
            </div>
            <div>
                <h2>A forum website</h2>
                <Link to={"https://nus-calendar.vercel.app/"}>NUSCalendy</Link>
                <img src="src/assets/NUSCalendy.png" alt="" className="w-150"/>
                <p>We participated in the Interhall Hackathon organized by NUS's halls and won second place</p>
                <Link to={"https://devpost.com/software/nuscalendy"}>NUSCalendy</Link>
            </div>
        </div>
        <div className="experience flex gap-12 flex-col items-center border-b border-gray-200 py-12">
            <h1 className="text-xl font-bold">This summer (May 2025), I will be starting an internship through the Computer for Voluntary Welfare Organisations Program, spearheaded by Dr Ben Leong.</h1>
        </div>
        <div className="skills flex flex-col gap-12 items-center border-b border-gray-200 py-12">
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4">Python</div>
                <div className="bg-gray-200 p-4">HTML</div>
                <div className="bg-gray-200 p-4">Javascript</div>
                <div className="bg-gray-200 p-4">CSS</div>
                <div className="bg-gray-200 p-4">Java</div>
                <div className="bg-gray-200 p-4">Golang</div>
                <div className="bg-gray-200 p-4">C</div>
                <div className="bg-gray-200 p-4">PostgresSQL</div>
                <div className="bg-gray-200 p-4">Ruby</div>
            </div>
            <div className="grid grid-cols-4 gap-4">
                <div className="bg-gray-200 p-4">React</div>
                <div className="bg-gray-200 p-4">Tailwind</div>
                <div className="bg-gray-200 p-4">Ruby on Rails</div>
                <div className="bg-gray-200 p-4">Git</div>
                <div className="bg-gray-200 p-4">Material-UI</div>
                <div className="bg-gray-200 p-4">Pandas</div>
                <div className="bg-gray-200 p-4">Numpy</div>
                <div className="bg-gray-200 p-4">Matplotlib</div>
                <div className="bg-gray-200 p-4">Vim</div>
                <div className="bg-gray-200 p-4">VSCode</div>
                <div className="bg-gray-200 p-4">IntelliJ</div>
            </div>
        </div>
        <div className="contact flex gap-4 justify-center border-b border-gray-200 py-12">
            <Link to={"https://www.linkedin.com/in/ngohoangnhatminh/"}>
                <FaLinkedin></FaLinkedin>
            </Link>
            <Link to={"https://github.com/NgoHoangNhatMinh"}>
                <FaGithub></FaGithub>
            </Link>
        </div>
    </>
}