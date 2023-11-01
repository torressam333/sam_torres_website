import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../utils/motion';

/**
 *
 * @param {} Component
 * @param {*} idName
 * @returns
 *
 * Used to wrap entire app and reusable to scroll
 * to desired sections of the page as a Higher Order Comp
 */
const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      // Render component passed to it (About, Hero etc...)
      <motion.section
        variants={staggerContainer()}
        initial='hidden'
        whileInView='show'
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-10`}
      >
        <span className='hash-span' id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default SectionWrapper;
