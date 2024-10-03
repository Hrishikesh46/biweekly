import React from 'react';

import { RxCross2 } from 'react-icons/rx';
import LazyLoad from 'react-lazyload';
import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);
const optionsBar = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      labels: {
        color: 'White', // Change the font color of the legend labels
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    x: {
      grid:{
        display:false
      },
      ticks: {
        color: 'White', // Change the font color of the x-axis labels
        font: {
          size: 14,
        },
        
      },
    },
    y: {
      grid:{
        display:false
      },
      ticks: {
        color: 'White', // Change the font color of the y-axis labels
        font: {
          size: 14,
        },
      },
    },
  },
};

const MemberDetail = ({ user, setUser }) => {
  return (
    <motion.div
      initial={{ y: 180, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className=' w-[1000px] mx-auto h-screen  overflow-hidden flex flex-col justify-center items-center  '
    >
      {/* profile and name */}
      <motion.div className='flex flex-col gap-4 rounded-3xl bg-[#2a2626] pt-8  h-[600px] '>
        {/* backbutton */}
        <motion.div
          className='absolute h-[60px] w-[60px] self-end mr-4 mt-[-4px] hover:scale-125 duration-200 flex justify-center items-center rounded-xl '
          onClick={() => setUser('')}
        >
          <RxCross2 className='w-8 h-8' />
        </motion.div>
        <div className=' flex w-[800px] h-[272px]  justify-evenly items-center '>
          {/* profile */}
          <LazyLoad>
            <img
              src={user.profileImg}
              alt=''
              className='w-[272px] h-[272px] rounded-full object-contain bg-gray-600'
            />
          </LazyLoad>

          {/* name and score section */}
          <div className=''>
            {/* name */}
            <div className='text-5xl mb-8'>{user.nickname}</div>

            {/* score */}
            <div className='flex gap-4 text-xl'>
              {/* prev score */}
              <div className='flex flex-col justify-center items-center'>
                <div className=''>Previous Score</div>
                <div className='text-3xl'>{user.prevScore}</div>
              </div>

              {/* current score */}
              <div className='flex flex-col justify-center items-center '>
                <div className=''>Current Score</div>
                <div className='text-3xl'>{user.currScore}</div>
              </div>
            </div>
          </div>
        </div>
        {/* courses and chart */}
        <div className='w-[800px] flex justify-evenly   '>
          {/* courses section */}
          <div className='flex flex-col w-[312px]  '>
            <div className='text-3xl mb-3 '>Courses</div>
            <ul className='text-xl gap-3 '>
              {user.courses.map((course) => {
                return <li>- {course}</li>;
              })}
            </ul>
          </div>

          {/* Graph */}
          <motion.div className='w-[400px] h-[400px]  rounded-lg pt-1 '>
            <Bar
              options={optionsBar}
              data={{
                labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

                datasets: [
                  {
                    label: 'Curr Severity Count',
                    data: user.CurrSeverity,
                    backgroundColor: [
                      'rgba(255, 99, 132, 1)',
                      'rgba(255, 159, 64, 1)',
                      'rgba(255, 205, 86, 1)',
                      'rgba(75, 192, 192, 1)',
                      'rgba(54, 162, 235, 1)',
                    ],
                    borderRadius: 5,
                    borderColor: 'none',
                  },
                ],
              }}
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberDetail;
