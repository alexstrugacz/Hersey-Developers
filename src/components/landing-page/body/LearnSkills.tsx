import React from "react";
import learnskills from "../assets/images/learnskills.png";

const LearnSkills: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md">
            <div className="flex justify-center">
                <img className="m-12" src={learnskills}></img>
                <div className=" m-12">
                    <h3 className="w-1/2 font-Grotesk font-bold text-3xl">Learn new <a className="text-teal-600">coding skills</a></h3>
                    <p className="mt-12 w-1/2 center">For the first 20 hours of the internship, learn necessary skills for your web or iOS development project through a Udemy course. Course costs are covered by Hersey Developers.</p>
                </div>

            </div>

        </div>
    )
}

export default LearnSkills;