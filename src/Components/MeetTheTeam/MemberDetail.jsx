import React, { useEffect, useRef } from "react";

import { RxCross2 } from "react-icons/rx";
import LazyLoad from "react-lazyload";
import { motion } from "framer-motion";
import { Bar, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
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
        color: "White", // Change the font color of the legend labels
        font: {
          size: 16,
        },
      },
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
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
        display: false,
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

const MemberDetail = ({ user, setUser }) => {
  const pageRef = useRef(null);

  useEffect(() => {
    // Calculate the offset of the new page
    const offsetY = pageRef.current?.offsetTop;

    // Scroll to the top of the new page
    window.scrollTo({
      top: offsetY,
      // behavior: "smooth",
    });
  }, []);
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
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
  return (
    <motion.div
      ref={pageRef}
      initial={{ y: -180, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="   w-[1000px] mx-auto h-[100vh] flex flex-col justify-center items-center  "
    >
      {/* profile and name */}
      <motion.div className="flex flex-col rounded-3xl bg-[#2a2626]   h-[600px] ">
        {/* backbutton */}
        <motion.div
          className="absolute h-[60px] w-[60px] self-end mr-2 mt-[8px] hover:scale-125 duration-200 flex justify-center items-center rounded-xl "
          onClick={() => setUser("")}
        >
          <RxCross2 className="w-8 h-8" />
        </motion.div>
        <div
          className=" flex w-[800px] h-[272px]  justify-start
         items-center pl-10 gap-10"
        >
          {/* profile */}
          <LazyLoad>
            <img
              src={user.profileImg}
              alt=""
              className="w-[200px] h-[200px] rounded-full object-contain self-start bg-gray-600 "
            />
          </LazyLoad>

          {/* name and score section */}
          <div className="">
            {/* name */}
            <div className="text-[42px] mb-3">{user.nickname}</div>

            {/* score */}
            <div className="flex gap-4 text-xl">
              {/* prev score */}
              <div className="flex flex-col justify-center items-center">
                <div className="font-normal">Previous Score</div>
                <div className="text-3xl">{user.prevScore}</div>
              </div>

              {/* current score */}
              <div className="flex flex-col justify-center items-center ">
                <div className="font-normal">Current Score</div>
                <div className="text-3xl">{user.currScore}</div>
              </div>
            </div>
          </div>
        </div>
        {/* courses and chart */}
        <div className="w-[800px] pl-4 flex justify-evenly   ">
          {/* courses section */}
          <div className="flex flex-col w-[312px]  ">
            <div className="text-3xl mb-1 ">Courses</div>
            <ul className="text-lg gap-3 font-normal">
              {user.courses.map((course) => {
                return <li>- {course}</li>;
              })}
            </ul>

            {user.extraActivity && user.extraActivity.length > 0 && (
              <div className="text-3xl mt-6 mb-1"> Extra Activities</div>
            )}

            <ul className="text-lg gap-3 font-normal">
              {user.extraActivity?.map((activity) => {
                return <li>- {activity}</li>;
              })}
            </ul>
          </div>

          {/* Graph */}
          <motion.div className="w-[500px] h-[300px] flex items-start rounded-lg pr-4  ">
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
            /> */}
            <Line
              data={{
                labels: ["Blocker", "Critical", "Major", "Normal", "Minor"],
                datasets: [
                  {
                    label: "Previous Issue Count",
                    data: user.prevSeverity || [0, 0, 0, 0, 0], // Fallback to avoid undefined
                    borderColor: "rgba(75, 192, 192, 1)",
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    tension: 0, // Sharp lines
                    fill: false, // No fill
                  },
                  {
                    label: "Current Issue Count",
                    data: user.currSeverity, // Replace with actual data or leave empty if not available
                    borderColor: "rgba(153, 102, 255, 1)",
                    backgroundColor: "rgba(153, 102, 255, 0.2)",
                    tension: 0, // Sharp lines
                    fill: true, // Filled line
                  },
                ],
              }}
              options={options}
              className=""
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default MemberDetail;
