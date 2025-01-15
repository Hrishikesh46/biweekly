import pmImg from "../../assets/pmmodi.png";

import foundersday from "../../assets/foundersday.jpg";
import bday from "../../assets/bdayModule.png";
import jandhanlogo from "../../assets/jandhanlogo.png";

import baps from "../../assets/NewCategoryAsset/baps.png";
import memory from "../../assets/NewCategoryAsset/memory.png";
import quiz from "../../assets/NewCategoryAsset/quiz.png";

import tickIcon from "../../assets/AccomplishmentIcon.png";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";
import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  PointElement,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

const drawCenterTextPlugin = {
  id: "drawCenterTextPlugin",
  beforeDraw: function (chart) {
    const ctx = chart.ctx;
    const width = chart.width;
    const height = chart.height;
    const centerX = width / 2;
    const centerY = height / 2; // Calculate total
    const total = chart.config.data.datasets[0].data.reduce(
      (sum, value) => sum + value,
      0
    );
    ctx.save();
    ctx.font = "bold 30px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = "#fff";
    ctx.fillText(total, centerX, centerY);
    ctx.restore();
  },
};

//to change font size of labels
const optionsDoughnut = {
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
    tooltip: {
      enabled: true,
    },

    datalabels: {
      color: "#000",

      font: {
        size: 14,
      },
      formatter: (value) => value,
    },
  },
  scales: {
    x: {
      display: false,
      ticks: {
        color: "White", // Change the font color of the x-axis labels
        font: {
          size: 14,
        },
      },
    },
    y: {
      display: false,
      ticks: {
        color: "White", // Change the font color of the y-axis labels
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
        easing: "easeInBounce", // Custom easing for exit
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
      display: true,
      grid: {
        display: true,

        color: "rgba(255, 255, 255, 0.2)", // X-axis grid color
      },
      ticks: {
        color: "White", // Change the font color of the x-axis labels
        font: {
          size: 14,
        },
      },
    },
    y: {
      grid: {
        display: true,

        color: "rgba(255, 255, 255, 0.2)", // X-axis grid color
      },
      ticks: {
        color: "White", // Change the font color of the y-axis labels
        font: {
          size: 14,
        },
      },
    },
  },
};

