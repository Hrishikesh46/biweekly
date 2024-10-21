import TeamPage from './TeamPage';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';
import { AndroidClientData } from '../../data/AndroidClientData';
import { IOSClientData } from '../../data/iOSClientData';
import { WebClientData } from '../../data/webRTCClientData';
import { WindowsClientData } from '../../data/windowsClientData';
import { MacOSClientData } from '../../data/macOSClientData';

const Card = () => {
  const [category, setCategory] = useState('');

  return (
    <motion.div className='   relative flex  flex-col gap-16  justify-center items-center '>
      {/* Heading */}

      {!category && (
        <motion.div
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className='text-center text-7xl text-white '
        >
          Meet The Team
        </motion.div>
      )}

      {/* Clients */}
      {!category && (
        <motion.div
          initial={{ y: -150, opacity: 0 }}
          transition={{ duration: 0.5 }}
          animate={{ y: 0, opacity: 1 }}
          className='  flex flex-wrap justify-center gap-8 pr-8 '
        >
          {/* Individual clients*/}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-[260px] w-[260px] border border-white cursor-pointer text-black p-4 bg-white flex flex-col gap-4 items-center justify-center font-bold rounded-2xl'
            onClick={() => setCategory(AndroidClientData)}
          >
            {/* client logo */}
            {/* <div className=''>{AndroidClientData[0].clientLogo}</div> */}
            <img
              src={AndroidClientData[0].clientLogo}
              className='h-16 w-14'
              alt=''
            />

            {/* Client name */}
            <div className=''>{AndroidClientData[0].client}</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-[260px] w-[260px] border border-white cursor-pointer text-black p-4 bg-white flex flex-col gap-4 items-center justify-center font-bold rounded-2xl'
            onClick={() => setCategory(IOSClientData)}
          >
            {/* client logo */}
            {/* <div className=''>{AndroidClientData[0].clientLogo}</div> */}
            <img
              src={IOSClientData[0].clientLogo}
              className='h-16 w-14'
              alt=''
            />

            {/* Client name */}
            <div className=''>{IOSClientData[0].client}</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-[260px] w-[260px] border border-white cursor-pointer text-black p-4 bg-white flex flex-col gap-4 items-center justify-center font-bold rounded-2xl'
            onClick={() => setCategory(WindowsClientData)}
          >
            {/* client logo */}
            {/* <div className=''>{AndroidClientData[0].clientLogo}</div> */}
            <img
              src={WindowsClientData[0].clientLogo}
              className='h-16 w-16'
              alt=''
            />

            {/* Client name */}
            <div className=''>{WindowsClientData[0].client}</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-[260px] w-[260px] border border-white cursor-pointer text-black p-4 bg-white flex flex-col gap-4 items-center justify-center font-bold rounded-2xl'
            onClick={() => setCategory(MacOSClientData)}
          >
            {/* client logo */}
            {/* <div className=''>{AndroidClientData[0].clientLogo}</div> */}
            <img
              src={MacOSClientData[0].clientLogo}
              className='h-16 w-16'
              alt=''
            />

            {/* Client name */}
            <div className=''>{MacOSClientData[0].client}</div>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='h-[260px] w-[260px] border border-white cursor-pointer text-black p-4 bg-white flex flex-col gap-4 items-center justify-center font-bold rounded-2xl'
            onClick={() => setCategory(WebClientData)}
          >
            {/* client logo */}
            {/* <div className=''>{AndroidClientData[0].clientLogo}</div> */}
            <img
              src={WebClientData[0].clientLogo}
              className='h-16 w-16'
              alt=''
            />

            {/* Client name */}
            <div className=''>{WebClientData[0].client}</div>
          </motion.div>
        </motion.div>
      )}
      <AnimatePresence>
        {category.length !== 0 && (
          <TeamPage category={category} setCategory={setCategory} />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Card;
