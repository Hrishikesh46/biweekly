import pmImg from '../../assets/pmmodi.png';

import foundersday from '../../assets/foundersday.jpg';
import bday from '../../assets/bdayModule.png';
import sweep from '../../assets/sweep.png'

import jandhanlogo from '../../assets/jandhanlogo.png';

import tickIcon from '../../assets/AccomplishmentIcon.png';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { motion } from 'framer-motion';
import { Bar, Doughnut } from 'react-chartjs-2';
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
const optionsDoughnut = {
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
        size: 12
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
    datalabels:{
      color: '#fff',
      align:'top',
      anchor:'end',
      font: {
        size: 12
      } ,
      formatter:(value) =>value
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
const Namo = ({ setCategory, parentRef }) => {

  return (
    <motion.div
      key='namo'
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80 }}
      className='w-[1200px] h-auto   mx-auto flex flex-col  top-0 left-auto bottom-0  gap-8   '
    >
      {/* Back button */}
      <div
        on
        className='absolute top-5 left-5  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl '
        onClick={() => setCategory('')}
      >
        <IoMdArrowRoundBack />
      </div>
      <div className=' flex justify-evenly items-center  text-white pt-10 '>
        {/* Pie chart */}
        <motion.div className='w-[300px]   h-[300px]  rounded-lg  '>
          <Doughnut
            options={optionsDoughnut} plugins={[drawCenterTextPlugin]}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [21, 82, 166, 120, 6],
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
          <div className="text-white text-xl text-center pt-2">Total Issues Raised - 395</div>

        </motion.div>

        {/* logo, title and description */}
        <div className='flex flex-col gap-2 w-[400px]'>
          {/* logo & title */}
          <div className='flex gap-4 justify-center items-center'>
            {/* logo */}
            <img src={pmImg} className='w-24 h-24 rounded-lg' alt='' />

            {/* Name */}
            <div className='flex flex-col gap-1 text-6xl'>
              <div className=''>Narendra </div>
              <div className=''>Modi App</div>
            </div>
          </div>

          {/* description */}
          <div className='text-lg  font-normal'>
            A User-Friendly, official application for our Prime Minister
            Narendra Modi. Users can engage with his activities, speeches, and
            government initiatives.
          </div>
        </div>
      </div>

      {/* Jan dhan data */}
      <div className='flex justify-between items-center  text-white gap-8  w-[1000px] mx-auto mt-8'>
        {/* title, logo  */}
        <div className='flex flex-col items-center justify-center gap-3 w-[500px] '>
          <div className='flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-l-full '>
            <img
              src={jandhanlogo}
              alt=''
              className='w-20 h-20 bg-white rounded-xl '
            />
            <div className='flex flex-col gap-1  '>
              {/* title */}
              <div className=''>Jan Dhan Yojana</div>

              {/* description */}
              <div className='text-sm font-normal'>
                known as the "Jan Dhan 10/10 Challenge," invites participants to
                answer 10 simple questions about the scheme. It is based on the
                flagship initiative launched by the government in 2014.
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-l-full  '>
            <img src={tickIcon} alt='' className='h-24 w-24' />
            <div
              className='flex flex-col gap-1
              '
            >
              <div className=''>Accomplishments</div>
              <div className='text-sm font-normal'>
              We raised 29 issues in this module to make sure that there
                were no Blocker, Critical or Major issues that would hamper the release. 
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <motion.div className='w-[600px] h-[300px]  rounded-lg pt-5 '>
          <Bar
            options={optionsBar}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

              datasets: [
                {
                  data: [4, 5, 13, 7, 0],
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
          <div className="text-white text-xl text-center pt-2">Total Issues Raised - 29</div>

        </motion.div>
      </div>

      {/* Birthday Module  */}
      <div className='flex justify-between items-center  text-white gap-12  w-[1000px] mx-auto pt-5'>
        {/* chart */}
        <motion.div className='w-[600px] h-[300px]  rounded-lg pt-10 '>
          <Bar
            options={optionsBar}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [14, 67, 122, 87, 6],
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
          <div className="text-white text-xl text-center pt-2">Total Issues Raised - 296</div>

        </motion.div>
        {/* title, logo  */}
        <div className='flex flex-col items-center justify-center gap-3 w-[500px] '>
          <div className='flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-r-full '>
            <img
              src={bday}
              alt=''
              className='w-20 h-20 bg-white rounded-xl object-contain '
            />
            <div className='flex flex-col gap-1  '>
              {/* title */}
              <div className=''>Birthday Module</div>

              {/* description */}
              <div className='text-sm font-normal'>
                Birthday Engagement feature in the NaMo App is a unique way for
                users to extend their birthday wishes to Prime Minister Narendra
                Modi.
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-r-full  '>
            <img src={tickIcon} alt='' className='h-24 w-24' />
            <div
              className='flex flex-col gap-1
              '
            >
              <div className=''>Accomplishments</div>
              <div className='text-sm font-normal'>
              We raised 301 issues in this module to make sure that there
                were no Blocker, Critical or Major issues that would hamper the release. 
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Founder's Day Quiz */}
      <div className='flex justify-between items-center  text-white gap-8  w-[1000px] mx-auto mt-8 '>
        {/* title, logo  */}
        <div className='flex flex-col items-center justify-center gap-3 w-[500px] '>
          <div className='flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-l-full '>
            <img
              src={foundersday}
              alt=''
              className='w-20 h-20 bg-white rounded-xl object-contain '
            />
            <div className='flex flex-col gap-2  '>
              {/* title */}
              <div className=''>Founder's Day Quiz</div>

              {/* description */}
              <div className='text-sm font-normal'>
                This module was created to honour Pandit DeanDayal Upadhyaya the
                forerunner of Bharatiya Janata Party on the occasion of his
                Birthday.
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-l-full  '>
            <img src={tickIcon} alt='' className='h-24 w-24' />
            <div
              className='flex flex-col gap-2
              '
            >
              <div className=''>Accomplishments</div>
              <div className='text-sm font-normal'>
              We raised 35 issues in this module to make sure that there
                were no Blocker, Critical or Major issues that would hamper the release. 
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <motion.div className='w-[600px] h-[300px]  rounded-lg pt-4 '>
          <Bar
            options={optionsBar}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [3, 5, 23, 4, 0],
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
          <div className="text-white text-xl text-center pt-2">Total Issues Raised - 35</div>

        </motion.div>
      </div>

      {/* Sweep Module */}
      <div className='flex justify-between items-center  text-white gap-12  w-[1000px] mx-auto '>
        {/* chart */}
        <motion.div className='w-[600px] h-[300px]  rounded-lg pt-8'>
          <Bar
            options={{
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
                datalabels:{
                  color: '#fff',
                  align:'top',
                  anchor:'end',
                  font: {
                    size: 12
                  } ,
                  formatter:(value) =>value
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
                    stepSize:5,
                    color: 'White', // Change the font color of the y-axis labels
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],

              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [3, 9, 12, 1, 0],
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
          <div className="text-white text-xl text-center pt-2">Total Issues Raised - 25</div>

        </motion.div>
        {/* title, logo  */}
        <div className='flex flex-col items-center justify-center gap-3 w-[500px] '>
          <div className='flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-r-full '>
            <img
              src={sweep}
              alt=''
              className='w-20 h-20 bg-white rounded-xl object-cover '
            />
            <div className='flex flex-col gap-1  '>
              {/* title */}
              <div className=''>Sweep Module</div>

              {/* description */}
              <div className='text-sm font-normal pr-2'>
              This project was launched by PM Narendra Modi to honor Mahatma Gandhi&apos;s birthday, reflecting our commitment to promoting cleanliness and sustainability across the nation.
              </div>
            </div>
          </div>
          <div className='flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-r-full  '>
            <img src={tickIcon} alt='' className='h-24 w-24' />
            <div
              className='flex flex-col gap-1
              '
            >
              <div className=''>Accomplishments</div>
              <div className='text-sm font-normal'>
                We raised over 25 issues in this module to make sure that there
                were no Blocker, Critical or Major issues that would hamper the release. 
              </div>
            </div>
          </div>
        </div>
      </div>

    </motion.div>
  );
};

export default Namo;
