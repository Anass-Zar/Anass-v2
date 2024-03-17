import image from '../images/image.png';
import CV from "../pdf/Anass Zarioh - CV.pdf"


const Home = () => {
  return (
    <div className="bg-gray-100 h-[90vh]  w-full flex items-center mt-14">
      <div className="pt-20 pb-20 px-6 md:px-10 flex items-center flex-col-reverse md:flex-row flex-wrap md:flex-nowrap w-auto lg:w-[63rem] xl:w-[80%] mx-auto">
        <div className="w-full md:w-7/12 lg:w-1/2">
          <h1 className="font-bold text-5xl lg:text-6xl mb-6 md:mb-8 md:text-left text-center transition-all duration-300 ease-in">
            Hi, I&apos;m Anass Zarioh
          </h1>
          <p className="text-lg lg:text-xl mb-6 md:mb-8 md:text-left text-center transition-all duration-300 ease-in">A Full Stack Developer based in Agadir, Morocco 📍 . Passionate about creating interactive applications to enhance user experiences.</p>
          <div className="flex gap-x-2 md:gap-x-5 md:justify-start justify-center">
            <a href={CV} download="Anass Zarioh - CV.pdf" className="text-white bg-blue-500 hover:bg-blue-600 rounded-md px-5 py-3 mb-2 flex gap-4 text-md w-48 items-center">
              Download CV
              <svg xmlns="http://www.w3.org/2000/svg" className='w-6 h-6 ' viewBox="0 0 20 20"><g fill="currentColor">
                <path d="M7.8 6.35c.56 0 1.01-.45 1.01-1.01S8.36 4.33 7.8 4.33s-1.01.45-1.01 1.01s.45 1.01 1.01 1.01"/>
                <path fillRule="evenodd" d="M9.83 8.55c0-1.08-.91-1.86-2.03-1.86c-1.12 0-2.03.78-2.03 1.86v.51c0 .09.04.18.1.24c.06.06.15.1.24.1h3.38c.09 0 .18-.04.24-.1c.06-.06.1-.15.1-.24zM5.75 11.5a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h7a.75.75 0 0 1 0 1.5h-7a.75.75 0 0 1-.75-.75" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M2.5 2.5c0-1.102.898-2 2-2h6.69c.562 0 1.092.238 1.465.631l.006.007l4.312 4.702c.359.383.527.884.527 1.36v10.3c0 1.102-.898 2-2 2h-11c-1.102 0-2-.898-2-2zm8.689 0H4.5v15h11V7.192l-4.296-4.685l-.003-.001a.041.041 0 0 0-.012-.006" clipRule="evenodd"/>
                <path fillRule="evenodd" d="M11.19.5a1 1 0 0 1 1 1v4.7h4.31a1 1 0 1 1 0 2h-5.31a1 1 0 0 1-1-1V1.5a1 1 0 0 1 1-1" clipRule="evenodd"/></g>
              </svg>
            </a>
          </div>
        </div>
        <div className="w-full md:w-5/12 lg:w-1/2 flex justify-center md:justify-end items-center">
          <img src={image} alt="image"
            className="rounded-full w-[250px] h-[250px] md:w-[280px] md:h-[280px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] mb-6 md:mb-0 transition-all duration-300 ease-in"
          />
        </div>
      </div>
    </div>
  )
}

export default Home