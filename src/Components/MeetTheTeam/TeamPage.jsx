import React, { useState } from 'react';
import userProfile from '../../assets/myImage.png';
import { motion } from 'framer-motion';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels'

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

import { IoMdArrowRoundBack } from 'react-icons/io';
import MemberDetail from './MemberDetail';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const drawCenterTextPlugin = {   
  id: 'drawCenterTextPlugin',   
  beforeDraw: function (chart) {     
    const ctx = chart.ctx;     
    const width = chart.width;     
    const height = chart.height;     
    const centerX = width / 2;     
    const centerY = height / 2;     // Calculate total
const total = chart.config.data.datasets[0].data.reduce((sum, value) => sum + value, 0);     
ctx.save();     
ctx.font = 'bold 30px Arial';     
ctx.textAlign = 'center'; 
ctx.textBaseline = 'middle'; 
ctx.fillStyle = '#fff'; 
ctx.fillText(total, centerX, centerY); 
ctx.restore(); 
} };

//to change font size of labels
const options = {
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
    tooltip:{
      enabled:true,
    },
   
    datalabels:{
      color: '#000',
      font: {
        size: 16
      } ,
      formatter:(value) =>value
    },
  },
  
  scales: {
    x: {
      display: false,
      ticks: {
        color: 'White', // Change the font color of the x-axis labels
        font: {
          size: 14,
        },
      },
    },
    y: {
      display: false,
      ticks: {
        color: 'White', // Change the font color of the y-axis labels
        font: {
          size: 14,
        },
      },
    },
  },
  animation: {
    animateScale: true, // Scales the chart during entry
    animateRotate: true, // Rotates the chart during entry
  },
  transitions: {
    active: {
      animation: {
        duration: 1000, // Animation duration when switching to a new dataset
      },
    },
    hide: {
      animation: {
        duration: 1000, // Exit animation duration when hiding chart
        easing: 'easeInBounce', // Custom easing for exit
      },
    },
  },
};

const TeamPage = ({ category, setCategory }) => {
  let color;
  const [userDetail, setUserDetail] = useState('');

  const handleUserDetail = (member) => {
    console.log(member);
    setUserDetail(member);
  };
  console.log(userDetail);
  // console.log(category);
  return (
    <>
      {/* <div className='absolute inset-0 bg-black opacity-30 '></div> */}
      <motion.div
        initial={{
          y: 120,
          opacity: 1,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{ y: 120, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className='w-[1100px] mx-auto   h-[100vh] text-white   bg-cover z-100  '
      >
        {/* Team name and Data graph */}
        {userDetail === '' && (
          <>
            <div className='flex pl-24 pr-24  gap-36 justify-center items-center w-full  pt-8 relative'>
              <div className='flex flex-col gap-2 text-7xl font-bold  '>
                <div className=''>JioMeet</div>
                <div className=''>{category[0]?.client}</div>
                <div className="text-xl pt-3">Total Issues Raised : {category[0]?.issuesRaised}</div>
              </div>
              <motion.div className='w-[350px]   h-[350px]  rounded-lg  '>
                <Doughnut
                plugins={[drawCenterTextPlugin]}
                  options={options}
                  data={{
                    labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

                    datasets: [
                      {
                        label: 'Current Severity Count',
                        data: category[0]?.currConsolidatedCount,
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

              {/* backbutton */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className='absolute top-6 left-2 border p-2 rounded-xl '
                onClick={() => setCategory('')}
              >
                <IoMdArrowRoundBack className='w-8 h-8' />
              </motion.div>
            </div>

            {/* Team Member Data */}
            <motion.div className='text-center pt-6 pr-8 font-bold text-4xl mb-3 relative'>
              Team Members
            </motion.div>

            <motion.div
              initial={{
                y: 180,
                opacity: 1,
              }}
              animate={{
                y: 0,
                opacity: 1,
              }}
              exit={{ y: 180, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className='px-24 pb-24 pt-12 w-full grid grid-cols-3 gap-8'
            >
              {category[0].clientMembers.map((member) => {
                if (member.rank === 1) {
                  color = '#C29101'; // Gold
                } else if (member.rank === 2) {
                  color = '#ababb0'; // Silver
                } else if (member.rank === 3) {
                  color = '#B87333'; // Bronze
                } else {
                  color = '#fff'; // Default color (light blue)
                }
                return (
                  <motion.div
                    key={member.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className='h-[260px]  w-[270px] bg-gray-500 bg-opacity-50 rounded-lg'
                    onClick={() => handleUserDetail(member)}
                  >
                    <div
                      className='flex flex-col  '
                      style={{ willChange: 'opacity, transform' }}
                    >
                      {/* profile image */}
                      <img
                        src={member.profileImg}
                        alt=''
                        className={`w-32 h-32 p-1 mx-auto mt-4 object-contain border-[${color}] border-[3px] 
                           rounded-full `}
                           style={{borderColor: color}}
                      />

                      {/* name */}
                      <div
                        className={`text-center text-2xl p-2 font-semibold `} style={{color: color}}
                      >
                        {member.name}
                      </div>

                      {/* score */}
                      <div className='mx-auto flex gap-10 text-xl pb-4'>
                        <div className={`pt-1 font-semibold `} style={{color:color}} >
                          Prev Score{' '}
                          <div
                            className={`text-center font-semibold   `} style={{color:color}}
                          >
                            {member.prevScore}
                          </div>
                        </div>
                        <div className={`pt-1 font-semibold  `}style={{color:color}}>
                          Curr Score{' '}
                          <div
                            className={`text-center font-semibold `}style={{color:color}}
                          >
                            {member.currScore}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </>
        )}

        {userDetail && (
          <MemberDetail user={userDetail} setUser={setUserDetail} />
        )}
      </motion.div>
    </>
  );
};

export default TeamPage;
