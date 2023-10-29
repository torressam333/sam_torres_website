import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { styles } from '../styles';
import { navLinks } from '../constants/index';
import { st3Logo } from '../assets';
import MobileNavbar from './MobileNavbar';

const Navbar = () => {
  const navMainClass = `${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-do bg-primary`;

  // State vars
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={navMainClass}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive('');
            window.scrollTo(0, 0); // top of page
          }}
        >
          <img src={st3Logo} alt={st3Logo} className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer'>
            Sam Torres<span className='sm:block hidden'>| Senior SWE </span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
        <MobileNavbar
          active={active}
          toggle={toggle}
          setActive={setActive}
          setToggle={setToggle}
        />
      </div>
    </nav>
  );
};

export default Navbar;
