import macLogo from "../assets/MacOS.png";
import ameya from "../assets/TeamMembers/Ameya.webp";
import nikita from "../assets/TeamMembers/Nikita.webp";
import isha from "../assets/TeamMembers/Isha.webp";
import pratiksha from "../assets/TeamMembers/Pratiksha.webp";

import mansa from "../assets/TeamMembers/Mansa.webp";

export const MacOSClientData = [
  {
    client: "macOS",
    clientLogo: macLogo,
    clientMembers: [
      {
        name: "Ameya Deodhar",
        nickname: "Amoy ",
        client: "MacOS",
        profileImg: ameya,
        prevScore: "147",
        currScore: "151",
        courses: ["Foundations of Project Management"],
        extraActivity: ["Sang in Christmas event", "Voice collection task"],
        rank: 1,
        prevSeverity: [1, 7, 10, 10, 0],
        currSeverity: [3, 8, 8, 5, 2],
      },
      {
        name: "Nikita Bharati",
        nickname: "Pookie",
        client: "MacOS",
        profileImg: nikita,
        prevScore: "92",
        currScore: "112",
        courses: ["React - The Complete Guide 2024 ", "Next.js & Redux"],
        extraActivity: ["Christmas decoration", "Biweekly website development"],
        rank: 2,
        prevSeverity: [1, 3, 7, 7, 2],
        currSeverity: [0, 4, 11, 8, 1],
      },
      {
        name: "Pratiksha Bhavsar",
        nickname: "Naturo ",
        client: "Windows",
        profileImg: pratiksha,
        prevScore: "96",
        currScore: "100",
        courses: ["Spring MVC", "Spring Boot and REST controllers"],
        extraActivity: ["Sang in birthday celebration"],
        rank: 3,
        prevSeverity: [0, 7, 5, 5, 0],
        currSeverity: [0, 5, 7, 8, 1],
      },
      {
        name: "Mansa Sharma",
        nickname: "Mansedi ",
        client: "MacOS",
        profileImg: mansa,
        prevScore: "95",
        currScore: "16",
        courses: ["Introduction to SQL"],
        extraActivity: ["Christmas decoration"],
        rank: 4,
        prevSeverity: [1, 2, 9, 8, 0],
        currSeverity: [0, 1, 1, 1, 0],
      },
    ],

    prevConsolidatedCount: [3, 14, 30, 30, 3],
    currConsolidatedCount: [3, 18, 27, 22, 4],
    issuesRaised: 74,
  },
];
