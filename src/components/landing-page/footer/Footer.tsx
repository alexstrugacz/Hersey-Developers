import React from "react";
import BackgroundImage from "../assets/images/background.png"
import DiscordButton from "../../global/DiscordButton";

const Footer: React.FC<{}> = () => {
    return (
        <div className=" bg-neutral-300">
            <div className="flex align-center h-[610px] justify-start overflow-hidden">
                <img className="absolute w-full overflow-hidden h-[610px]" src={BackgroundImage}></img>
                <h1 className="absolute overflow-hidden text-white font-Grotesk text-5xl font-bold text-left mt-40 ml-16">Join Hersey Developers Today</h1>
                <p className="absolute z-40 w-1/2 height-[1/6] overflow-hidden text-white font-Grotesk text-2xl font-light text-left mt-64 ml-16">Join the Discord server to meet Hersey Developers and gain key announcements!</p>
                <div className="absolute mt-96 ml-16">
                    <DiscordButton
                        link={'https://discord.gg/ZfdyycD4y4'}
                        text={"Join the Discord"}
                        startColor={"from-cyan-400"}
                        endColor={"to-cyan-800"} />
                </div>
            </div>
            <div className="flex h-[263px]">
                <div className="">
                    <h3 className="font-bold text-2xl font-Grotesk ml-[3vh] mt-[2.5vh]"><svg className="inline mr-3 mb-[0.5vh]" xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
                        <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill="black" />
                        <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill="black" />
                    </svg>Hersey Developers</h3>
                    <div className="font-UI font-light text-xl text-neutral-700 text-left ml-[3.7vh]">
                        <a className="block hover:font-bold" href="/">Homepage</a>
                        <a className="block hover:font-bold" href="/">Resources</a>
                        <a className="block hover:font-bold" href="/">Projects</a>
                        <a className="block hover:font-bold" href="https://discord.gg/ZfdyycD4y4">Discord</a>
                    </div>
                </div>
                <div className="ml-20">
                    <h3 className="font-bold text-2xl font-Grotesk mt-[4.15vh] ">Contact the Founders</h3>
                    <div className="font-UI font-light text-xl text-neutral-700 text-left mt-[2vh] ml-[0.3vh]">
                        <a className="block hover:font-bold" href="mailto:astrugacz4426@stu.d214.org">Email Alex (Founder)</a>
                        <a className="block hover:font-bold" href="mailto:maenlle4004@stu.d214.org">Email Miguel (Founder)</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;