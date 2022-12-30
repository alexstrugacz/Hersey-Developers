import React from 'react';
import DiscordButton from '../../global/DiscordButton';
import LearnMoreButton from '../../global/LearnMoreButton';

const NavbarTitle: React.FC<{}> = () => {
    return (
        <div>
            <div className={`fixed top-0 flex flex-col md:flex-row z-20 p-5 w-full`}>
                <div className='flex justify-between flex-row items-center w-full'>
                    <div className='flex items-center'>
                        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
                            <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill="white" />
                            <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill="white" />
                        </svg>
                        <a
                            href={"/"}
                            className={
                                `ml-4 mr-12 text-2xl font-bold text-white font-Grotesk hover:font-bold transition-all`
                            }
                        >
                            Hersey Developers
                        </a>
                    </div>
                    <div className='flex gap-3'>
                        <a
                            href={"/"}
                            className={
                                `flex ml-2 mr-4 text-xl font-light text-white font-Grotesk hover:font-bold transition-all`
                            }
                        >
                            Resources
                        </a>
                        <a
                            href={"/"}
                            className={
                                `flex ml-4 mr-4 text-xl text-white font-light font-Grotesk hover:font-bold transition-all`
                            }
                        >
                            Projects
                        </a>
                        <a
                            href={"/"}
                            className={
                                `flex text-white ml-2 mr-16 text-xl font-Grotesk font-bold hover:font-extrabold transition-all`
                            }
                        >
                            Join Today
                        </a>
                    </div>
                </div>
            </div>
            <div className='absolute top-0 ml-16 mt-56'>
                <h1 className='text-white font-Grotesk text-6xl font-extrabold text-left mt-12'>Level up your <a className='text-cyan-300'>coding skills</a></h1>
                <p className='text-white font-Grotesk text-xl text-left w-3/5 mt-8'>Hersey Developers is a remote internship where you’ll learn software development and build high-impact projects 🚀</p>
                <div className='flex mt-16 gap-2'>
                    <DiscordButton
                        link={'https://discord.gg/ZfdyycD4y4'}
                        text={"Join the Discord"}
                        startColor={"from-cyan-400"}
                        endColor={"to-cyan-800"} />
                    <LearnMoreButton
                        link={'/'}
                        text={"Learn More"}
                        startColor={"from-black-400"}
                        endColor={"to-black-400"} />
                </div>
            </div>
        </div>
    );
};

export default NavbarTitle;
