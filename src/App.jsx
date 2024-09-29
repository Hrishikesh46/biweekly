import LandingPage from './Pages/LandingPage/LandingPage';

import MeetTeamPage from './Pages/MeetTeamPage/MeetTeamPage';
import WhatWeDid from './Pages/WhatWeDidPage/WhatWeDid';

function App() {
  console.log('process', process.env.NODE_ENV);
  return (
    <div className=' font-semibold  text-4xl bg-opacity-10 '>
      <LandingPage />
      <WhatWeDid />
      <MeetTeamPage />
    </div>
  );
}

export default App;
