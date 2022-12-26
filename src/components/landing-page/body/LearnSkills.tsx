import React from "react";
import learnskills from "../assets/images/learnskills.png";

const LearnSkills: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md">
            <div className="flex justify-center">
                <img className="m-12" src={learnskills}></img>
                <div className="m-12">
                    <h3 className="font-Grotesk text-3xl">Learn new coding skills</h3>
                    <p className="flex">Hello</p>
                </div>

            </div>

        </div>
    )
}

export default LearnSkills;