import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { slideIn } from '../utils/motion';
import LabeledInput from './LabeledInput';

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  // template_j0512dm
  // torressam333
  // NDYD3cmTe1sYgQdNe

  const [loading, setLoading] = useState(false);
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending email
    setLoading(true);

    try {
      emailjs.send(
        'torressam333', // service name
        'template_j0512dm', // template id
        {
          from_name: form.name,
          to_name: 'Sam Torres',
          from_email: form.email,
          to_email: 'phppro777@gmail.com',
          message: form.message,
        },
        'NDYD3cmTe1sYgQdNe' //public key
      );

      setLoading(false);
      alert('Thank you, I will responsd as soon as possible!');

      setForm({
        name: '',
        email: '',
        message: '',
      });
    } catch (error) {
      setLoading(false);
      alert('Something went wrong...please try again.');
      console.error('something went wrong', error);
    }
  };

  return (
    <div className='xl-mt:12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', '0.2', 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact Me.</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <LabeledInput
            inputType='text'
            inputName='name'
            id='name'
            labelClasses='flex flex-col'
            inputClasses='bg-tertiatry py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium'
            spanClasses='text-white font-medium mb-4'
            spanText='Your name'
            value={form.name}
            handleChange={handleChange}
            placeholder='How shall I address you?'
          />
          <LabeledInput
            inputType='email'
            inputName='email'
            id='email'
            labelClasses='flex flex-col'
            inputClasses='bg-tertiatry py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium'
            spanClasses='text-white font-medium mb-4'
            spanText='Your email'
            value={form.email}
            handleChange={handleChange}
            placeholder='Enter your email'
          />
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>
              What&apos;s on your mind?
            </span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder='Your message matters to me...'
              className='bg-tertiatry py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-non font-medium'
            />
          </label>
          <button
            type='submit'
            className='bg-white py-3 px-10 outline-none w-fit text-tertiary font-bold shadow-md shadow-primary rouded-xl text-md'
          >
            {loading ? 'Sending your message...' : 'Send it!'}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn('right', 'tween', '0.2', 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
