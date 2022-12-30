import React from "react"
import { useNavigate } from "react-router-dom";


const LearnMoreButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (props.fullRedirect) {
            window.open(props.link, "_blank");
        } else {
            navigate(props.link)
        }
    }

    return (
        <button
            onClick={handleClick}
            className={
                `bg-gradient-to-b ${props.startColor} ${props.endColor} rounded-lg p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all border-white border-[1px] ml-4`
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
    );
}
export default LearnMoreButton;