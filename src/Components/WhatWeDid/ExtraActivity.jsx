import React from 'react';
import { motion } from 'framer-motion';
import { IoMdArrowRoundBack } from 'react-icons/io';
import LazyLoad from 'react-lazyload';
import pic1 from '../../assets/RnR/pic1.png';
import pic2 from '../../assets/RnR/pic2.png';
import pic3 from '../../assets/RnR/pic3.png';
import pic4 from '../../assets/RnR/pic4.png';
import pic5 from '../../assets/RnR/pic5.png';

import img1 from '../../assets/Onam/pic1.png';
import img2 from '../../assets/Onam/pic2.png';
import img3 from '../../assets/Onam/pic3.png';
import img4 from '../../assets/Onam/pic4.png';
import img5 from '../../assets/Onam/pic5.png';

const ExtraActivity = ({ setCategory }) => {
  return (
    <motion.div
      key='extraactivity'
      initial={{ opacity: 0, y: 120 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, y: 120 }}
      className=' min-h-[100vh] '
    >
      <div
        className='absolute top-5 left-5  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl '
        onClick={() => setCategory('')}
      >
        <IoMdArrowRoundBack />
      </div>
      {/* RnR */}
      <div className='text-center text-6xl font-bold text-white mt-8'>
        Rewards & Recognition
      </div>

      {/* activity data */}
      <div className='w-[900px] mx-auto text-left text-lg font-normal  text-white mt-12'>
        In our recent Rewards and Recognition event, our team created a video
        with the theme of "The Office," with contributions from every team
        member. We also showcased an entry sequence for the team introduction.
        Meeti Shah, Hrishikesh Yadav, Kunal Jaiswal, and Ameya Deodhar were
        honored with the Star Performers Award for their outstanding performance
        and significant contributions to the team. Soumya Sinha, Sahil Dhole,
        Nikhil Jaiswal, Riya Gujarathi, Sanika Mhasvekar, and Ishita Singh
        received the Spotlight Award for their dedication and efforts in
        ensuring the team's success. Additionally, Aditi Bukkawar, Riya
        Kesariya, and Ishita Singh participated in the final showdown dance,
        dedicating their time to rehearsals and delivering a fantastic
        performance.
      </div>

      {/* Gallery Section */}
      <div className='w-[1200px] mx-auto grid grid-cols-5 grid-rows-2 mt-16 gap-2'>
        <div
          style={{ willChange: 'opacity, transform' }}
          className='row-start-1 row-span-2 col-span-1 h-[600px] rounded-xl'
        >
          <img src={pic1} className='object-contain rounded-xl' alt='' />
        </div>
        <div
          style={{ willChange: 'opacity, transform' }}
          className='col-start-2 col-span-2 rounded-lg'
        >
          <img src={pic2} alt='' className='object-cover rounded-xl' />
        </div>
        <div
          style={{ willChange: 'opacity, transform' }}
          className='row-start-1 col-start-4 col-span-2 rounded-xl '
        >
          <img src={pic3} alt='' className='object-cover rounded-xl' />
        </div>
        <div
          style={{ willChange: 'opacity, transform' }}
          className='row-start-2 col-start-2 col-span-1 rounded-xl'
        >
          <img src={pic4} alt='' className='object-cover rounded-xl' />
        </div>
        <div
          style={{ willChange: 'opacity, transform' }}
          className='col-start-3 col-span-3 rounded-lg'
        >
          <img src={pic5} alt='' className='object-cover rounded-xl' />
        </div>
      </div>

      {/* Onam */}
      <div className='w-[1200px] h-auto mx-auto flex  gap-12 text-white mt-10 mb-6'>
        {/* title and description */}
        <div className='flex flex-col gap-6  items-center w-1/2 text-6xl pt-10'>
          <div className=''>Onam Celebration</div>
          <div className=' text-lg font-normal'>
            The Onam event was a vibrant celebration held on 12th September 2024
            in Building 22. It featured a variety of performances that brought
            together tradition and modernity, creating an engaging and joyful
            experience for all attendees.
            <p className='mt-6 text-2xl'>
              Event Highlights:{' '}
              <p className='mt-1 text-lg'>
                King Maveli&apos;s Ramp Walk: Alwis Shaji delivered a standout
                performance as King Maveli in a grand reenactment of the
                legendary king's visit. Group Western Dance: Ameya Deodhar,
                Aditi Bukkawar, and Yashi Pandey showcased a lively and
                energetic group performance in modern dance styles.
              </p>
            </p>
          </div>
        </div>

        {/* photo gallery */}
        <div className='grid grid-cols-2 gap-2 grid-rows-5 w-1/2'>
          <div
            style={{ willChange: 'opacity, transform' }}
            className='row-start-1 row-span-2 col-span-1 rounded-xl   '
          >
            <img src={img1} alt='' className='rounded-xl' />
          </div>
          <div
            style={{ willChange: 'opacity, transform' }}
            className='col-start-2 row-span-3 rounded-xl'
          >
            <img src={img2} alt='' className='rounded-xl' />
          </div>
          <div
            style={{ willChange: 'opacity, transform' }}
            className='row-start-3 h-auto w-auto row-span-2 rounded-xl '
          >
            <img
              src={img3}
              alt=''
              className='rounded-xl rounded-b-3xl object-cover '
            />
          </div>
          <div
            style={{ willChange: 'opacity, transform' }}
            className='col-start-2 row-start-4 col-span-1 rounded-xl'
          >
            <img src={img4} alt='' className='rounded-xl' />
          </div>
          <div
            style={{ willChange: 'opacity, transform' }}
            className='row-start-5 col-start-1 col-span-2 rounded-xl'
          >
            <img src={img5} alt='' className='rounded-xl' />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExtraActivity;
