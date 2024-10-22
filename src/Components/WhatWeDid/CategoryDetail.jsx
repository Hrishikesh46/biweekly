import React, { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import namoImg from '../../assets/namo.png';
import jiomeetImg from '../../assets/jiomeet.png';
import peopleFirstImg from '../../assets/peoplefirst.png';
import teamphoto from '../../assets/teamPhoto.jpg';
import activityImg from '../../assets/extraActivity.jfif';
import JioMeetPage from './JioMeetPage';
import Namo from './Namo';
import Peoplefirst from './Peoplefirst';
import ExtraActivity from './ExtraActivity';

const CategoryDetail = () => {
  const [category, setCategory] = useState('');
  const parentRef = useRef(null)
  console.log(category);
  return (
    <div id='taskPerformed' className='min-h-[100vh]   relative '>
      {/* Heading */}
      {/* Category section */}
      <AnimatePresence mode='wait'>
        {category === '' && (
          <>
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='text-6xl text-center text-white mb-10 lg:mb-16  '
            >
              Tasks Performed
            </motion.div>

            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className='w-full h-[50vh] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-10  mx-auto'
            >
              {/* individual category */}
              <motion.div
                whileHover={{ scaleY: 1.05, scaleX: 1.05 }}
                transition={{ type: 'tween' }}
                className='relative min-w-[250px] md:w-[250px] lg:w-[270px] mx-auto'
                onClick={() => setCategory('jiomeet')}
              >
                {/* jiomeet category */}
                <motion.img
                  src={jiomeetImg}
                  alt=''
                  className='w-full h-[75vh]  rounded-2xl'
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white  font-semibold opacity-0 text-4xl text-wrap rounded-xl cursor-pointer'
                >
                  <p className='pl-4'>JioMeet & JioEvents</p>
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'tween' }}
                className=' relative min-w-[250px] md:w-[250px] lg:w-[270px]  mx-auto'
                onClick={() => setCategory('namo')}
              >
                {/* namo category */}
                <img
                  src={namoImg}
                  alt=''
                  className='w-full h-[75vh]  rounded-2xl'
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white  font-semibold opacity-0 text-4xl text-wrap cursor-pointer rounded-2xl'
                >
                  NaMo
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'tween' }}
                className='relative min-w-[250px] md:w-[250px] lg:w-[270px]  mx-auto'
                onClick={() => setCategory('peoplefirst')}
              >
                {/* peoplefirst */}
                <img
                  src={peopleFirstImg}
                  alt=''
                  className='w-full h-[75vh]  rounded-2xl'
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white  font-semibold opacity-0 text-4xl text-wrap cursor-pointer rounded-2xl'
                >
                  PeopleFirst
                </motion.div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'tween' }}
                className='relative min-w-[250px] md:w-[250px]  lg:w-[270px]  mx-auto'
                onClick={() => setCategory('extraactivity')}
              >
                {/* extraactivity image */}
                <img
                  src={teamphoto}
                  alt=''
                  className='object-cover w-full h-[75vh]  rounded-2xl'
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className='absolute inset-0 flex justify-center items-center bg-black bg-opacity-80 text-white  font-semibold opacity-0 text-4xl text-wrap cursor-pointer rounded-2xl'
                >
                  Extra Activity
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {category === 'jiomeet' && <JioMeetPage setCategory={setCategory} />}

        {category === 'namo' && <Namo setCategory={setCategory} parentRef={parentRef} />}

        {category === 'peoplefirst' && (
          <Peoplefirst setCategory={setCategory} />
        )}

        {category === 'extraactivity' && (
          <ExtraActivity setCategory={setCategory} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDetail;
