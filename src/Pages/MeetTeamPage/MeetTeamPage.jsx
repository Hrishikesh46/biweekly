import React, { useState } from 'react';
import Card from '../../Components/MeetTheTeam/Card';
import TeamPage from '../../Components/MeetTheTeam/TeamPage';

const MeetTeamPage = () => {
  const [category, setCategory] = useState(null);
  return (
    <div className='w-[1100px] mx-auto h-screen  '>
      <Card />

      {/* <TeamPage /> */}
    </div>
  );
};

export default MeetTeamPage;
