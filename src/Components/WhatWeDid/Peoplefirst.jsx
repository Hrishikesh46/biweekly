import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import peopleFirstLogo from "../../assets/PeoplefirstLogo.png";

import treeSvgJE from "../../assets/Tree1.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { IoMdArrowRoundBack } from "react-icons/io";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

//to change font size of labels
// const options = {
//   responsive: true,
//   plugins: {
//     legend: {
//       display: false,
//       labels: {
//         color: "White", // Change the font color of the legend labels
//         font: {
//           size: 16,
//         },
//       },
//     },
//   },
//   scales: {
//     x: {
//       ticks: {
//         color: "White", // Change the font color of the x-axis labels
//         font: {
//           size: 14,
//         },
//       },
//     },
//     y: {
//       ticks: {
//         color: "White", // Change the font color of the y-axis labels
//         font: {
//           size: 14,
//         },
//       },
//     },
//   },
// };

const data = {
  labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
  datasets: [
    {
      label: "Previous Issue Count",
      data: [4, 53, 110, 88, 11],
      borderColor: "rgba(255, 165, 0, 0.8)",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      tension: 0,
      fill: false,
    },
    {
      label: "Current Issue Count",
      data: [2, 12, 60, 65, 1],
      borderColor: "rgba(0, 191, 255, 1)",
      backgroundColor: "rgba(0, 191, 255, 0.2)",
      tension: false,
      fill: true,
    },
  ],
};

// Line Chart options
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        padding: 20, // Increases the space between legend items
        font: {
          size: 15,
          weight: "bold",
        },
        color: "white",
      },
    },
    tooltip: {
      enabled: false,
    },
    datalabels: {
      display: false, // Explicitly disable data labels if the plugin is installed
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // X-axis grid color
      },
      ticks: {
        color: "white", // X-axis labels color
        font: {
          size: 14, // Increase font size
          weight: "bold", // Make font bold
        },
      },
    },
    y: {
      beginAtZero: true,
      grid: {
        color: "rgba(255, 255, 255, 0.2)", // Y-axis grid color
      },
      ticks: {
        color: "white", // Y-axis labels color
        font: {
          size: 14, // Increase font size
          weight: "bold", // Make font bold
        },
      },
    },
  },
};

const Peoplefirst = ({ setCategory }) => {
  return (
    <motion.div
      key="peoplefirst"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80 }}
      className="w-[1200px] mx-auto h-auto pt-2 "
    >
      {/* Back button */}
      <div
        className="absolute top-1 left-2  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl "
        onClick={() => setCategory("")}
      >
        <IoMdArrowRoundBack />
      </div>

      {/* title and graph */}
      <div className="w-full h-auto flex justify-center items-center gap-28 mt-8 ">
        {/* title */}

        <div className="flex flex-col text-white  gap-3 w-[800px] mx-auto">
          <div
            className="flex justify-start
       items-center gap-6  "
          >
            {/* logo */}
            <img src={peopleFirstLogo} alt="" className="h-28 w-28 " />

            <div className="">
              <p className="text-5xl">PeopleFirst</p>

              {/* description */}
              <p className=" text-lg font-normal mt-2">
                It is an internal portal designed for Reliance employees,
                providing a platform to manage HR-related activities such as
                attendance, payroll, leaves, and self-service functions.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* graph */}
      <motion.div className="w-[800px] h-[400px] mx-auto  rounded-lg mt-10 ">
        {/* <Bar
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
                    size: 14
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
            }}
            
            data={{
              labels: ['Blocker', 'Critical', 'Major', 'Normal', 'Minor'],
              datasets: [
                {
                  label: 'Current Severity Count',
                  data: [4, 53, 110, 88, 11],
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
          /> */}
        <Line className="h-[400px]" data={data} options={options} />
        <div className="text-white text-xl text-center pt-2">
          Total Issues Raised - 140
        </div>
      </motion.div>

      {/* tasks performed */}
      <div className="text-white text-center mt-20 text-5xl ">
        Tasks Performed
      </div>

      {/* <div className="flex justify-center ">
        <img src={treeSvg} alt="" className="" />
      </div>

      <div className=" w-[1200px] flex justify-center items-center mx-auto gap-8 ">
        <div className="flex flex-col w-[400px] h-[200px] gap-3 bg-white   p-4 rounded-xl">
          title
          <div className="text-2xl font-bold">Sanity & Retesting</div>

          description
          <div className="text-[16px] font-normal leading-6">
            We conducted User Acceptance Testing to ensure the app&apos;s
            functionality aligns with user requirements and expectations.
            Additionally, we retested raised issues to confirm that the features
            were stable after minor changes or bug fixes.
          </div>
        </div>
        <div className="flex flex-col w-[400px] h-[200px] gap-3 bg-white   p-4 rounded-xl">
          title
          <div className="text-2xl font-bold">Travel & Guest House</div>

          description
          <div className="text-[16px] font-normal leading-6">
            As part of the testing process, we evaluated a new feature called
            "Travel and Guest House", aimed at simplifying the process for
            booking travel and accommodation for employees.
          </div>
        </div>

        
      </div> */}

      <div className="flex justify-center items-center mt-6 ">
        <img src={treeSvgJE} alt="" />
      </div>

      <div className=" w-[1100px] grid grid-cols-3 mx-auto gap-8 mb-20 font-normal">
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Sanity</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            In PeopleFirst, we perform Sanity on the production environment to
            identify UI and functionality issues.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">PeopleFirst Website</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            We tested peoplefirst V2 version on web for both desktop and mobile
            browsers, ensuring all tabs and features work correctly.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Travel & GuestHouse</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            We evaluated the Travel and Guest House section, checking for any
            issues which employees may encounter when accessing travel and
            accommodation services.
          </div>
        </div>
        {/* <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          // {/* title 
          <div className="text-2xl font-bold">Website Testing</div>

          description
          <div className="text-[16px] leading-6">
            We tested peoplefirst V2 version on web for both desktop and mobile
            browsers, ensuring all tabs and features work correctly.
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default Peoplefirst;
