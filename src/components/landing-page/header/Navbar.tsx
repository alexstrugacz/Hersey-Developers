import React from 'react';
import backgroundImage from '../assets/images/background.png'

const Navbar: React.FC<{}> = () => {
    return (
        <div className={"relative bg-neutral-900 h-screen overflow-hidden"}>
            <div className={"absolute z-3 w-full p-5 pb-20 h-screen"}>
                <div className={"flex mr-8 md:mt-0 items-end"}>
                    <div className={`fixed top-0 left-0 flex flex-col md:flex-row md:items-start md:items-center z-20 p-5 w-full`}>
                        <div className='flex justify-between flex-row items-center w-full'>
                            <div className='flex items-center'>
                                <svg className='ml-4' xmlns="http://www.w3.org/2000/svg" width="42" height="58" viewBox="0 0 42 58" fill="none">
                                    <path d="M20.16 45.92L4.6 35.88V31.56L20.16 21.52V27.28L9.8 33.64V33.8L20.16 40.16V45.92Z" fill="white" />
                                    <path d="M21.84 37.92L37.4 27.88V23.56L21.84 13.52V19.28L32.2 25.64V25.8L21.84 32.16V37.92Z" fill="white" />
                                </svg>
                                <a
                                    href={"/"}
                                    className={
                                        `ml-4 mr-12 text-xl font-bold text-white font-Grotesk hover:font-bold transition-all`
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
                </div>
            </div>
        </div>
    );
};

export default Navbar;
