'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className="bg-white shadow-lg relative lg:flex flex-wrap lg:items-center lg:justify-between"
    >
      <div className="mx-0 my-auto md:flex flex-wrap items-center justify-between sm:w-full p-[1rem] md:h-[5rem]">
        {/* Nav header */}
        <div className="flex items-center justify-between p-[1rem] md:p-0 lg:p-0 md:w-[400px]">
          <img
            src="./vercel.svg"
            alt="logo"
            className="w-[3.5rem] h-[40px] object-contain cursor-pointer"
          />
          <button onClick={() => setOpenNav(!openNav)} type="button" className="bg-transparent border-transparent transition-transform hover:rotate-180 hover:scale-110 delay-500 ease-in-out duration-300 md:hidden lg:hidden">
            <img
              src="./list.png"
              alt="menu"
              className="w-[2rem] h-[2rem] object-contain cursor-pointer"
            />
          </button>
        </div>
        {/* <!-- links --> */}

        <div className={
          `lg:flex lg:flex-grow lg:items-center overflow-hidden 
          ${openNav ? 'block' : 'hidden'}`
        }
        >
          <ul className="md:flex justify-center items-center">
            <li>
              <Link className={`${styles.ulLinks}`} href="/">Weeding Cards</Link>
            </li>
            <li>
              <Link className={`${styles.ulLinks}`} href="/">Birthday carrds</Link>
            </li>
            <li>
              <Link className={`${styles.ulLinks}`} href="/">Feeling cards</Link>
            </li>
            <li>
              <Link className={`${styles.ulLinks}`} href="/">Anniversary cards</Link>
            </li>
          </ul>
        </div>

        {/* <!-- signup | login --> */}
        <ul className="md:flex hidden">
          <li>
            <Link className="mx-[0.5rem] text-gray-700 transition-all delay-300 duration-300 hover:text-blue-500" href="/">
              Signup
            </Link>
          </li>
          <span>|</span>
          <li>
            <Link className="mx-[0.5rem] text-gray-700 transition-all delay-300 duration-300 hover:text-blue-500" href="/">
              login
            </Link>
          </li>
        </ul>
      </div>

    </motion.nav>
  );
};

export default Navbar;
