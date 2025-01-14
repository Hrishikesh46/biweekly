import webLogo from "../assets/NewCategoryAsset/webrtcnew1.png";

import kunal from "../assets/TeamMembers/Kunal.webp";
import soumya from "../assets/TeamMembers/Soumya.webp";
import alwis from "../assets/TeamMembers/Alwis.webp";
import ayush from "../assets/TeamMembers/Ayush.webp";
import aniruddh from "../assets/TeamMembers/Aniruddh.webp";

export const WebClientData = [
  {
    client: "WebRTC",
    clientLogo: webLogo,
    clientMembers: [
      {
        name: "Alwis Shaji",
        nickname: "Dabeli ",
        client: "WebRTC",
        profileImg: alwis,
        prevScore: "82",
        currScore: "160",
        courses: ["Software Development Life cycle", "Java Spring Boot"],
        extraActivity: ["Green diwali event", "Voice collection task"],
        rank: 1,
        prevSeverity: [1, 3, 5, 7, 2],
        currSeverity: [1, 4, 17, 11, 0],
      },
      {
        name: "Soumya Sinha",
        nickname: "Somu ",
        client: "WebRTC",
        profileImg: soumya,
        prevScore: "143",
        currScore: "149",
        courses: ["Meta Frontend Developer Course"],
        extraActivity: ["Christmas decoration"],
        rank: 2,
        prevSeverity: [1, 2, 11, 20, 2],
        currSeverity: [1, 5, 12, 13, 0],
      },

      {
        name: "Kunal Jaiswal",
        nickname: "Kunnu ",
        client: "WebRTC",
        profileImg: kunal,
        prevScore: "223",
        currScore: "124",
        courses: ["Figma: Design systems", "Figma Master class by Mizko"],
        extraActivity: ["Christmas decoration"],
        rank: 3,
        prevSeverity: [3, 14, 12, 7, 0],
        currSeverity: [4, 6, 6, 2, 0],
      },
      {
        name: "Ayush Pandey",
        nickname: "OG Pandey ",
        client: "WebRTC",
        profileImg: ayush,
        prevScore: "60",
        currScore: "74",
        courses: ["Web development"],
        extraActivity: ["Christmas decoration"],
        rank: 4,
        prevSeverity: [0, 4, 4, 2, 2],
        currSeverity: [0, 1, 8, 8, 2],
      },
    ],
    prevConsolidatedCount: [4, 22, 33, 38, 6],
    currConsolidatedCount: [6, 16, 41, 33, 2],
    issuesRaised: 98,
  },
];
