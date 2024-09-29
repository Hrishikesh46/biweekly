import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowRight } from 'react-icons/fa6';

const BiWeeklyTimeline = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}
      className='w-[200px] p-6  border flex mt-16 mb-12 rounded-xl cursor-pointer'
    >
      <Link
        to='target-section'
        smooth={true}
        duration={500} // Animation duration in milliseconds
        offset={-50} // Optional: Adjust the scroll position
        className='flex justify-center  gap-5 items-center '
      >
        <div className='pl-2  text-white pb-2  '>Start</div>
        <motion.div className='w-4 h-4 font-normal text-white pb-9'>
          <FaArrowRight />
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default BiWeeklyTimeline;
