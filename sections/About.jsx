"use client";

import { motion } from "framer-motion";

import styles from "../styles";
import { fadeIn, staggerContainer } from "../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      {/* <span className="font-extrabold text-rose-400 hover:text-rose-500">
        {" "}
        21st January{" "}
      </span>{" "} */}
      <motion.p
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="text-about mt-[8px] font-bold sm:text-[32px] text-[20px] text-center text-white drop-shadow shadow-rose-500 "
      >
        <span className="font-extrabold text-rose-400 hover:text-rose-500">
          MARVEL!{" "}
        </span>
        happy birthday!! rant dikit but I made this website in 1 day so it might
        not look that great. I wrote like a whole page of letter on it but then
        found it rather cringey, so I'll make it short.
      </motion.p>

      <br />

      <motion.p
        variants={fadeIn("up", "tween", 0.5, 1)}
        className="text-about mt-[8px] font-bold sm:text-[32px] text-[20px] text-center text-white drop-shadow shadow-rose-500 "
      >
        I wish you the{" "}
        <span className="font-extrabold text-rose-400 hover:text-rose-500">
          greatest bday{" "}
        </span>
        of all time, the coolest gifts, and the warmest hugs. Don't do anything
        you wouldn't want me to do. You are the person I look up to the most and
        I hope you know that, my model, my singer, my teacher, my
        student, my friend. 
      </motion.p>

      <br />

      <motion.p
        variants={fadeIn("up", "tween", 0.7, 1)}
        className="text-about mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-rose-400 hover:text-rose-500  drop-shadow ">
          With love, Salman
        </span>
      </motion.p>
    </motion.div>
  </section>
);

export default About;
