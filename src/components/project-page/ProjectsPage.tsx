import React from 'react';
import BackButton from '../global/BackButton';
import { Projects } from './Projects';
import ProjectCell from './ProjectCell';

const ProjectsPage: React.FC<{}> = () => {
    return <div>
        <div className='absolute min-h-full w-screen bg-gradient-to-b from-[#171717] to-[#171717]'>
            <div className='flex mt-[3vh] ml-10'>
                <BackButton link={"/"} />
            </div>
            <h1 className='flex text-white text-5xl font-Grotesk font-bold ml-10 mt-[4vh]'>Projects</h1>
            <div>
                <div className={"mt-5"}>
                    <div className="m-10 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-5 max-w-6xl">
                        {Projects.map((project) => {
                            return (
                                <div>
                                    <ProjectCell
                                        imagelink={project.imagelink}
                                        name={project.name}
                                        description={project.description}
                                        link={project.link}
                                        status={project.status}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ProjectsPage;