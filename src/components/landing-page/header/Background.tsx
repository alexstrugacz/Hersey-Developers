import React from "react";
import backgroundImage from "../assets/images/background.png";

const Background: React.FC<{}> = () => {
    return (
        <div className={"relative bg-neutral-900 h-screen overflow-hidden"}>
            <img
                src={backgroundImage}
                alt='background of written code'
                className={"absolute min-w-full min-h-full max-h-none max-w-none z-2"}
            ></img>
        </div>
    )
}

export default Background;