import React from 'react';
import BackButton from '../global/BackButton';
import { Projects } from './Projects';
import ProjectCell from './ProjectCell';

const ProjectsPage: React.FC<{}> = () => {
    return <div>
        <div className='absolute h-screen w-screen bg-[#171717]'>
            <div className='flex mt-[3vh] ml-2'>
                <BackButton link={"/"} />
            </div>
            <h1 className='flex text-white text-5xl font-Grotesk font-bold ml-10 mt-[4vh]'>Projects</h1>
            <div>
                <div className={"mt-5"}>
                    {Projects.map((project) => {
                        return (
                            <ProjectCell
                                imagelink={project.imagelink}
                                name={project.name}
                                description={project.description}
                                link={project.link}
                                status={project.status}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
};

export default ProjectsPage;