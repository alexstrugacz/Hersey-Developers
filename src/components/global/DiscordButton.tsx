import React from "react"
import { useNavigate } from "react-router-dom";
import DiscordLogo from "../../assets/DiscordLogo";

const DiscordButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        window.open(props.link, "_blank");

    }

    return (
        <button
            onClick={handleClick}
            className={
                ` bg-gradient-to-b ${props.startColor} ${props.endColor} rounded-lg p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all`
            }
        >

            <p
                className={
                    "flex text-lg text-white font-UI font-bold"
                }
            >
                {props.text}{DiscordLogo}
            </p>

        </button>
    );
}
export default DiscordButton;