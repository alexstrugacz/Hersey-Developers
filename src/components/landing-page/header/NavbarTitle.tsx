import React, { useState } from 'react';
import DiscordButton from '../../global/DiscordButton';
import LearnMoreButton from '../../global/LearnMoreButton';
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useWindowDimensions } from "./getwindowsize";

const NavbarTitle: React.FC<{
    transparent: boolean;
}> = (props) => {

    const windowDimensions = useWindowDimensions();
    const [opened, setOpened] = useState(false);

    const handleOpen = () => {
        setOpened(true);
    }

    const handleClose = () => {
        setOpened(false);
    }


    return (
        <div>
            <div className='absolute z-40 ml-16 top-0 mt-[30vh]'>
                <h1 className='text-center text-white md:text-left font-Grotesk text-6xl font-extrabold mt-12'>Level up your <a className='text-cyan-300'>coding skills</a></h1>
                <p className=' hidden md:block text-white font-Grotesk text-xl text-left w-3/5 mt-8 '>Hersey Developers is a remote internship where you’ll learn software development and build high-impact projects 🚀</p>
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
            <div className={`fixed top-0 flex flex-col md:flex-row z-50 p-5 w-full ${(!props.transparent || opened) ? "bg-zinc-50 bg-opacity-90 shadow-lg" : ""}`}>
                <div className='flex justify-between flex-row items-center w-full'>
                    <div className='flex items-center'>
                        <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
                            <g filter="url(#filter0_d_106_2)">
                                <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill={(!props.transparent ? "#00A3FF" : "white")} />
                                <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill={(!props.transparent ? "#00A3FF" : "white")} fill-opacity="0.9" />
                                <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill={(!props.transparent ? "#00A3FF" : "white")} />
                                <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill={(!props.transparent ? "#00A3FF" : "white")} fill-opacity="0.9" />
                            </g>
                            <defs>
                                <filter id="filter0_d_106_2" x="0.600006" y="13.52" width="40.8" height="40.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dy="3" />
                                    <feGaussianBlur stdDeviation="2" />
                                    <feComposite in2="hardAlpha" operator="out" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_106_2" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_106_2" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                        <a
                            href={"/"}
                            className={
                                `ml-2 mr-12 text-xl font-bold ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Hersey Developers
                        </a>
                    </div>
                    <div className='flex'>
                        <a
                            href={"/resources"}
                            className={
                                `flex ml-2 mr-4 text-xl font-light text-white self-center font-Grotesk hover:font-bold transition-all ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Resources
                        </a>
                        <a
                            href={"/projects"}
                            className={
                                `flex ml-4 mr-4 text-xl text-white font-light self-center font-Grotesk hover:font-bold transition-all ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Projects
                        </a>
                        <a
                            href={"https://discord.gg/ZfdyycD4y4"}
                            className={
                                `flex text-white ml-2 mr-16 text-xl font-bold font-Grotesk rounded-xl p-2 hover:font-extrabold border-solid border-4 border-blue-400 transition-all hover:bg-blue-100 hover:text-black ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Join Today
                        </a>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default NavbarTitle;
