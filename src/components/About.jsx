/* eslint-disable react/no-unknown-property */
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import saaBadge from '../assets/saaCo3.png';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 1)}
        className='w-full green-blue-gradient p-[2px] rounded-[24px] shadow-card'
      >
        <div
          options={{ max: 55, scale: 1, speed: 450 }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[310px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-18 h-[6em] object-contain' />
          <h3 className='text-white text-[20px] font-bold text-center'>
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()} className=''>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.2, 1)}
        className='mt-4 text-secondary text-[12px] max-w-5xl leading-[30px] '
      >
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          I am a Software engineer and AWS certified solutions architect with 5
          years of full stack software engineering experience. I have experience
          working with event driven architectures in AWS. I am skilled in
          JavaScript, TypeScript and have expertise in frameworks like React,
          Vue, and Express.js. I enjoy learning about all thinks JavaScript,
          Docker, and event driven/serverless architectures in AWS. I am a quick
          learner, empathetic servant leader, and I collaborate efficiently with
          clients to create production ready, scalable, and user-friendly
          solutions that solve real-world problems.
        </p>
        <img className='w-[4em]' src={saaBadge} alt='saa badge' />
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10 '>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

const wrappedAbout = SectionWrapper(About, 'about');

export default wrappedAbout;
