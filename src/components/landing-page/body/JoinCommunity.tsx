import React from "react";
import joincommunity from "../assets/images/joincommunity.png"
import DiscordButton from "../../global/DiscordButton";

const JoinCommunity: React.FC<{}> = () => {
    return (

        <div className="flex w-full justify-center bg-white shadow-md">
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:ml-0 gap-8 md:gap-16 p-10 py-24 pt-0 mt-0">
                <img className="md:block md:w-1/2 object-cover rounded-xl hover:scale-105 transition-all max-h-72 h-full shadow-xl" src={joincommunity}></img>
                <div className={"md:w-1/2"}>
                    <h3 className="text-left md:text-left font-Grotesk font-bold text-4xl">Join the <a className="text-teal-600">community</a></h3>
                    <p className="mt-2 font-UI text-left text-zinc-600 text-lg mb-5">Make new friends with developers in your pod, and gain direct access to leaders for help at anytime. Feel free to join if you have any questions about Hersey Developers as well!</p>
                    <div className="flex mt-3">
                        <DiscordButton
                            link={'https://discord.gg/ZfdyycD4y4'}
                            text={"Join the Discord"}
                            startColor={"from-cyan-400"}
                            endColor={"to-cyan-800"} />
                    </div>
                </div>
            </div>
        </div >
        // <div className=" bg-zinc-200 shadow-md overflow-hidden">
        //     <div className="flex ml-[] md:ml-0">
        //         <img className=" hidden md:block object-contain w-1/2 m-12" src={joincommunity}></img>
        //         <div className="md:w-1/2 m-12">
        //             <h3 className=" md:mt-24 text-left font-Grotesk font-bold text-4xl">Join the <a className="text-teal-600">community</a></h3>
        //             <p className="mt-8 font-UI font-light text-zinc-600 text-lg text-left">Make new friends with developers in your pod, gain direct access to leaders for help at anytime, and join AMAs with Industry Professionals throughout the internship!</p>

        //         </div>
        //     </div>
        // </div>

    )
}

export default JoinCommunity;