import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import eventsLogo from "../../assets/eventslogo.png";
import jiomeetLogo from "../../assets/jiomeetlogo.png";
import treeSvgJE from "../../assets/Tree1.svg";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
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
  LineElement,
  PointElement,
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
  labels: ["Blocker", "Critical", "Major", "Medium", "Minor"],
  datasets: [
    {
      label: "Current Issue Count",
      data: [0, 1, 11, 13, 8],
      borderColor: "rgba(0, 191, 255, 1)",
      backgroundColor: "rgba(0, 191, 255, 0.2)",
      tension: false,
      fill: true,
    },
    {
      label: "Previous Issue Count",
      data: [2, 3, 5, 18, 2],

      borderColor: "rgba(255, 165, 0, 0.8)",
      backgroundColor: "rgba(255, 165, 0, 0.2)",
      tension: 0,
      fill: false,
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
      enabled: true,
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
        color: "rgba(255, 255, 255, 0.4)", // Y-axis grid color
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

const JioMeetPage = ({ setCategory }) => {
  return (
    <motion.div
      key="jiomeet"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80, transition: 0.4 }}
      className="w-[1200px] mx-auto  h-auto"
    >
      {/* Back button */}
      <div
        className="absolute top-4 left-2  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl "
        onClick={() => setCategory("")}
      >
        <IoMdArrowRoundBack />
      </div>

      {/* title and graph */}
      <div className="w-[850px] mx-auto h-auto flex justify-center items-center gap-28 mt-8 ">
        {/* title */}

        <div className="flex flex-col text-white  gap-3  ">
          <div
            className="flex justify-center
           items-center gap-8 pt-6 "
          >
            {/* logo */}
            <img src={jiomeetLogo} alt="" className="h-24 w-24 " />
            <div className="">
              <p className="text-5xl ">JioMeet & JioEvents</p>
              {/* description */}
              <p className="w-auto mx-auto text-xl mt-2 font-normal">
                JioMeet & JioEvents integrates HD video conferencing, content
                sharing, and chat collaboration, allowing users to schedule
                calls or host meetings from anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
      <motion.div className="w-[800px] h-[400px] mt-12 mx-auto    rounded-lg ">
        <Line className="h-[400px]" data={data} options={options} />
        <div className="text-white text-3xl text-center pt-5">
          Total Issues Raised : 33
        </div>
      </motion.div>

      {/* types of testing */}
      <div className="text-white text-center mt-28  text-5xl">
        Tasks Performed
      </div>

      <div className="flex justify-center items-center mt-6">
        <img src={treeSvgJE} alt="" />
      </div>

      <div className=" w-[1100px] grid grid-cols-3 mx-auto gap-8 mb-20 font-normal ">
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-[20px] font-bold">
            Backward Compatibility Testing
          </div>

          {/* description */}
          <div className="text-[16px] leading-6">
            Key testing strategies include Backward Compatibility Testing checks
            if the current production version remains compatible with planned
            server changes before release.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-[20px] font-bold">Post-Deployment Testing</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            PDT verifies major functionalities immediately after software
            deployment to ensure everything works correctly in production.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-[20px] font-bold">Post-Deployment Sanity</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            PDS checks new features in production, ensuring functionality works
            correctly and doesn&apos;t disrupt existing features. Bugs are
            raised if issues arise.
          </div>
        </div>
        {/* <div className="flex flex-col gap-8 bg-white h-auto  p-4 rounded-xl">
           title 
          <div className="text-2xl font-bold">Load Testing</div>

          description
          <div className="text-[16px] leading-6">
            To evaluate how JioMeet behaves under a specific, expected load. The
            main goal is to check if system can handle the anticipated amount of
            work and find potential points of failure
          </div>
        </div> */}
      </div>
    </motion.div>
  );
};

export default JioMeetPage;
