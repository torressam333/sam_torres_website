/* eslint-disable react/prop-types */
import { menu, close } from '../assets';
import { navLinks } from '../constants/index';

const MobileNavbar = ({ active, toggle, setActive, setToggle }) => {
  return (
    <div className='sm:hidden flex flex-1 justify-end items-center'>
      <img
        src={toggle ? close : menu}
        alt='menu'
        className='w-[28px] h-[28px] object-contain cursor-pointer'
        onClick={() => setToggle(!toggle)}
      />
      <div
        className={`${
          !toggle ? 'hidden' : 'flex'
        } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w[140px] z-10 rounded-xl`}
      >
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
      </div>
    </div>
  );
};

export default MobileNavbar;
