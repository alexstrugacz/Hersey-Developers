 import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';

const Join = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return (
    <div className='text-start' style={{ background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(0,60,72,1) 35%, #ba0c2f 100%, #ba0c2f 100%)" }}>
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 1 }}
        className='padding text-white flex flex-col gap-4'
      >
        <h1 className='font-bold' style={{ fontSize: "min(9vw, 50px)", lineHeight: "1.2" }}>Want to join D214 <span style={{ color: "#c00c2c" }}>Developers</span>?</h1>
        <h2 style={{ fontSize: "min(4vw, 20px)" }}>Here is our signup form for D214 Developers.</h2>
        <div className='flex gap-2 pt-4 flex-wrap'>
          <button className='bg-white text-black font-bold px-6 py-2 rounded-xl cursor-not-allowed'>Sign Up (Opens soon)</button>
          <button className='bg-slate-500 text-white font-bold px-6 py-2 rounded-xl cursor-not-allowed'>Join the Discord (Opens soon)</button>
        </div>
      </motion.div>
    </div>
  )
}

export default Join