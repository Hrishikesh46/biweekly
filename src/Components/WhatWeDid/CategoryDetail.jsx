import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import namoImg from "../../assets/NewCategoryAsset/namo1.webp";
import jiomeetImg from "../../assets/NewCategoryAsset/jiomeet1.webp";
import peopleFirstImg from "../../assets/NewCategoryAsset/people1.webp";
import teamphoto from "../../assets/NewCategoryAsset/extraactivity.webp";
import jiocloudImg from "../../assets/NewCategoryAsset/jiocloud1.webp";
import JioMeetPage from "./JioMeetPage";
import Namo from "./Namo";
import Peoplefirst from "./Peoplefirst";
import ExtraActivity from "./ExtraActivity";
import JioCloud from "./JioCloud";

const CategoryDetail = () => {
  const [category, setCategory] = useState("");
  const parentRef = useRef(null);
  console.log(category);
  return (
    <div id="taskPerformed" className="min-h-[100vh]   relative ">
      {/* Heading */}
      {/* Category section */}
      <AnimatePresence mode="wait">
        {category === "" && (
          <>
            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="text-6xl text-center text-white mb-10 lg:mb-16  "
            >
              Tasks Performed
            </motion.div>

            <motion.div
              initial={{ y: -80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="w-[1000px] flex flex-wrap gap-8 mx-auto"
            >
              {/* individual category */}

              {/* jiomeet category */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween" }}
                className="relative h-[280px] w-[300px]  ml-auto"
                onClick={() => setCategory("jiomeet")}
              >
                <motion.img
                  src={jiomeetImg}
                  alt=""
                  className="w-full h-full object-contain rounded-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white  font-semibold opacity-0 text-2xl text-wrap rounded-xl cursor-pointer"
                >
                  <p className="pl-4">JioMeet/JioEvents</p>
                </motion.div>
              </motion.div>

              {/* namo category */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween" }}
                className=" relative h-[280px] w-[300px]  mx-auto"
                onClick={() => setCategory("namo")}
              >
                <img
                  src={namoImg}
                  alt=""
                  className="w-full h-full rounded-2xl object-contain"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white  font-semibold opacity-0 text-2xl text-wrap cursor-pointer rounded-2xl"
                >
                  NaMo
                </motion.div>
              </motion.div>

              {/* peoplefirst */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween" }}
                className="relative h-[280px] w-[300px] mr-auto"
                onClick={() => setCategory("peoplefirst")}
              >
                <img
                  src={peopleFirstImg}
                  alt=""
                  className="w-full h-full  rounded-2xl object-contain"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white  font-semibold opacity-0 text-2xl text-wrap cursor-pointer rounded-2xl"
                >
                  PeopleFirst
                </motion.div>
              </motion.div>

              {/* JioCloud */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween" }}
                className="relative h-[280px] w-[300px] ml-auto"
                onClick={() => setCategory("jiocloud")}
              >
                <img
                  src={jiocloudImg}
                  alt=""
                  className="object-contain w-full h-full  rounded-2xl "
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white  font-semibold opacity-0 text-2xl text-wrap cursor-pointer rounded-2xl"
                >
                  JioCloud
                </motion.div>
              </motion.div>

              {/* extraactivity  */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "tween" }}
                className="relative h-[280px] w-[300px]  mr-auto "
                onClick={() => setCategory("extraactivity")}
              >
                <img
                  src={teamphoto}
                  alt=""
                  className="object-contain w-full h-full  rounded-2xl"
                />
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileHover={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-60 text-white  font-semibold opacity-0 text-2xl text-wrap cursor-pointer rounded-2xl"
                >
                  Extra Activities
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence mode="wait">
        {category === "jiomeet" && <JioMeetPage setCategory={setCategory} />}

        {category === "namo" && (
          <Namo setCategory={setCategory} parentRef={parentRef} />
        )}

        {category === "peoplefirst" && (
          <Peoplefirst setCategory={setCategory} />
        )}

        {category === "extraactivity" && (
          <ExtraActivity setCategory={setCategory} />
        )}

        {category === "jiocloud" && <JioCloud setCategory={setCategory} />}
      </AnimatePresence>
    </div>
  );
};

export default CategoryDetail;
