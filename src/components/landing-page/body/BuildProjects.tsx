import React from "react";
import buildprojects from "../assets/images/buildprojects.png"
import ProjectsButton from "../../global/ProjectsButton";

const BuildProjects: React.FC<{}> = () => {
    return (


        <div className="flex w-full justify-center bg-white shadow-md">
            <div className="max-w-6xl flex flex-col md:flex-row items-center md:ml-0  gap-8 md:gap-16 p-10 py-24 mt-0 pt-0">
                <img className="md:hidden w-full object-cover rounded-xl hover:scale-105 transition-all max-h-72 h-full shadow-xl" src={buildprojects}></img>
                <div className={"md:w-1/2"}>
                    <h3 className="text-left md:text-left font-Grotesk font-bold text-4xl">Build <a className="text-teal-600">high-impact projects</a></h3>
                    <p className="mt-2 font-UI text-left text-zinc-600 text-lg mb-5">The next part of the internship is building projects. Hersey Developer teams alongside a Hersey Developers Leader build projects requested by staff in D214 or local businesses.</p>
                    <div className="flex mt-3">
                        <ProjectsButton
                            link={'/projects'}
                            text={"See our projects"}
                            startColor={"from-orange-400"}
                            endColor={"to-orange-700"} />
                    </div>
                </div>
                <img className="hidden md:block w-1/2 object-cover rounded-xl hover:scale-105 transition-all max-h-72 h-full shadow-xl" src={buildprojects}></img>
            </div>
        </div >

        // <div className=" bg-zinc-200 shadow-md overflow-hidden">
        //     <div className="flex md:ml-0">
        //         <div className="md:w-1/2 m-12">
        //             <h3 className="text-left md:mt-24 md:text-left font-Grotesk font-bold text-4xl">Build <a className="text-teal-600">high-impact projects</a></h3>
        //             <p className="text-left md:text-left mt-8 font-UI text-lg font-light text-zinc-600">The next part of the internship is building projects. Groups of 4-6, called “pods”, alongside a Hersey Developers Leader build projects requested by staff in D214 or local businesses.</p>

        //         </div>
        //         <img className="hidden md:block object-contain w-1/2 m-12 " alt="Students building projects" src={buildprojects}></img>

        //     </div>
        //     <div className="px-36 w-full h-[1px] bg-zinc-300 overflow-hidden"></div>

        // </div>

    )
}

export default BuildProjects;