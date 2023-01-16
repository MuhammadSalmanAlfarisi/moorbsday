"use client";

import { motion } from "framer-motion";
import { socials } from "../constants";
import { footerVariants } from "../utils/motion";

import styles from "../styles";

const Footer = () => (
  <motion.footer
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="footer-gradient" />
    <div className={`${styles.innerWidth} mx-auto flex flex-col gap-8`}>
      <div className="flex items-center justify-between flex-wrap gap-5">
        <h4 className=" font-bold md:text-[64px] text-[40px] text-rose-400 hover:text-rose-500">
          Oh, Almost Forgot
        </h4>
        <a target="_blank" rel="noreferrer" href="https://my.spline.design/untitled-49b5b3f9935094e7715d8bf194be7662/">
          <button
            type="button"
            className="hover:border-t-2 hover:border-b-2 hover:border-l-2 hover:border-r-2 hover:border-rose-400 active:border-t-2 active:border-b-2 active:border-l-2 active:border-r-2 active:border-rose-500 hover:cursor-none flex items-center h-fit py-4 px-6 bg-transparent rounded-[32px] gap-[12px] hover:bg-rose-300 active:bg-rose-300"
          >
            <img
              src="/cake.png"
              alt="cake"
              className="w-[24px] h-[24px] object-contain"
            />
            <span className="font-normal text-[16px] text-rose-400">Here!</span>
          </button>
        </a>
      </div>

      <div className="flex flex-col">
        <div className="mb-[50px] h-[3px] bg-rose-200 w-5/6 opacity-10" />

        <div className="flex items-center justify-between flex-wrap gap-4">
          <h4 className="font-extrabold text-[24px] text-black opacity-50  drop-shadow-md">
            MOON
          </h4>
          <p className=" font-semibold text-[14px] text-black opacity-50 drop-shadow-md">
            Copyright © 2023 Muhammad Salman Alfarisi. All rights reserved.
          </p>

          <div className="flex gap-4 opacity-50">
            {socials.map((social) => (
              <a href={social.link} className="hover:scale-125">
                <img
                  key={social.name}
                  src={social.url}
                  alt={social.name}
                  className="cursor-none w-[24px] h-[24px] object-contain drop-shadow-md"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </motion.footer>
);

export default Footer;
