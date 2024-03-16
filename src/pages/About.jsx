import image from '../images/pc.jpg';


const About = () => {
  return (
    <div className="bg-white max-w-full">
      <h1 className='font-bold text-3xl lg:text-4xl pt-24 text-center text-blue-500'>About Me</h1>
      <div className="pt-12 pb-28 lg:pt-14 lg:pb-28 px-6 lg:px-10 flex flex-wrap lg:flex-nowrap gap-x-0 lg:gap-x-10 w-auto lg:w-[63rem] mx-auto">
        <div className='w-[30rem] lg:w-1/2 mx-auto'>
          <img src={image} alt="image" className='rounded-2xl shadow-md'/>
        </div>
        <div className='w-[30rem] lg:w-1/2 mt-8 lg:mt-0 mx-auto grid content-center items-center'>
          <h1 className='font-bold text-lg lg:text-2xl mb-4 lg:text-left text-center'>Full Stack Developer based in Agadir, Morocco 📍</h1>
          <p className='tex-md lg:text-lg lg:text-left text-center text-zinc-800'>
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