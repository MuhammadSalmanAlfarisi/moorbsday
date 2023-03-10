"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { navVariants } from "../utils/motion";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className={`${styles.innerWidth} mx-auto flex justify-between gap-8`}>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-rose-400 hover:text-rose-500 hover:scale-110">
        for moorb
      </h2>
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-rose-400 hover:text-rose-500 hover:scale-110">
        from moon
      </h2>
    </div>
  </motion.nav>
);

export default Navbar;
