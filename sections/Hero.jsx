'use client';

import { motion } from 'framer-motion';

import styles from '../styles';
import { staggerContainer, textVariant } from '../utils/motion';

const Hero = () => (
  <section className={`${styles.yPaddings}`}>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <div className="flex justify-center items-center flex-col relative z-10">
        <motion.h1 variants={textVariant(0.3)} className={styles.heroHeading}>
          HAPPY
        </motion.h1>
        <motion.div
          variants={textVariant(0.5)}
          className="flex flex-row justify-center items-center"
        >
          <h1 className={styles.heroHeading}>BIRTHDAY!</h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
