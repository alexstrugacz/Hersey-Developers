import React from "react";
import BackgroundImage from "../assets/images/background.png"
import DiscordButton from "../../global/DiscordButton";
import ActionButton from "../../global/ActionButton";

const Footer: React.FC<{}> = () => {
    return (
        <div className=" bg-neutral-300">
            <div className={`flex bg-neutral-900 justify-center overflow-hidden bg-codebackground bg-cover py-32`}>
                {/* <img className="absolute object-cover w-full overflow-hidden h-screen" src={BackgroundImage}></img> */}
                <div className={"w-full max-w-6xl"}>
                    <div className="flex flex-col gap-5 w-full p-10">
                        <h1 className="overflow-hidden text-white font-Grotesk text-4xl md:text-5xl font-bold text-left leading-tight md:leading-0">Join Hersey Developers Today!</h1>
                        <p className="text-zinc-300 font-Grotesk text-2xl  text-left max-w-4xl">Build software development skills and high impact projects at Hersey Developers! <a className={"text-white font-bold"}>2024 signups close 10/31, and space is limited.</a></p>
                        <br />
                        <ActionButton
                            link="https://herseyhacks.notion.site/Hersey-Developers-2024-c02096923c294568bed55c63cd518adc?pvs=4"
                            text="🚀 Sign Up Now"
                            startColor="from-orange-400"
                            endColor="to-red-800"
                        />
                    </div>
                </div>
            </div>
            <div className={"flex justify-center"}>
                <div className="max-w-6xl w-full flex flex-col md:flex-row mobile:pb-32 py-4 pb-8 mobile:pt-10">
                    <div className="">
                        <h3 className="font-bold text-2xl font-Grotesk ml-[3vh] mt-[2.5vh text-left md:text-center"><svg className="md:inline mr-3 mb-[0.5vh]" xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
                            <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill="black" />
                            <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill="black" />
                        </svg>Hersey Developers</h3>
                        <div className="ml-[3vh] font-UI  text-xl text-neutral-700 text-left md:ml-[3.7vh]">
                            <a className="block hover:font-bold transition-all" href="/">Homepage</a>
                            <a className="block hover:font-bold transition-all" href="/resources">Resources</a>
                            <a className="block hover:font-bold transition-all" href="/projects">Projects</a>
                            <a className="block hover:font-bold transition-all" href="https://discord.gg/ZfdyycD4y4">Discord</a>
                        </div>
                    </div>
                    <div className="ml-[3vh] md:ml-20">
                        <h3 className="text-left md:text-center font-bold text-2xl font-Grotesk md:mt-4 mt-10 md:pb-4">Contact the Founders</h3>
                        <div className="font-UI  text-xl text-neutral-700 text-left">
                            <a className="block hover:font-bold transition-all" href="mailto:astrugacz4426@stu.d214.org">Email Alex (Founder)</a>
                            <a className="block hover:font-bold md:mt-0 transition-all" href="mailto:maenlle4004@stu.d214.org">Email Miguel (Founder)</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;