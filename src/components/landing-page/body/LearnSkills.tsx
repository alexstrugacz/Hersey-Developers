import React from "react";
import learnskills from "../assets/images/learnskills.jpg";

const LearnSkills: React.FC<{}> = () => {
    return (
        <div className="flex w-full justify-center bg-white shadow-md overflow-hidden">
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:ml-0 gap-8 md:gap-16 p-10 py-24">
                <img className="w-full md:w-1/2 object-cover rounded-xl hover:scale-105 transition-all max-h-72 shadow-xl" src={learnskills}></img>
                <div className={"md:w-1/2"}>
                    <h3 className="text-left md:text-left font-Grotesk font-bold text-4xl">Learn new <a className="text-teal-600">coding skills</a></h3>
                    <p className="mt-2 font-UI text-left text-zinc-600 text-lg mb-5">For the first 20 hours of the internship, learn necessary skills for your web project through a Udemy course. Course costs are covered by Hersey Developers.</p>
                </div>
            </div>
        </div >

    )
}

export default LearnSkills;