import AboutComponent from './AboutComponent'

const About = () => {
    return (
        <div 
            className={`flex w-full justify-center items-center py-10 bg-black bg-opacity-90`}
        >
            <div className='change flex items-center flex-col pt-10 pb-10 max-w-screen-lg'>
                <AboutComponent /> 
            </div>
        </div>
    )
}

export default About