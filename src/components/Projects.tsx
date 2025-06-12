import ChessPage from "../pages/ChessPage";

export default function Projects() {
    return <>
        <h1 className="text-xl font-bold">These are some of things I worked and am working on:</h1>
        <div>
            <h2>A forum website</h2>
            <a 
                href="https://cvwoforum.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-500"
            >
                CVWO Forum
            </a>
            <img src="CVWO.png" alt="" className="w-150"/>
        </div>
        <div>
            <h2>A forum website</h2>
            <a 
                href="https://nus-calendar.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-500"
            >
                NUSCalendy
            </a>
            <img src="NUSCalendy.png" alt="" className="w-150"/>
            <p>We participated in the Interhall Hackathon organized by NUS's halls and won second place</p>
            <a 
                href="https://devpost.com/software/nuscalendy"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-500"
            >
                NUSCalendy
            </a>
        </div>
        <ChessPage></ChessPage>
    </>
}