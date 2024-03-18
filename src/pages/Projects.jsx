import GetHouse from "../images/get-house.png"
import ZhGaming from "../images/zhgaming.png"


const Projects = () => {
  return (
    <div className="bg-white max-w-full">
      <h1 className='font-bold text-3xl pt-20 text-center text-blue-500'>Projects</h1>
      <div className="pt-12 pb-28 lg:pt-14 lg:pb-28 px-6 md:px-10 w-auto lg:w-[63rem] xl:w-[80%] mx-auto grid justify-items-center gap-8">
        <div className="py-0 px-0 md:py-10 md:px-8 flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row items-center gap-0 md:gap-6 border-2 border-gray-300 rounded-lg">
          <div className="w-full lg:w-5/12 p-4 md:p-0">
            <h1 className="text-2xl lg:text-4xl font-bold mb-1">Get House</h1>
            <h1 className="text-lg lg:text-2xl font-semibold mb-4">Store</h1>
            <p className="mb-4 text-md">
              <span className="text-blue-500 font-semibold">Get House</span> is a go-to platform for buying, selling, or renting homes. 
              With a simple interface and a vast array of listings, finding your ideal property is a breeze. 
              Join us today to discover your next home sweet home!
            </p>
            <a href="https://get-house.onrender.com/" target="_blank" className="w-36 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm  px-5 py-2.5 mb-2 flex gap-2 items-center">
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-7/12 rounded-md">
            <img src={GetHouse} alt="Get House" className="rounded-md" />
          </div>
        </div>
        <div className="py-0 px-0 md:py-10 md:px-8 flex flex-wrap lg:flex-nowrap flex-col-reverse lg:flex-row items-center gap-0 md:gap-6 border-2 border-gray-300 rounded-lg">
          <div className="w-full lg:w-5/12 p-4 md:p-0">
            <h1 className="text-2xl lg:text-4xl font-bold mb-1">ZhGaming</h1>
            <h1 className="text-lg lg:text-2xl font-semibold mb-4">Store</h1>
            <p className="mb-4 text-md">
              <span className="text-blue-500 font-semibold">ZhGaming</span>
              <span className="text-blue-500 font-semibold">ZhGaming</span> is an online platform dedicated to selling video games, 
              providing gamers with a wide selection of digital and physical game titles. 
              Offering convenience and accessibility, <span className="text-blue-500 font-semibold">ZhGaming</span> aims to enhance the gaming experience for enthusiasts worldwide.
            </p>
            <a href="https://zhgaming.onrender.com/" target="_blank" className="w-36 text-white bg-blue-500 hover:bg-blue-600 rounded-md text-sm  px-5 py-2.5 mb-2 flex gap-2 items-center">
              Live Demo
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3"/>
              </svg>
            </a>
          </div>
          <div className="w-full lg:w-7/12 rounded-md">
            <img src={ZhGaming} alt="ZhGaming" className="rounded-md" />
          </div>
        </div>
        <img className="mt-12" src="https://readme-typing-svg.demolab.com?font=Poppins&weight=700&size=24&pause=1000&color=3F3F46&random=false&width=375&lines=New+projects+coming+soon..+%F0%9F%A4%A0" alt="Typing SVG" />
      </div>
    </div>
  )
}

export default Projects