import React from "react";
import learnskills from "../assets/images/learnskills.png";

const LearnSkills: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md overflow-hidden">
            <div className="flex md:ml-0">
                <img className="hidden md:block md:w-1/2 md:m-12" src={learnskills}></img>
                <div className="md:w-1/2 m-12">
                    <h3 className="text-left md:mt-24 md:text-left font-Grotesk font-bold text-4xl">Learn new <a className="text-teal-600">coding skills</a></h3>
                    <p className="mt-8 font-UI font-light text-left text-zinc-600 text-lg">For the first 20 hours of the internship, learn necessary skills for your web or iOS development project through a Udemy course. Course costs are covered by Hersey Developers.</p>
                </div>

            </div>
            <div className="px-36 w-full h-[1px] bg-zinc-300"></div>

        </div>

    )
}

export default LearnSkills;