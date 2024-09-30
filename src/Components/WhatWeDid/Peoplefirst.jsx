import { motion } from 'framer-motion';
import { Bar } from 'react-chartjs-2';
import peopleFirstLogo from '../../assets/PeoplefirstLogo.png';

import treeSvg from '../../assets/treePeoplefirst.svg';

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

const Peoplefirst = ({ setCategory }) => {
  return (
    <motion.div
      key='peoplefirst'
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80 }}
      className='w-[1200px] mx-auto h-screen overflow-scroll mt-6 absolute overscroll-contain '
    >
      {/* Back button */}
      <div
        className='absolute top-1 left-6  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl '
        onClick={() => setCategory('')}
      >
        <IoMdArrowRoundBack />
      </div>

      {/* title and graph */}
      <div className='w-full h-auto flex justify-center items-center gap-28 pt-16 '>
        {/* title */}

        <div className='flex flex-col text-white  gap-3 w-1/3 '>
          <div
            className='flex justify-start
       items-center gap-3  '
          >
            {/* logo */}
            <img src={peopleFirstLogo} alt='' className='h-16 w-16 self-end' />
            <p className='text-7xl'>PeopleFirst</p>
          </div>
          {/* <div className='flex gap-2 justify-start items-center '>
            logo
            <img src={eventsLogo} alt='' className='h-14 w-14 self-end' />
            <p className='text-7xl '>JioEvents </p>
          </div> */}

          {/* description */}
          <p className=' text-xl pt-3'>
           It is an internal portal designed specifically for Reliance users, providing a comprehensive platform to manage HR-related activities such as attendance, payroll, leaves, and other employee self-service functions.
          </p>
        </div>

        {/* graph */}
        <motion.div
          
          className='w-[500px] h-[250px]  rounded-lg mt-4'
        >
          <Bar
            options={options}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],
              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [4, 56, 117, 95, 12],
                  backgroundColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          />
        </motion.div>
      </div>

      {/* tasks performed */}
      <div className='text-white text-center mt-8 text-5xl mb-2'>
        Tasks Performed
      </div>

      <div className='flex justify-center '>
        <img src={treeSvg} alt='' className='' />
      </div>

      <div className=' w-[1200px] flex justify-center items-center mx-auto gap-8 '>
        <div className='flex flex-col w-[400px] h-[200px] gap-3 bg-white   p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>
            Sanity & Retesting
          </div>

          {/* description */}
          <div className='text-[16px] leading-6'>
          We conducted User Acceptance Testing to ensure the app's functionality aligns with user requirements and expectations. Additionally, we retested raised issues to confirm that features were stable after minor changes or bug fixes.
          </div>
        </div>
        <div className='flex flex-col w-[400px] h-[200px] gap-3 bg-white   p-4 rounded-xl'>
          {/* title */}
          <div className='text-2xl font-bold'>
            Travel & Guest House
          </div>

          {/* description */}
          <div className='text-[16px] leading-6'>
          As part of the testing process, we also evaluated a new feature called "Travel and Guest House," aimed at simplifying the process for booking travel and accommodation for employees.
 
          </div>
        </div>

        {/* <div className=''>1</div>
    <div className=''>1</div>
    <div className=''>1</div> */}
      </div>
    </motion.div>
  );
};

export default Peoplefirst;
