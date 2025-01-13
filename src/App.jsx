import Contributors from "./Pages/Contributors/Contributors";
import LandingPage from "./Pages/LandingPage/LandingPage";

import MeetTeamPage from "./Pages/MeetTeamPage/MeetTeamPage";
import WhatWeDid from "./Pages/WhatWeDidPage/WhatWeDid";

function App() {
  return (
    <div className=" font-semibold  text-4xl bg-opacity-10 ">
      <LandingPage />
      <WhatWeDid />
      <MeetTeamPage />
      <Contributors />
    </div>
  );
}

export default App;
