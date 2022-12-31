import React from "react"
import { useNavigate } from "react-router-dom";
import Arrow from "../../assets/Arrow";


const ProjectsButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {

        navigate(props.link)
    }

    return (
        <button
            onClick={handleClick}
            className={
                `bg-gradient-to-b ${props.startColor} ${props.endColor} rounded-lg p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all`
            }
        >

            <p
                className={
                    "flex text-lg text-white font-UI font-bold"
                }
            >
                {props.text} {Arrow}
            </p>

        </button>
    );
}
export default ProjectsButton;