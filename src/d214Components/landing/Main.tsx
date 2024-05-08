import React from 'react'
import ActionButton from '../../components/global/ActionButton'
import DiscordButton from '../../components/global/DiscordButton'
import { motion } from 'framer-motion'

const Main = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen overflow-hidden text-white' style={{ backgroundColor: "rgb(0, 0, 0, 0.9)", backgroundImage: "url('https://firebasestorage.googleapis.com/v0/b/d214developers.appspot.com/o/image.png?alt=media&token=2a24a25f-400c-41e8-9c82-ec3ba9aa339d')", backgroundPosition: "885% 375%" }}>
            <div className='flex items-center justify-center w-full flex-col p-3' style={{ zIndex: "1" }}>
                <motion.h1 initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }} style={{ fontSize: 'min(13vw, 70px)', textAlign: "center", lineHeight: "1.2" }} className='font-bold pb-2 '>Code.<span style={{ color: "#c00c2c" }}> For non-profits</span></motion.h1>
               <motion.h1 initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.8 }} style={{ fontSize: 'min(8vw, 30px)', textAlign: "center" }} className='pb-10'>60 hour software engineering internship</motion.h1>
               <motion.h1 initial={{ scale: 0.5 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1 }} className='flex flex-wrap justify-center gap-3'>
                    <ActionButton
                        link="/"
                        text="Sign Up Closed"
                        startColor="from-red-400"
                        endColor="to-red-800"
                        disabled
                    />
                    <ActionButton
                        link="/"
                        text="Hersey Developers"
                        startColor="from-orange-400"
                        endColor="to-red-800"
                    />
                    <DiscordButton
                        link={'https://discord.gg/ZfdyycD4y4'}
                        text={"Join the Discord"}
                        startColor={"from-cyan-400"}
                        endColor={"to-cyan-800"} />

                </motion.h1>
            </div>
        </div>
    )
}

export default Main