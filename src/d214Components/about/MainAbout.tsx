import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const MainAbout = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 1 }}
    >
      <div className={`flex items-center justify-center flex-col py-20 px-4`} style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,60,72,1) 35%, #c00c2c 100%, rgb(0, 0, 0, 0.7) 100%)" }}>
        <div className='display text-center flex flex-col gap-2'>
          <h1 className='text-4xl pb-5 text-white'>What is <span className='font-bold'>D214 <span style={{ color: "#c00c2c" }}>Developers</span></span>?</h1>
          <p style={{ color: "white" }} className='text-lg'>D214 Developers is a 60 hour, remote, software engineering internship where you team up with ~8 people to build and deploy websites for non-profits!</p>
        </div>
      </div>
    </motion.div>
  )
}

export default MainAbout