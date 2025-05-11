import Index from "../Index";
import App from "../../App";
import About from "../About";
import Projects from "../Projects";
import Experience from "../Experience";
import Skills from "../Skills";
import Resume from "../Resume";
import Contact from "../Contact";
import Blogs from "../Blogs";

const routes = [
    {
        path: "/",
        element: <App/>,
        children: [
            {
                index: true,
                element: <Index/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/projects",
                element: <Projects/>
            },
            {
                path: "/experience",
                element: <Experience/>
            },
            {
                path: "/skills",
                element: <Skills/>
            },
            {
                path: "/resume",
                element: <Resume/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/blogs",
                element: <Blogs/>
            },
        ]
    }
]

export default routes;