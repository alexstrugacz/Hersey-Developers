import React from "react";
import backgroundImage from "../assets/images/background.png";

const Background: React.FC<{}> = () => {
    return (
        <div className={"relative bg-neutral-900 h-screen overflow-hidden"}>
            <img
                src={backgroundImage}
                alt='background of written code'
                className={"absolute w-full h-full z-2 object-cover "}
            ></img>
        </div>
    )
}

export default Background;