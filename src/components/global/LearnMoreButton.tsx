import React, { useRef } from "react"
import { useNavigate } from "react-router-dom";


const LearnMoreButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const ref = useRef<HTMLDivElement>(null);
    const handleClick = () => {
        if (props.link === "/") {
            ref.current?.scrollIntoView({ behavior: "smooth" });
        }
    }

    return (
        <div className="mt-4 md:mt-0 hidden md:block">
            <button
                onClick={handleClick}
                className={
                    `bg-gradient-to-b ${props.startColor} ${props.endColor} rounded-lg p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all border-white border-[1px] md:ml-4`
                }
            >

                <p
                    className={
                        "flex text-lg text-white font-UI font-bold"
                    }
                >
                    {props.text}
                </p>

            </button>
            <div className="absolute md:mt-48 mt-12">
                <div ref={ref}></div>
            </div>
        </div>
    );
    //includes invisible div to scroll to as ref
}
export default LearnMoreButton;