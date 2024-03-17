import image from '../images/pc.jpg';


const About = () => {
  return (
    <div className="bg-white max-w-full">
      <h1 className='font-bold text-3xl pt-20 text-center text-blue-500'>About Me</h1>
      <div className="pt-12 pb-28 lg:pt-14 lg:pb-28 px-6 lg:px-10 flex flex-wrap lg:flex-nowrap gap-x-0 lg:gap-x-10 w-auto lg:w-[63rem] xl:w-[80%] mx-auto">
        <div className='w-[33rem] md:w-[40rem] lg:w-1/2 mx-auto transition-all duration-300 ease-in'>
          <img src={image} alt="image" className='rounded-2xl shadow-md'/>
        </div>
        <div className='w-[33rem] md:w-[40rem] lg:w-1/2 mt-8 lg:mt-0 mx-auto grid content-center items-center'>
          <h1 className='font-bold text-lg md:text-2xl mb-4 lg:text-left text-center transition-all duration-300 ease-in'>Full Stack Developer based in Agadir, Morocco 📍</h1>
          <p className='tex-md md:text-lg lg:text-left text-center text-zinc-800 transition-all duration-300 ease-in'>
            Hey, My name is Anass Zarioh, I&apos;m a Full Stack Developer who loves combining creativity with code. 
            From designing user interfaces to implementing backend functionality, 
            I enjoy every aspect of building web applications. 
            My goal is to create seamless and engaging digital experiences that leave a lasting impression.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About