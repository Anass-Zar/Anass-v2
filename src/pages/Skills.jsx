import frontend from '../images/frontend.png'
import backend from '../images/backend.png'
import tools from '../images/tools.png'

const Skills = () => {
  const FrontEnd = ['HTML5', 'CSS3', 'Javascript', 'React', 'Redux', 'Tailwind css']
  const BackEnd = ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'MySQL']
  const Tools = ['Git', 'Github', 'Postman', 'Render', 'Vs code', 'Tailwind css']
  return (
    <div className="bg-gray-100 max-w-full">
      <h1 className='font-bold text-3xl pt-20 text-center text-blue-500'>Skills</h1>
      <div className="grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-12 pt-12 pb-20 lg:pt-14 lg:pb-28 px-4 w-auto lg:w-[63rem] xl:w-[80%] mx-auto">
        <div className='grid gap-3 md:gap-6'>
          <div className='grid justify-items-center'>
            <img src={frontend} alt="frontend" className='w-16 h-16 m-2' />
            <h1 className='font-bold text-2xl text-[#223453]'>Front-end</h1>
          </div>
          <hr className="w-4/5 border-t-2 border-zinc-400 mx-auto" />
          <div className='px-8 flex gap-x-6 gap-y-3 flex-wrap justify-center'>
            {FrontEnd.map((skill, key) => (
              <h1 key={key} className='font-semibold'>{skill}</h1>
            ))}
          </div>
        </div>
        <div className='grid gap-3 md:gap-6'>
          <div className='grid justify-items-center'>
            <img src={backend} alt="backend" className='w-20 h-20' />
            <h1 className='font-bold text-2xl text-[#223453]'>Back-end</h1>
          </div>
          <hr className="w-4/5 border-t-2 border-zinc-400 mx-auto" />
          <div className='px-8 flex gap-x-6 gap-y-3 flex-wrap justify-center'>
            {BackEnd.map((skill, key) => (
                <h1 key={key} className='font-semibold'>{skill}</h1>
              ))}
          </div>
        </div>
        <div className='grid gap-3 md:gap-6 col-span-1 md:col-span-2 lg:col-span-1'>
          <div className='grid justify-items-center'>
            <img src={tools} alt="tools" className='w-16 h-16 m-2' />
            <h1 className='font-bold text-2xl text-center text-[#223453]'>Tools</h1>
          </div>
          <hr className="w-4/5 border-t-2 border-zinc-400 mx-auto" />
          <div className='px-8 flex gap-x-6 gap-y-3 flex-wrap justify-center'>
            {Tools.map((skill, key) => (
              <h1 key={key} className='font-semibold'>{skill}</h1>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills