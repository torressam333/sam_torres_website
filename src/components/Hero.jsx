import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import saaBadge from '../assets/saa-c03.png';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-8xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#2261e0]' />
          <div className='w-1 sm:h-80 h-40 blue-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Welcome! <span className='text-[#3e7eff]'>Have a look around</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Software engineer and AWS Solutions Architect with 5 years of
            experience in web, cloud, and AWS. I love all things{' '}
            <span className='text-[#f7df1e]'>JavaScript</span>
            . I enjoy working with APIs in any form and learning about event
            driven architectures in AWS.
            <img className='w-[5em]' src={saaBadge} alt='saa badge' />
          </p>
        </div>
      </div>
      <ComputersCanvas />
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[2.5em] h-[5em] rounded-3xl border-4 border-secondary flex justify-center items-start b-2'>
            <motion.div
              animate={{ y: [5, 45, 5] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className='w-4 h-4 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
