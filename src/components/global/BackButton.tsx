import React from "react"
import { useNavigate } from "react-router-dom";
import BackwardsArrow from "../../assets/BackwardsArrow";


const BackButton: React.FC<{
    link: string;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate(props.link)
    }

    return (
        <button
            onClick={handleClick}
            className={
                `px-8 w-fit hover:cursor-pointer hover:scale-105 transition-all`
            }
        >
            {BackwardsArrow}
            <p
                className={
                    "ml-2 mb-2 text-center text-lg text-white font-Grotesk font-thin inline hover:font-bold"
                }
            >
                Back
            </p>

        </button>
    );
}
export default BackButton;