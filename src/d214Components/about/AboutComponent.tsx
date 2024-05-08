import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

interface AboutInterface {
    catchPhrase: string;
    name: string;
    imageName: string;
    description: string;
}

const AboutComponentObject = [
    {
        _id: 1,
        catchPhrase: "Discover",
        name: "Discover new coding technologies",
        imageName: "https://firebasestorage.googleapis.com/v0/b/d214developers.appspot.com/o/about.jpg?alt=media&token=2b93adb7-465c-4051-8ecc-bd474e237421",
        description: "You will learn many new things in this internship. From collaboration, to testing and deployement, to discovering new things about programming! This could be an IDE you did not use yet, getting familiar with GitHub, or learning new frameworks you might not have used before!"
    },
    {
        _id: 2,
        catchPhrase: "Collaborate",
        name: "Collaborate with your team",
        imageName: "https://firebasestorage.googleapis.com/v0/b/d214developers.appspot.com/o/about2.jpg?alt=media&token=f8bc8262-06b1-4c0a-a828-a8e9d89ca9fa",
        description: "Collaboration is very important when it comes to team projects. You will be placed in a group of around 8 people and a project manager. When the project is over, you will also get to present your project!"
    },
    {
        _id: 3,
        catchPhrase: "Build & Deploy",
        name: "Deploy websites professionaly",
        imageName: "https://firebasestorage.googleapis.com/v0/b/d214developers.appspot.com/o/about3.jpg?alt=media&token=b05777e3-3e86-4de0-9063-97336781a6fb",
        description: "D214 Developers is not just about coding website, but you also get to learn how to test and deploy them! This process happens when the website is fully finished and at the end of the internship."
    }
]

const AboutComponent = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0,
    });
    return (
        <>
            {AboutComponentObject.map(data => (
                <>
                    {data._id != 1 && (
                        <div className='w-4/5 m-10 ml-10 mr-10 hide' style={{ border: "1px solid lightgray" }}></div>
                    )}
                    <motion.div
                        ref={ref}
                        initial={{ scale: 0.5 }}
                        animate={{ scale: inView ? 1 : 0.5 }}
                        transition={{ duration: 1, ease: "easeInOut" }}
                        className={`pt-5 pb-5 md:pb-0 md:pt-0 lg:pb-0 lg:pt-0 w-4/5 flex flex-col items-center text-center ${data._id % 2 === 0 ? 'md:items-end lg:items-end'
                            : 'md:items-start lg:items-start'} justify-center`}>
                        <h1 className='text-3xl font-bold' style={{ color: "#c00c2c" }}>{data.catchPhrase}</h1>
                        <div className='change flex w-full justify-between gap-8 pt-8 items-center'>
                            {data._id % 2 === 0 ? (
                                <>
                                    <img className="change w-3/6 shadow-2xl flex justify-center rounded-2xl" style={{ maxHeight: "275px", objectFit: "cover" }} src={data.imageName} alt="image" />
                                    <div className='change w-3/6 flex flex-col justify-end text-2xl text-end text-white'>
                                        <div className='pb-4 text-center md:text-end lg:text-end font-bold'>{data.name}</div>
                                        <p className='text-base text-end'>{data.description}</p>
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className='change w-3/6 flex flex-col justify-end text-2xl text-end text-white'>
                                        <div className='pb-4 font-bold text-center md:text-start lg:text-start'>{data.name}</div>
                                        <p className='text-base text-start'>{data.description}</p>
                                    </div>
                                    <img className="change w-3/6 shadow-2xl flex justify-center rounded-2xl" style={{ maxHeight: "275px", objectFit: "cover" }} src={data.imageName} alt="image" />
                                </>
                            )}
                        </div>
                    </motion.div>
                </>
            ))}

        </>
    )
}

export default AboutComponent