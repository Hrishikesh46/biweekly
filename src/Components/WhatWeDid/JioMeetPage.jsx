import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import eventsLogo from '../../assets/eventslogo.png';
import jiomeetLogo from '../../assets/jiomeetlogo.png';
import treeSvgJE from '../../assets/JMJE.svg';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { IoMdArrowRoundBack } from 'react-icons/io';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

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
  },
  scales: {
    x: {
      ticks: {
        color: 'White', // Change the font color of the x-axis labels
        font: {
          size: 14,
        },
      },
    },
    y: {
      ticks: {
        color: 'White', // Change the font color of the y-axis labels
        font: {
          size: 14,
        },
      },
    },
  },
};

const JioMeetPage = ({ setCategory }) => {
  return (
    <motion.div
      key='jiomeet'
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80, transition: 0.4 }}
      className='w-[1200px] mx-auto  h-screen overscroll-contain overflow-scroll relative '
    >
      {/* Back button */}
      <div
        className='absolute top-4 left-2  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl '
        onClick={() => setCategory('')}
      >
        <IoMdArrowRoundBack />
      </div>

      {/* title and graph */}
      <div className='w-auto h-auto flex justify-center items-center gap-28  '>
        {/* title */}

        <div className='flex flex-col text-white  gap-3 w-1/3 '>
          <div
            className='flex justify-start
           items-center gap-2 pt-6 '
          >
            {/* logo */}
            <img src={jiomeetLogo} alt='' className='h-14 w-14 self-end' />
            <p className='text-7xl'>JioMeet &</p>
          </div>
          <div className='flex gap-2 justify-start items-center '>
            {/* logo */}
            <img src={eventsLogo} alt='' className='h-14 w-14 self-end' />
            <p className='text-7xl '>JioEvents </p>
          </div>

          {/* description */}
          <p className=' text-xl pt-4'>
            JioMeet/JioEvents integrates HD video conferencing, content sharing, and chat
            collaboration, allowing users to schedule calls or host meetings
            from any device.
          </p>
        </div>

        {/* graph */}
        <motion.div className='w-[500px] h-[300px] pt-12  p-1  rounded-lg '>
          <Bar
            options={options}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],
              datasets: [
                {
                  label: false,
                  data: [2, 3, 5, 18, 2],
                  backgroundColor: [
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(255, 159, 64, 0.8)',
                    'rgba(255, 205, 86, 0.8)',
                    'rgba(75, 192, 192, 0.8)',
                    'rgba(54, 162, 235, 0.8)',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
          <div className='text-white text-xl text-center pt-2'>
            Total Issues Raised: 30
          </div>
        </motion.div>
      </div>

      {/* types of testing */}
      <div className='text-white text-center mt-8  text-5xl'>
        Tasks Performed
      </div>

      <div className='flex justify-center items-center mt-6'>
        <img src={treeSvgJE} alt='' />
      </div>

      <div className=' w-[1200px] grid grid-cols-4 mx-auto gap-8 mb-6 '>
        <div className='flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>
            Backward Compatibility Testing
          </div>

          {/* description */}
          <div className='text-[16px] leading-6'>
            Key testing strategies include Backward Compatibility Testing (BCT)
            checks if the current production version remains compatible with
            planned server changes before release.
          </div>
        </div>
        <div className='flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>
            Post-Deployment Testing (PDT)
          </div>

          {/* description */}
          <div className='text-[16px] leading-6'>
            PDT verifies major functionalities immediately after software
            deployment to ensure everything works correctly in production.
          </div>
        </div>
        <div className='flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>Post-Deployment Sanity</div>

          {/* description */}
          <div className='text-[16px] leading-6'>
            PDS checks new features in production, ensuring functionality works
            correctly and doesn’t disrupt existing features. Bugs are raised if
            issues arise.
          </div>
        </div>
        <div className='flex flex-col gap-8 bg-white h-auto  p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>Load Testing</div>

          {/* description */}
          <div className='text-[16px] leading-6'>
            To evaluates how JioMeet behaves under a specific, expected load.
            The main goal is to check if system can handle the anticipated
            amount of work and find potential points of failure
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JioMeetPage;
