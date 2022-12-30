import React from "react";
import BackgroundImage from "../assets/images/background.png"
import DiscordButton from "../../global/Discord";

const Footer: React.FC<{}> = () => {
    return (
        <div className=" bg-neutral-400">
            <div className="flex align-center h-[610px] justify-start overflow-hidden">
                <img className="absolute w-full overflow-hidden h-[610px]" src={BackgroundImage}></img>
                <h1 className="z-20 overflow-hidden text-white font-Grotesk text-5xl font-bold text-left mt-40 ml-16">Join Hersey Developers Today</h1>
                <p className="absolute z-40 w-1/2 height-[1/6] overflow-hidden text-white font-Grotesk text-2xl font-light text-left mt-64 ml-16">Join the Discord server to meet Hersey Developers and gain key announcements!</p>
                <div className="absolute height-1/5 overflow-hidden mt-96 ml-16">
                    <DiscordButton
                        link={'https://discord.gg/ZfdyycD4y4'}
                        text={"Join the Discord"}
                        startColor={"from-cyan-400"}
                        endColor={"to-cyan-800"} />
                </div>
            </div>
            <div className="flex">
                <h3 className="font-bold font-Grotesk ml-2">Hersey Developers</h3>
                <h3 className="font-bold font-Grotesk ml-20">Contact the Founders</h3>
            </div>
        </div>
    )
}

export default Footer;