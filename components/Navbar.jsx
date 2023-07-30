"use client";

import styles from "../styles";
import { useState } from "react";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";
import { ClickOutside } from "./ClickOutside";
import useWindowDimensions from "@/hooks/useWindowDimensionss";
import Link from "next/link";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { width } = useWindowDimensions()

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      className={`${styles.xPaddings} py-8 relative`}
    >
      <div className="absolute w-[50%] inset-0 gradient-01" />
      <div
        className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}
      >
        <img
          src="/search.svg"
          alt="search"
          className="w-[24px] h-[24px] object-contain"
        />
        <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
          METAVERSUS
        </h2>
        <div onClick={() => setNav(prev => !prev)}className="block text-white cursor-pointer relative">
          {nav ? (
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" /> ) : (
            <img src="/menu.svg" alt="menu" className="w-[24px] h-[24px] object-contain cursor-pointer" />
          )}
        <ClickOutside onclickoutside={() => setNav(false)} className={` text-black`} >
        {nav && <>
              <div className="flex flex-col items-start justify-start list-none top-10 opacity-100 absolute r-2 right-5 md-right20 bg-white dark:bg-gradient-to-t transition-all dark:from-[#ffffff] dark:vai-[#292929] shadow-3xl rounded-md w-[150px] z-20">
              <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
                <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
                 <Link href="/login">Login</Link>
              </span>
              <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
                <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
                <span>Press Me</span>
              </span>
              <span className="cursor-pointer flex items-center gap-2 p-2 text-sm">
                 <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.731 14.908a6.667 6.667 0 110-13.334 6.667 6.667 0 010 13.334zm-3.325-2.496a5.311 5.311 0 003.325 1.162 5.313 5.313 0 003.445-1.261 4.653 4.653 0 00-3.338-1.405 4.653 4.653 0 00-3.432 1.504zm-.93-.958a5.983 5.983 0 014.362-1.88 5.982 5.982 0 014.241 1.756 5.333 5.333 0 10-8.604.125zM8.73 8.908a2.667 2.667 0 110-5.334 2.667 2.667 0 010 5.334zm0-1.334a1.333 1.333 0 100-2.666 1.333 1.333 0 000 2.666z" fill=" #000"></path></svg>
                <span>Press Me</span>
              </span>
        </div>
        </>}
        </ClickOutside>
        </div>

      </div>
    </motion.nav>
  );
};

export default Navbar;
