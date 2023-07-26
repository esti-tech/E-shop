import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { navItems } from '../../static/data';
import styles from '../../styles/styles';
import { languages } from '../../static/data';

const Navbar = ({ active }) => {
  const [language, setLanguage] = useState('English');
  return (
    <div className={`block 800px:${styles.noramlFlex}`}>
      <div className="flex">
        <Link
          to="/"
          className={`${
            active === 1 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          Home
        </Link>

        <Link
          to="/best-selling"
          className={`${
            active === 2 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          Best Selling
        </Link>
        <Link
          to="/products"
          className={`${
            active === 3 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          Products
        </Link>

        <Link
          to="/events"
          className={`${
            active === 4 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          Events
        </Link>

        <Link
          to="/faq"
          className={`${
            active === 5 ? 'text-[#17dd1f]' : 'text-black 800px:text-[#fff]'
          } pb-[30px] 800px:pb-0 font-[500] px-6 cursor-pointer}`}
        >
          FAQ
        </Link>

        <select
          name=""
          id=""
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="border h-[30px] rounded-[5px]"
        >
          {languages &&
            languages.map((i, index) => (
              <option className="block pb-2" key={index} value={i.name}>
                {i.name}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Navbar;
