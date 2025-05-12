import { Link } from "react-router-dom"

export default function Error() {
    return <>
        <h1 className="font-bold">The page you're looking for does not exist</h1>
        <Link to={"/"}>Back</Link>
    </>
}