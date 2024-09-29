import Header from '../../Components/LandingPage/Header';

import teamImg from '../../assets/team_photo.jpg';

const LandingPage = () => {
  return (
    <div className='m-4'>
      <div
        className=' h-[600px] w-full bg-cover bg-no-repeat bg-center rounded-2xl '
        style={{
          backgroundImage: `url(${teamImg})`,
        }}
      >
        <Header />
        <div
          className='m-4 rounded-2xl absolute inset-0 '
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          }}
        ></div>

        {/* <BiWeeklyTimeline /> */}
      </div>
    </div>
  );
};

export default LandingPage;
