import Header from '../../Components/LandingPage/Header';
import BiWeeklyTimeline from '../../Components/LandingPage/BiWeeklyTimeline'

import teamImg from '../../assets/team_photo.jpg';

const LandingPage = () => {
  return (
    <div className='flex items-center justify-center h-[100vh] rounded-2xl '>
      <div
        className=' w-full mx-2 h-[95vh] bg-cover  bg-no-repeat bg-center rounded-2xl '
        style={{
          backgroundImage: `url(${teamImg})`,
        }}
      >
        <Header />
        <div
          className=' rounded-2xl absolute inset-0 '
          style={{
            background:
              'linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0))',
          }}
        ></div>

        <BiWeeklyTimeline />
      </div>
    </div>
  );
};

export default LandingPage;
