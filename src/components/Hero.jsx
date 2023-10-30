import { styles } from '../styles';
import { ComputersCanvas } from './canvas';

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
            Software engineer with 5 years of experience in web, cloud, and AWS.
            I love all things <span className='text-[#f7df1e]'>JavaScript</span>
            . I enjoy working with API's in any form and learning about event
            driven architectures in AWS.
          </p>
        </div>
      </div>
      <ComputersCanvas />
    </section>
  );
};

export default Hero;
