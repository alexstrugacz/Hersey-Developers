
import React from 'react';

const ProjectCell: React.FC<{
    imagelink: string;
    name: string;
    description: string;
    link: string;
    status: string;
}> = (project) => {
    //src={project.imagelink === "none" ? "" : project.imagelink} />
    return <a href={project.link} target="_blank">
        <div className='bg-gradient-to-b from-neutral-500 to-neutral-800 rounded-2xl group hover:scale-105 transition-all'>
            <img src={project.imagelink === "none" ? "" : project.imagelink} className={"object-cover rounded-2xl w-full h-64 opacity-80 group-hover:opacity-100 transition-opacity p-1"} />
            <div className={"p-2 py-5"}>
                <p className={"font-Poppins text-zinc-200 text-left pl-4 font-medium text-xl"}>{project.name}</p>
                <p className={"font-Poppins text-zinc-400 text-left pl-4 text-md mt-1"}>{project.description}</p>
                <p className={"font-Poppins text-zinc-400 text-left pl-4 text-md mt-1 italic"}>{project.status}</p>
            </div>
        </div>
    </a>
};

export default ProjectCell;