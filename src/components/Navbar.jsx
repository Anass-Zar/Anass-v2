import { useState } from 'react';

const Navbar = () => {
      let Links =[
        {name:"About",link:"/about"},
        {name:"Skills",link:"/skills"},
        {name:"Projects",link:"/projects"},
        {name:"Contact",link:"/contact"},
      ];
      let [open, setOpen] =useState(false);
    return (
        <div className='shadow-md w-full fixed top-0 left-0 text-zinc-800'>
          <div className='md:flex items-center justify-between bg-white py-4 lg:px-16 md:px-12 px-7 transition-all duration-300 ease-in'>
            <div className='font-bold text-2xl flex items-center'>
                <a href='/home'>Anass.dev</a>
            </div>
            <div onClick={()=>setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                {
                    open ?             
                      <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x" >
                        <path d="M18 6l-12 12"></path>
                        <path d="M6 6l12 12"></path>
                      </svg>
                    : 
                      <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-menu" >
                        <path d="M4 6l16 0"></path>
                        <path d="M4 12l16 0"></path>
                        <path d="M4 18l16 0"></path>
                      </svg> 
                } 
            </div>
            <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-12' : 'top-[-250px]'} shadow-md md:shadow-none`}>
                {
                    Links.map((link, key) => (
                    <li key={key} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                }
            </ul>
          </div>
        </div>
    );
};

export default Navbar;