import * as React from "react"
import { useNavigate } from "react-router-dom";
const ActionButton: React.FC<{
    link: string;
    text: string;
    startColor: string;
    endColor: string;
    fullRedirect?: boolean;
    disabled?: boolean;
}> = (props) => {

    const navigate = useNavigate();

    const handleClick = () => {
        if (!props.disabled) {
            window.open(props.link, "_blank");
        }
    }

    return (
        <button
            onClick={handleClick}
            className={
                ` bg-gradient-to-b ${props.startColor} ${props.endColor} rounded-lg p-3 px-5 w-fit ${props.disabled ? "hover:cursor-not-allowed" : "hover:cursor-pointer hover:scale-105 "} transition-all ${props.disabled ? "opacity-50" : ""}`
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
export default ActionButton