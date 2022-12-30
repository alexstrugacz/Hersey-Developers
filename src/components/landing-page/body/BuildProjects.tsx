import React from "react";
import buildprojects from "../assets/images/buildprojects.png"

const BuildProjects: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md overflow-hidden">
            <div className="flex">
                <div className="w-1/2 m-12">
                    <h3 className=" mt-24 text-left font-Grotesk font-bold text-4xl">Build <a className="text-teal-600">high-impact projects</a></h3>
                    <p className="mt-8 font-UI text-lg font-light text-left text-zinc-600">The next part of the internship is building projects. Groups of 4-6, called “pods”, alongside a Hersey Developers Leader build projects requested by staff in D214 or local businesses.</p>
                </div>
                <img className="w-1/2 m-12" src={buildprojects}></img>

            </div>
            <div className="px-36 w-full h-[1px] bg-zinc-300 overflow-hidden"></div>

        </div>

    )
}

export default BuildProjects;