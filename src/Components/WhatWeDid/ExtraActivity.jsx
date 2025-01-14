import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { IoMdArrowRoundBack } from "react-icons/io";
import xmas from "../../assets/NewCategoryAsset/xmasnew.webp";
import stars from "../../assets/NewCategoryAsset/stars2.png";
import rsports from "../../assets/NewCategoryAsset/rsportsnew.webp";
import familyday from "../../assets/NewCategoryAsset/famday.webp";
import trophy from "../../assets/NewCategoryAsset/trophy.svg";

const ExtraActivity = ({ setCategory }) => {
  // const pageRef = useRef(null);

  // useEffect(() => {
  //   // Calculate the offset of the new page
  //   const offsetY = pageRef.current?.offsetTop ;

  //   // Scroll to the top of the new page
  //   window.scrollTo({
  //     top: offsetY,
  //     // behavior: "smooth",
  //   });
  // }, []);
  return (
    <motion.div
      key="extraactivity"
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      exit={{ opacity: 0, y: 120, duration: 0.2 }}
      className=" min-h-[100vh] relative mt-16"
    >
      <div className="absolute top-0 right-0  ">
        <img src={stars} alt="" />
      </div>
      <div
        className="absolute top-5 left-5  text-white hover:scale-105 duration-300 border border-white p-2 rounded-xl "
        onClick={() => setCategory("")}
      >
        <IoMdArrowRoundBack />
      </div>
      {/* Christmas Celebration */}
      <div className="text-center text-6xl font-bold text-white pt-10">
        Christmas Celebration
      </div>

      {/* activity data */}
      <div className="w-[900px] mx-auto text-left  font-normal  text-white mt-12 text-2xl">
        Christmas was joyously celebrated on the 24th of December, 2024,
        bringing the festive spirit alive in full swing.
        <ul className="list-disc list-inside [&::marker]:text-white">
          <li className="">
            <strong>Yashi Pandey</strong> showcased her talents by participating
            in a mesmerizing dance performance.
          </li>
          <li>
            Meanwhile,<strong> Ameya Deodhar</strong> delighted everyone with
            his melodious singing.
          </li>
          <li>
            The entire team came together with great enthusiasm and creativity
            to decorate the workspace, transforming it into a stunning
            Christmas-themed wonderland.
          </li>
        </ul>
      </div>

      {/* Gallery Section */}
      <div className="w-[1200px] mx-auto  gap-2">
        <img src={xmas} alt="" />
      </div>

      {/* R-sports */}
      <div className="w-[1200px]  h-auto mx-auto flex relative  text-white mt-20 mb-6">
        {/* title and description */}
        <div className="flex flex-col gap-6  items-center w-1/2 text-6xl pt-36">
          <div className="self-start text-6xl">Annual R-Sports </div>
          <div className=" text-2xl font-normal  ">
            <img
              src={trophy}
              alt=""
              className="absolute w-[82px] h-[82px] right-[56%] top-[14%] "
            />
            Our team members participated in Football and Table Tennis
            tournament of R-Sports. We won the <strong>Champions Trophy</strong>{" "}
            for Football.
            <p className="mt-6 text-2xl">
              Members who participated from our team
              <p className="mt-2 text-2xl font-bold">
                Football Tournament :
                <ul className="list-disc list-inside [&::marker]:text-white font-normal mb-1">
                  <li className="">Hrishikesh Yadav</li>
                  <li className="">Dhruv Parmar</li>
                  <li className="">Sahil Dhole</li>
                </ul>
              </p>
              <p className="mt-2 text-2xl font-bold mb-1">
                Table-Tennis Tournament :
                <ul className="list-disc list-inside [&::marker]:text-white">
                  <li className=" font-normal">Meeti Shah</li>
                </ul>
              </p>
            </p>
          </div>
        </div>

        {/* photo gallery */}
        <div className=" w-1/2 mb-16">
          <img src={rsports} alt="" />
        </div>
      </div>

      {/* Family day */}
      <div className="w-[1200px]  h-auto mx-auto flex gap-12  text-white  mb-6">
        {/* photo gallery */}
        <div className=" w-1/2 mb-16">
          <img src={familyday} alt="" />
        </div>

        {/* title and description */}
        <div className="flex flex-col gap-6  items-center w-1/2 text-6xl mt-20">
          <div className="self-start text-4xl font-bold pt-20">Family Day </div>
          <div className=" text-2xl font-normal">
            A few members of the team willingly volunteered for the RFD event,
            taking on various responsibilities to ensure its smooth execution.
            <p className="mt-6 text-2xl">
              They stayed throughout the entire event for
              <ul className="list-disc list-inside [&::marker]:text-white font-normal">
                <li className="">Managing the crowd with great care</li>
                <li className="">
                  Ensuring that all guests felt comfortable and well-attended
                </li>
                <li className="">
                  Making sure backstage artists were warmly welcomed and
                  properly accommodated.{" "}
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExtraActivity;
