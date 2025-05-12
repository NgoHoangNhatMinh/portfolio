export default function About() {
    return <>
        <img src="akchtually.jpg" alt="" className="w-64 rounded-full my-12"/>
        <div className="about-description flex flex-col items-center px-100">
            <p className="py-4">
                I'm currently doing a Bachelor of Computing and Bachelor of Business Administration at NUS.
            </p>
            <p className="py-4">
                I grew up in Vietnam, and got a full scholarship to study in Singapore since Secondary School, and I've been here since. I love classical music and often play the piano, violin, and perform in a band for my hall. I’m also super into chess, so I would love to play a match at&nbsp;
                <a 
                    href="https://link.chess.com/play/zFBl8y"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:gray-200">
                        @Minhpiii
                </a>.
            </p>
            <p className="py-4">
                Find me on LinkedIn at&nbsp;
                <a 
                    href="https://www.linkedin.com/in/ngohoangnhatminh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-500">
                        @NgoHoangNhatMinh
                </a> or checkout my Github at&nbsp;
                <a 
                    href="https://github.com/NgoHoangNhatMinh"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-500">
                        @NgoHoangNhatMinh
                </a>
            </p>
        </div>
    </>
}