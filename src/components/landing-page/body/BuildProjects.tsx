import React from "react";
import buildprojects from "../assets/images/buildprojects.png"
import ProjectsButton from "../../global/ProjectsButton";

const BuildProjects: React.FC<{}> = () => {
    return (
        <div className=" bg-zinc-200 shadow-md overflow-hidden">
            <div className="flex md:ml-0">
                <div className="md:w-1/2 m-12">
                    <h3 className="text-left md:mt-24 md:text-left font-Grotesk font-bold text-4xl">Build <a className="text-teal-600">high-impact projects</a></h3>
                    <p className="text-left md:text-left mt-8 font-UI text-lg font-light text-zinc-600">The next part of the internship is building projects. Groups of 4-6, called “pods”, alongside a Hersey Developers Leader build projects requested by staff in D214 or local businesses.</p>
                    <div className="flex mt-8">
                        <ProjectsButton
                            link={'/projects'}
                            text={"See our projects"}
                            startColor={"from-orange-400"}
                            endColor={"to-orange-800"} />
                    </div>
                </div>
                <img className="hidden md:block w-1/2 m-12 " alt="Students building projects" src={buildprojects}></img>

            </div>
            <div className="px-36 w-full h-[1px] bg-zinc-300 overflow-hidden"></div>

        </div>

    )
}

export default BuildProjects;