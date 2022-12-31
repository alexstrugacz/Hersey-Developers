import React from 'react';
import BackButton from '../global/BackButton';

const ResourcePage: React.FC<{}> = () => {
    return <div>
        <div className='absolute h-full w-screen bg-gradient-to-b from-[#171717] to-[#171717]'>
            <div className='flex mt-[3vh] ml-2'>
                <BackButton link={"/"} />
            </div>
            <h1 className='flex text-white text-5xl font-Grotesk font-bold ml-10 mt-[4vh]'>Resources</h1>
            <h2 className="flex text-white text-2xl font-Grotesk font-thin ml-10 mt-[2vh]">Coming Soon!</h2>

        </div>
    </div>
}

export default ResourcePage;