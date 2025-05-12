import { useEffect, useRef, useState } from "react";

type LoadingProps = {
    className?: string;
    loadingTime: number;
}

export default function Loading({className, loadingTime}: LoadingProps) {
    const initialTime = useRef(new Date().getTime());
    const [time, setTime] = useState(initialTime.current);

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().getTime());
        }, 10);

        return () => clearInterval(interval);
    }, [])

    return <div className={className + ` absolute inset-0 flex flex-col justify-center items-center`}>
        <h1 className="text-white text-xl">Loading</h1>
        <div className="loadingBar w-100 h-3 border-1 border-white">
            <div 
                className="progress h-2.5 bg-white"
                style={{ width: `${Math.min((time - initialTime.current) / (loadingTime / 100), 100)}%` }}></div>
        </div>
    </div>

}