
import React from 'react';

const ProjectCell: React.FC<{
    imagelink: string;
    name: string;
    description: string;
    link: string;
    status: string;
}> = (project) => {
    return <a href={project.link}>
        <div className='bg-gradient-to-b from-neutral-600 to-neutral-900 rounded-2xl'>
            <img className={"bg-gradient-to-r from-cyan-500 to-blue-500 object-cover rounded-2xl w-full h-64 opacity-50"} src={project.imagelink === "none" ? "./assets/images/placeholder.png" : project.imagelink} />
            <div className={"p-5"}>
                <p className={"font-Poppins text-zinc-200 text-left pl-4 font-medium text-xl"}>{project.name}</p>
                <p className={"font-Poppins text-zinc-400 text-left pl-4 text-md mt-1"}>{project.description}</p>
                <p className={"text-green-500 font-Grotesk pt-4 font-thin text-lg"}>{project.status}</p>
            </div>
        </div>
    </a>
};

export default ProjectCell;