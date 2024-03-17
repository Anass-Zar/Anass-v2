import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  let Links = [
    { name: "Home", link: "home" },
    { name: "About", link: "about" },
    { name: "Skills", link: "skills" },
    { name: "Projects", link: "projects" },
    { name: "Contact", link: "contact" },
  ];
  let [open, setOpen] = useState(false);

  const [activeLink, setActiveLink] = useState('home');

  const handleSetActive = (to) => {
    setActiveLink(to);
  }

  return (
    <div className='shadow-md w-full fixed top-0 left-0 text-zinc-800'>
      <div className='md:flex items-center justify-between bg-white py-4 lg:px-16 md:px-12 px-7 transition-all duration-300 ease-in'>
        <div className='font-bold text-xl md:text-2xl flex items-center'>
          <Link
            activeClass="active"
            to='home'
            spy={true}
            smooth={true}
            offset={-50}
            duration={800}
            onSetActive={handleSetActive}
            className='text-gray-800 duration-500 cursor-pointer'
          >
            Anass Zarioh
          </Link>
        </div>
        <div onClick={() => setOpen(!open)}>
          {
            open ?
              <div className='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-x" >
                  <path d="M18 6l-12 12"></path>
                  <path d="M6 6l12 12"></path>
                </svg>
              </div>
              :
              <div className='absolute right-8 top-4 cursor-pointer md:hidden w-7 h-7'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mobile-menu" >
                  <path d="M4 6l16 0"></path>
                  <path d="M4 12l16 0"></path>
                  <path d="M4 18l16 0"></path>
                </svg>
              </div>
          }
        </div>
        <ul className={`md:flex md:items-center md:pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto transition-all duration-500 ease-in ${open ? 'top-[60px]' : 'top-[-250px]'} shadow-md md:shadow-none`}>
          {Links.map((link, key) => (
            <li key={key} className='md:ml-5 md:my-0 py-3 font-bold md:pl-0 pl-9'>
              <Link
                onClick={() => setOpen(false)}
                activeClass="active"
                to={link.link}
                spy={true}
                smooth={true}
                offset={-50}
                duration={800}
                onSetActive={handleSetActive}
                className='text-gray-800 hover:text-blue-500 duration-500 cursor-pointer'
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