// Line graph
// Chart data
const data = {
  labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
  datasets: [
    {
      label: "Current Issue Count",
      data: [15, 25, 35, 24, 55],
      borderColor: "rgba(0, 191, 255, 1)",
      backgroundColor: "rgba(0, 191, 255, 0.2)",
      tension: false,
      fill: true,
    },
    {
      label: "Previous Issue Count",
      data: [10, 20, 67, 40, 50],

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

const Namo = ({ setCategory, parentRef }) => {
  return (
    <motion.div
      key="namo"
      initial={{ opacity: 0, y: 80 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      exit={{ opacity: 0, y: 80 }}
      className="w-[1200px] h-auto    mx-auto flex flex-col  top-0 left-auto bottom-0  gap-8   "
    >
      {/* Back button */}
      <div
        on
        className="absolute top-5 left-5  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl "
        onClick={() => setCategory("")}
      >
        <IoMdArrowRoundBack />
      </div>
      <div className=" flex ml-[100px]  text-white pt-10 ">
        {/* Pie chart */}
        {/* <motion.div className='w-[300px]   h-[300px]  rounded-lg  '>
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

        </motion.div> */}

        {/* logo, title and description */}
        <div className="flex flex-col gap-2  w-[80%]">
          {/* logo & title */}
          <div className="flex gap-4 ml-[100px] items-center">
            {/* logo */}
            <img src={pmImg} className="w-24 h-24 rounded-2xl" alt="" />

            {/* Name */}
            <div className="flex flex-col gap-1 text-6xl ml-10">
              <div className="">NaMo App</div>
              {/* description */}

              <div className="text-lg  font-normal">
                Official application for our Prime Minister Narendra Modi. Users
                can engage with his activities, speeches, and government
                initiatives.
              </div>
              {/* <div className="">Modi App</div> */}
            </div>
          </div>
        </div>
      </div>

      {/* Line graph */}
      <div className="w-[800px] h-[400px] mx-auto center">
        <Line className="" data={data} options={options} />
      </div>

      {/* score */}
      <p className="text-white text-3xl text-center">
        Total Issues Raised : 167
      </p>

      {/* Modules heading */}
      <div className="mt-8 font-bold text-[48px] text-white text-center">
        Modules We Tested
      </div>

      {/* 3S */}
      <div className="flex justify-between items-center  text-white gap-12  w-[1100px] mx-auto mt-4">
        {/* title, logo  */}
        <div className="flex flex-col items-center justify-center gap-3 w-[500px] ">
          <div className="flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-l-full ">
            <img src={baps} alt="" className="w-20 h-20 bg-white rounded-xl " />
            <div className="flex flex-col gap-1  ">
              {/* title */}
              <div className="text-xl">Seva Shraddha Samarpan</div>

              {/* description */}
              <div className="text-sm font-normal">
                It recognizes selfless service and devotion towards social
                causes. Participants fill out a form detailing their
                contributions, which are reviewed and rewarded with a
                certificate based on their impact.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-l-full  ">
            <img src={tickIcon} alt="" className="h-24 w-24" />
            <div
              className="flex flex-col gap-1
              "
            >
              <div className="">Accomplishments</div>
              <div className="text-sm font-normal">
                We raised 72 issues in this module to make sure that there were
                no Blocker, Critical or Major issues that would hamper the
                release.
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <motion.div className="w-[600px]  rounded-lg flex items-center ">
          <Bar
            options={optionsBar}
            data={{
              labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],

              datasets: [
                {
                  data: [5, 28, 21, 17, 1],
                  backgroundColor: [
                    "rgba(255, 0, 0, 0.8)",
                    "rgba(220, 20, 60, 0.8)",
                    "rgba(255, 87, 34, 0.8)",
                    "rgba(255, 235, 59, 0.8)",
                    "rgba(76, 175, 80, 0.8)",
                  ],
                  borderRadius: 5,
                  borderColor: "none",
                },
              ],
            }}
          />
          {/* <Line className="w-full h-full " data={} options={options} /> */}
          {/* <div className="text-white text-xl text-center pt-2">
            Total Issues Raised - 29
          </div> */}
        </motion.div>
      </div>

      <hr />

      {/* Modi 3.0 quiz  */}
      <div className="flex justify-between items-center  text-white gap-12  w-[1100px] mx-auto pt-5">
        {/* chart */}
        <motion.div className="w-[800px] flex items-center  rounded-lg ">
          <Bar
            options={optionsBar}
            data={{
              labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],

              datasets: [
                {
                  data: [4, 12, 28, 12, 0],
                  backgroundColor: [
                    "rgba(255, 0, 0, 0.8)",
                    "rgba(220, 20, 60, 0.8)",
                    "rgba(255, 87, 34, 0.8)",
                    "rgba(255, 235, 59, 0.8)",
                    "rgba(76, 175, 80, 0.8)",
                  ],
                  borderRadius: 5,
                  borderColor: "none",
                },
              ],
            }}
          />
        </motion.div>
        {/* title, logo  */}
        <div className="flex flex-col items-center justify-center gap-3 w-[500px] ">
          <div className="flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-r-full ">
            <img
              src={quiz}
              alt=""
              className="w-20 h-20 bg-white rounded-xl object-contain "
            />
            <div className="flex flex-col gap-1 pr-2 ">
              {/* title */}
              <div className="text-xl">Modi 3.0 2024 Recap Quiz</div>

              {/* description */}
              <div className="text-sm font-normal ">
                It challenged users on initiatives introduced by the BJP
                Government in 2024. After selecting answers from four options,
                participants received a personalized letter as a reward for
                playing.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-r-full  ">
            <img src={tickIcon} alt="" className="h-24 w-24" />
            <div
              className="flex flex-col gap-1
              "
            >
              <div className="">Accomplishments</div>
              <div className="text-sm font-normal">
                We raised 56 issues in this module to make sure that there were
                no Blocker, Critical or Major issues that would hamper the
                release.
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />

      {/* memory game  */}
      <div className="flex justify-between items-center  text-white gap-12  w-[1100px] mx-auto  ">
        {/* title, logo  */}
        <div className="flex flex-col items-center justify-center gap-3 w-[500px] ">
          <div className="flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-l-full ">
            <img
              src={memory}
              alt=""
              className="w-20 h-20 bg-white rounded-xl object-contain "
            />
            <div className="flex flex-col gap-2  ">
              {/* title */}
              <div className="">Memory Game</div>

              {/* description */}
              <div className="text-sm font-normal">
                Known as "Mission Modi: Empowering India" invites participants
                to play memory game about the scheme.It is based on the flagship
                initiative launched by the government in 2016, the Ujjwala
                Yojana.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-l-full  ">
            <img src={tickIcon} alt="" className="h-24 w-24" />
            <div
              className="flex flex-col gap-2
              "
            >
              <div className="">Accomplishments</div>
              <div className="text-sm font-normal">
                We raised 16 issues in this module to make sure that there were
                no Blocker, Critical or Major issues that would hamper the
                engagement.
              </div>
            </div>
          </div>
        </div>
        {/* chart */}
        <motion.div className="w-[800px]  rounded-lg mt-8 ">
          <Bar
            options={optionsBar}
            data={{
              labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],

              datasets: [
                {
                  data: [1, 3, 9, 3, 0],
                  backgroundColor: [
                    "rgba(255, 0, 0, 0.8)",
                    "rgba(220, 20, 60, 0.8)",
                    "rgba(255, 87, 34, 0.8)",
                    "rgba(255, 235, 59, 0.8)",
                    "rgba(76, 175, 80, 0.8)",
                  ],
                  borderRadius: 5,
                  borderColor: "none",
                },
              ],
            }}
          />
          {/* 
          <Line className="" data={data} options={options} /> */}

          {/* <div className="text-white text-xl text-center pt-2">
            Total Issues Raised - 35
          </div> */}
        </motion.div>
      </div>

      <hr className="mb-16" />

      {/* Sweep Module */}
      {/* <div className="flex justify-between items-center  text-white gap-12  w-[1000px] mx-auto ">
        chart
        <motion.div className="w-[600px] h-[300px]  rounded-lg pt-8">
          <Bar
            options={{
              responsive: true,
              plugins: {
                legend: {
                  display: false,
                  labels: {
                    color: "White",  Change the font color of the legend labels
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
                    size: 12,
                  },
                  formatter: (value) => value,
                },
              },
              scales: {
                x: {
                  ticks: {
                    color: "White",  Change the font color of the x-axis labels
                    font: {
                      size: 14,
                    },
                  },
                },
                y: {
                  ticks: {
                    stepSize: 5,
                    color: "White",  Change the font color of the y-axis labels
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
                  label: "Current Severity Count",
                  data: [3, 9, 12, 1, 0],
                  backgroundColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(255, 159, 64, 1)",
                    "rgba(255, 205, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(54, 162, 235, 1)",
                  ],
                  borderRadius: 5,
                  borderColor: "none",
                },
              ],
            }}
          />
          <div className="text-white text-xl text-center pt-2">
            Total Issues Raised - 25
          </div>
        </motion.div>
        title, logo 
        <div className="flex flex-col items-center justify-center gap-3 w-[500px] ">
          <div className="flex items-center justify-center gap-4 bg-[#4B62E1] pl-8 p-2 h-auto   rounded-r-full ">
            <img
              src={sweep}
              alt=""
              className="w-20 h-20 bg-white rounded-xl object-cover "
            />
            <div className="flex flex-col gap-1  ">
              title
              <div className="">Sweep Module</div>

              description
              <div className="text-sm font-normal pr-2">
                This project was launched by PM Narendra Modi to honor Mahatma
                Gandhi&apos;s birthday, reflecting our commitment to promoting
                cleanliness and sustainability across the nation.
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center  bg-[#ED800F]  pl-8 p-2 h-auto w-[500px] rounded-r-full  ">
            <img src={tickIcon} alt="" className="h-24 w-24" />
            <div
              className="flex flex-col gap-1
              "
            >
              <div className="">Accomplishments</div>
              <div className="text-sm font-normal">
                We raised over 25 issues in this module to make sure that there
                were no Blocker, Critical or Major issues that would hamper the
                release.
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </motion.div>
  );
};

export default Namo;
