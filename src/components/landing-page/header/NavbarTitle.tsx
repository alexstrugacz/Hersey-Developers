import { motion } from "framer-motion";
import React, { useState } from 'react';
import ActionButton from "../../global/ActionButton";
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
            <div className='flex flex-col justify-center items-center absolute z-40 top-0 w-full h-[120vh] md:h-screen'>
                <div className={"max-w-6xl p-5 md:p-10"}>
                    <motion.h1
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }} className=' text-white text-left font-Grotesk text-6xl font-extrabold mt-12'>Level up your <a className='text-cyan-300'>coding skills</a></motion.h1>
                    <motion.p
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className='mr-12 md:mr-0 text-white font-Grotesk text-xl text-left md:w-3/5 mt-6 '>Hersey Developers is a remote internship where you’ll learn software development and build high-impact projects.</motion.p>
                    <motion.p
                        initial={{ opacity: 0, x: -50, scale: 0.8 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ delay: 0.8, duration: 0.5 }}
                        className='mr-12 md:mr-0 text-white font-Grotesk text-lg text-left md:w-3/5 mt-6 font-bold'>2024 signups are open! Signups close 10/31, and space is limited.</motion.p>
                    <motion.div
                        initial={{ opacity: 0, x: -100, scale: 0.8 }}
                        animate={{ opacity: 1.2, x: 0, scale: 1 }}
                        transition={{ delay: 1.3, duration: 0.5 }}
                        className='mt-8 text-left flex flex-col md:flex-row md:mt-16 gap-4'>

                        <ActionButton
                            link="https://herseyhacks.notion.site/Hersey-Developers-2024-c02096923c294568bed55c63cd518adc?pvs=4"
                            text="🚀 Sign Up Now"
                            startColor="from-orange-400"
                            endColor="to-red-800"
                        />
                        <DiscordButton
                            link={'https://discord.gg/ZfdyycD4y4'}
                            text={"Join the Discord"}
                            startColor={"from-cyan-400"}
                            endColor={"to-cyan-800"} />


                        {/* <LearnMoreButton
                            link={'/'}
                            text={"Kick-Off Form"}
                            startColor={"from-black-400"}
                            endColor={"to-black-400"} /> */}

                    </motion.div>
                </div>
                {/* <a href='https://forms.gle/8ErZ3G2VQZERawyX6' className='flex mt-6 bg-gradient-to-b from-purple-300 to-purple-700 rounded-lg p-3 px-5 w-fit hover:cursor-pointer hover:scale-105 transition-all font-UI text-white ring-4 ring-offset-4 ring-violet-400 ring-offset-black font-bold'>
                    Kick-Off Form
                </a> */}
            </div>
            <div className={`fixed top-0 flex flex-col md:flex-row z-50 p-4 md:p-5 w-full transition-colors ${(!props.transparent || opened) ? "bg-zinc-50 bg-opacity-90 shadow-lg" : ""}`}>
                <div className='flex justify-between flex-row items-center w-full'>
                    <div className='flex items-center'>

                        <svg className={` mr-0 md:block md:ml-4 scale-50 md:scale-100`} xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
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
                        <h1 className={`md:hidden font-Grotesk text-xl ${props.transparent ? "text-white" : "text-black"}`}>Hersey Developers</h1>
                        <div className={"md:hidden"}>
                            {/* {
                                opened ? (
                                    <XMarkIcon onClick={handleClose} className={`w-7 text-zinc-400 hover:${(props.transparent && !opened) ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
                                ) : (
                                    <Bars3Icon onClick={handleOpen} className={`w-7 text-zinc-400 hover:${(props.transparent && !opened) ? "text-white" : "text-black"} transition-all hover:cursor-pointer`} />
                                )
                            } */}
                        </div>
                        <a
                            href={"/"}
                            className={
                                `hidden md:block ml-2 text-xl font-bold ${(props.transparent) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Hersey Developers
                        </a>
                    </div>
                    <div className='hidden md:flex'>
                        <a
                            href={"/resources"}
                            className={
                                `flex ml-2 mr-3 md:mr-4 text-xl font-light text-white self-center font-Grotesk hover:font-bold transition-all ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Resources
                        </a>
                        <a
                            href={"/projects"}
                            className={
                                `flex ml-4 mr-5 md:mr-4 text-xl text-white font-light self-center font-Grotesk hover:font-bold transition-all ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Projects
                        </a>
                        <a
                            href={"https://herseyhacks.notion.site/Hersey-Developers-2024-c02096923c294568bed55c63cd518adc?pvs=4"}
                            className={
                                `hidden md:block text-white ml-2 mr-3 md:mr-16 text-xl font-bold font-Grotesk rounded-xl p-4 py-2 hover:font-extrabold border-solid border-4 border-blue-400 transition-all hover:bg-blue-400 hover:text-black ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Sign Up Today
                        </a>
                        <a
                            href={"https://discord.gg/ZfdyycD4y4"}
                            className={
                                `md:hidden flex text-white ml-2 mr-3 md:mr-16 text-xl font-bold font-Grotesk rounded-xl p-2 hover:font-extrabold border-solid border-4 border-blue-400 transition-all hover:bg-blue-100 hover:text-black ${(props.transparent && !opened) ? "text-white" : "text-black"} hover:font-bold transition-all`
                            }
                        >
                            Join
                        </a>
                    </div>
                </div>
            </div>


        </div>

    );
};

export default NavbarTitle;
