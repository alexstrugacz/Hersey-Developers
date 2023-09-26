import React from 'react';
import BackButton from '../global/BackButton';
import Resource from './Resource';

const ResourcePage: React.FC<{}> = () => {
    const LINKS: {
        link: string;
        name: string
    }[] = [
            {
                link: "https://docs.google.com/forms/d/e/1FAIpQLSelY3ilzMC4sMQdWO0dSfvrds2epl3N-NrqlBJpczfT1-hWIw/viewform",
                name: "Kick-Off Form"
            },
            {
                link: "https://docs.google.com/document/d/19zk0G2buyT68yjnDb1hJwdqgE90iEyAwbLnpewYQ-yA/edit?usp=sharing",
                name: "Group Assignments"
            },
            {
                link: "https://udemy.com",
                name: "Udemy"
            },
            {
                link: "https://notion.so",
                name: "Notion"
            },
            {
                link: "https://discord.gg/ZfdyycD4y4",
                name: "Discord"
            }
        ]

    return <div>
        <div className='min-h-screen text-left pt-10 bg-gradient-to-b pl-10 from-[#171717] to-[#171717]'>
            <div className='flex'>
                <BackButton link={"/"} />
            </div>
            <h1 className='flex text-white text-5xl font-Grotesk font-bold mt-[4vh]'>Resources</h1>
            <p className='text-white mt-3'>Coming soon...</p>
            {/* <br />
            <h2 className={"text-3xl font-Grotesk font-medium text-white mb-1"}>Guides</h2>
            <Resource
                name={"Getting Started with Hersey Developers"}
                link={"https://docs.google.com/document/d/1YSTXQfNnIy0mUJoHg_50msaA4AlW93FBgrX6FT7Rrjg/edit?usp=sharing"}
            />
            <br />
            <br />
            <h2 className={"text-3xl font-Grotesk font-medium text-white mb-1"}>Important Links</h2>
            <div className={"flex flex-col"}>
                {LINKS.map((link, index) => {
                    return (
                        <Resource
                            name={link.name}
                            link={link.link}
                        />
                    )
                })}
            </div> */}


        </div>
    </div>
}

export default ResourcePage;