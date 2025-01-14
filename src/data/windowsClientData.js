import windowsLogo from "../assets/windows.png";

import ishita from "../assets/TeamMembers/Ishita.webp";
import aditi from "../assets/TeamMembers/Aditi.webp";
import sonali from "../assets/TeamMembers/Sonali.webp";
import pratiksha from "../assets/TeamMembers/Pratiksha.webp";
import khushi from "../assets/TeamMembers/Khushi.webp";

export const WindowsClientData = [
  {
    client: "Windows",
    clientLogo: windowsLogo,
    clientMembers: [
      {
        name: "Sonali Anand",
        nickname: "Sonli ",
        client: "Windows",
        profileImg: sonali,
        prevScore: "149",
        currScore: "125",
        courses: ["Developing Front-end Apps with React"],
        extraActivity: ["Christmas decoration"],
        rank: 1,
        prevSeverity: [4, 1, 10, 18, 0],
        currSeverity: [4, 2, 7, 11, 1],
      },
      {
        name: "Khushi Bohre",
        nickname: "Khushi ",
        client: "Windows",
        profileImg: khushi,
        prevScore: "14",
        currScore: "100",
        courses: ["Linux Fundamentals", "Introduction to CyberSecurity"],
        extraActivity: ["Christmas decoration"],
        rank: 2,
        prevSeverity: [0, 1, 0, 2, 0],
        currSeverity: [0, 4, 9, 7, 2],
      },
      {
        name: "Ishita Singh",
        nickname: "Bouncer ",
        client: "Windows",
        profileImg: ishita,
        prevScore: "162",
        currScore: "96",
        courses: ["Figma Tutorials: The ultimate crash course"],
        extraActivity: ["Christmas decoration"],
        rank: 3,
        prevSeverity: [0, 6, 9, 8, 1],
        currSeverity: [0, 4, 11, 3, 0],
      },

      {
        name: "Aditi Bukkawar",
        nickname: "ADT ",
        client: "Windows",
        profileImg: aditi,
        prevScore: "113",
        currScore: "62",
        courses: ["AWS Cloud Essentials", "Devops for beginners to advanced"],
        extraActivity: [
          "Christmas decoration",
          "Reliance Family Day volunteering",
        ],
        rank: 4,
        prevSeverity: [0, 6, 8, 8, 1],
        currSeverity: [0, 2, 5, 7, 0],
      },
    ],
    prevConsolidatedCount: [2, 21, 31, 42, 1],
    currConsolidatedCount: [4, 12, 32, 28, 3],
    issuesRaised: 79,
  },
];
