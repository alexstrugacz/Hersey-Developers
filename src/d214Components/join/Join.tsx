 import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import DiscordButton from '../../components/global/DiscordButton';
import ActionButton from '../../components/global/ActionButton';

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
          <ActionButton
            link="/"
            text="Sign Up Closed"
            startColor="from-red-400"
            endColor="to-red-800"
            disabled
          />
          <DiscordButton
            link={'https://discord.gg/ZfdyycD4y4'}
            text={"Join the Discord"}
            startColor={"from-cyan-400"}
            endColor={"to-cyan-800"} />
        </div>
      </motion.div>
    </div>
  )
}

export default Join