import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Some of my work...</p>
      <h2 className={styles.sectionHeadText}>Personal and Professional.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have created and worked on a variety of software engineering projects,
        making major contributions to each. These projects reflect my ability to
        work across the full stack, help build national and international web
        applications and also demonstrate genuine passion and commitment to
        continuous learning in the software engineering field.
      </motion.p>
    </div>
    <div className='mt-20 flex flex-wrap gap-7'>
      {projects.map((project, index) => (
        <ProjectCard key={`project-${index}`} {...project} index={index} />
      ))}
    </div>
  </>
);

export default SectionWrapper(Works, '');
