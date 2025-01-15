import { motion } from "framer-motion";
import { Line } from "react-chartjs-2";
import jiocloudLogo from "../../assets/jiocloudlogo.png";
import jiomeetLogo from "../../assets/jiomeetlogo.png";
import treeSvgJE from "../../assets/JMJE.svg";

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
  LineElement,
  PointElement,
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
      label: "Current Issue Count",
      data: [1, 39, 92, 62, 7],
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

const JioCloud = ({ setCategory }) => {
  return (
    <motion.div
      key="jiocloud"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      exit={{ opacity: 0, y: 80, transition: 0.2 }}
      className="w-[1200px] mx-auto h-auto "
    >
      {/* Back button */}
      <div
        className="absolute top-4 left-2  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl "
        onClick={() => setCategory("")}
      >
        <IoMdArrowRoundBack />
      </div>

      {/* title and graph */}
      <div className="w-[850px] mx-auto h-auto flex justify-center items-center gap-28 mt-12  ">
        {/* title */}

        <div className="flex flex-col text-white  gap-3 ">
          <div
            className="flex justify-start
           items-center gap-2 pt-6 "
          >
            {/* logo */}
            <img src={jiocloudLogo} alt="" className="h-24 w-24 " />
            <div className="">
              <p className="text-7xl">JioCloud</p>
              {/* description */}
              <p className="w-auto mx-auto text-xl mt-2 font-normal">
                JioCloud is a cloud storage service to store, sync, and access
                your data like photos, videos, and documents.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* graph */}
      <motion.div className="w-[850px] h-[400px] mx-auto mt-12  rounded-lg ">
        {/* <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                  labels: {
                    color: "White", // Change the font color of the legend labels
                    font: {
                      size: 16,
                    },
                  },
                },
                datalabels: {
                  color: "#fff",
                  align: "top",
                  anchor: "end",
                  font: {
                    size: 14,
                  },
                  formatter: (value) => value,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "White", // Change the font color of the x-axis labels
                    font: {
                      size: 14,
                    },
                  },
                },
                y: {
                  ticks: {
                    stepSize: 5,
                    color: "White", // Change the font color of the y-axis labels
                    font: {
                      size: 14,
                    },
                  },
                },
              },
            }}
            data={{
              labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
              datasets: [
                {
                  label: false,
                  data: [2, 3, 5, 18, 2],
                  backgroundColor: [
                    "rgba(255, 99, 132, 0.8)",
                    "rgba(255, 159, 64, 0.8)",
                    "rgba(255, 205, 86, 0.8)",
                    "rgba(75, 192, 192, 0.8)",
                    "rgba(54, 162, 235, 0.8)",
                  ],
                  borderRadius: 5,
                },
              ],
            }}
          /> */}

        {/* New bar graph */}

        <Line className="h-[400px]" data={data} options={options} />

        <div className="text-white text-3xl text-center mt-6">
          Total Issues Raised : 201
        </div>
      </motion.div>

      {/* types of testing */}
      <div className="text-white text-center mt-28  text-5xl">
        Tasks Performed
      </div>

      <div className="flex justify-center items-center mt-6 ">
        <img src={treeSvgJE} alt="" />
      </div>

      <div className=" w-[1200px] grid grid-cols-4 mx-auto gap-8  font-normal mb-20">
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Sanity</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            The team performed sanity. A variety of issues were addressed
            ranging from security, functional, user experience & UI.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Regression Suite</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            Targeted regression tests were conducted to verify the functionality
            of implemented features across various devices.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Turbo Backup</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            Turbo Backup offers fast and efficient data backup, ensuring quick
            and secure storage of files.
          </div>
        </div>
        <div className="flex flex-col gap-3 bg-white h-auto  p-4 rounded-xl">
          {/* title */}
          <div className="text-2xl font-bold">Feature Testing</div>

          {/* description */}
          <div className="text-[16px] leading-6">
            Feature testing on JioCloud ensures AI Magic, AI Edit, and other
            features work smoothly across devices.
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default JioCloud;
