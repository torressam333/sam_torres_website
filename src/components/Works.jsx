import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { textVariant, fadeIn } from '../utils/motion';
import { useState } from 'react';

const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  icon,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  // Extract the first 200 characters of the description
  const shortDescription = description.slice(0, 200);

  return (
    <motion.div variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
      <Tilt
        options={
          !expanded
            ? { max: 45, scale: 1, speed: 450 }
            : { max: 0, scale: 0, speed: 0 }
        }
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[250px]'>
          <img
            src={image}
            alt={name}
            className='w-full h-full object-cover rounded-2xl'
          />
          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(source_code_link, '_blank')}
              className='black-gradient w-12 h-12 rounded-full flex justify-center items-center cursor-pointer'
            >
              <img
                src={icon}
                alt={icon}
                className='w-9 h-9 object-contain rounded-full'
              />
            </div>
          </div>
        </div>
        <div className='mt-5'>
          <button onClick={handleClick}>
            {expanded ? 'Collapse' : 'Expand'}
          </button>
          <h3 className='text-white font-bold text-[26px]'>{name}</h3>
          {expanded ? (
            <p className='mt-2 text-secondary text-[16px]'>{description}</p>
          ) : (
            <p className='mt-2 text-secondary text-[16px]'>
              {shortDescription}
              {description.length > 200 && !expanded && '...'}
            </p>
          )}
        </div>
        <div className='mt-4 flex flex-wrap gap-3'>
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => (
  <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Some of my projects...</p>
      <h2 className={styles.sectionHeadText}>Personal and Professional.</h2>
    </motion.div>

    <div className='w-full flex'>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        I have created and worked on a variety of software engineering projects,
        making major contributions to each. This is non-exhaustive list of
        projects I have worked on or created but these projects reflect my
        ability to work across the full stack, help build national and
        international web applications and also demonstrate genuine passion and
        commitment to continuous learning in the software engineering field.
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
