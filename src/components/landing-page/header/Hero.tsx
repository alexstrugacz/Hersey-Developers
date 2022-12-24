import React from "react";

const Hero: React.FC<{}> = () => {
    return (
        <div className="flex absolute text-white text-2xl">
            <div
                className=
                "flex flex-col absolute items-center justify-center h-full w-full"

            >
                Hello
            </div>
        </div>
    )
}

export default Hero;