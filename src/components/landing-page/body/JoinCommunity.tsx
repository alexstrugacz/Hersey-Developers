import React from "react";
import joincommunity from "../assets/images/joincommunity.png"
import DiscordButton from "../../global/DiscordButton";

const JoinCommunity: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md overflow-hidden">
            <div className="flex ml-[] md:ml-0">
                <img className=" hidden md:block w-1/2 m-12" src={joincommunity}></img>
                <div className="md:w-1/2 m-12">
                    <h3 className=" md:mt-24 text-left font-Grotesk font-bold text-4xl">Join the <a className="text-teal-600">community</a></h3>
                    <p className="mt-8 font-UI font-light text-zinc-600 text-lg text-left">Make new friends with developers in your pod, gain direct access to leaders for help at anytime, and join AMAs with Industry Professionals throughout the internship!</p>
                    <div className="flex mt-8">
                        <DiscordButton
                            link={'https://discord.gg/ZfdyycD4y4'}
                            text={"Join the Discord"}
                            startColor={"from-cyan-400"}
                            endColor={"to-cyan-800"} />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default JoinCommunity;