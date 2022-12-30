

import React from 'react';


const ProjectCell: React.FC<{
    imagelink: string;
    name: string;
    description: string;
    link: string;
    status: string;
}> = (project) => {
    return <div>
        <div className={"flex flex-col"}>
            <img src={project.imagelink}></img>
            <h1 className={"text-white font-Grotesk font-bold text-2xl"}>{project.name}</h1>
            <p className={"text-white font-Grotesk font-thin text-lg"}>{project.description}</p>
            <a href={project.link} className='text-black font-Grotesk text-lg'>{project.link}</a>
            <p className={"text-white font-Grotesk font-thin text-lg"}>{project.status}</p>
        </div>
    </div>;
};

export default ProjectCell;