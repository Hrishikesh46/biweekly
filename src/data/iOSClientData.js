import iOSLogo from "../assets/Group.png";
import sahil from "../assets/TeamMembers/Sahil.webp";
import dhruv from "../assets/TeamMembers/Dhruv.webp";
import hrishi from "../assets/TeamMembers/Nakli.webp";
import pranjal from "../assets/TeamMembers/Pranjal.webp";
import barnali from "../assets/TeamMembers/Barnali.webp";
import shreya from "../assets/TeamMembers/Shreya.webp";

export const IOSClientData = [
  {
    client: "iOS",
    clientLogo: iOSLogo,
    clientMembers: [
      {
        name: "Hrishikesh Yadav",
        nickname: "Nakli Yadav",
        client: "iOS",
        profileImg: hrishi,
        prevScore: "142",
        currScore: "150",
        courses: ["PostgreSQL for Beginners", "Python Programming"],
        extraActivity: [
          "Annual R-Sports (Football)",
          "Biweekly Website development",
        ],
        rank: 1,
        prevSeverity: [2, 6, 10, 8, 0],
        currSeverity: [2, 7, 13, 3, 0],
      },
      {
        name: "Sahil Dhole",
        nickname: "Dhole Raja",
        client: "iOS",
        profileImg: sahil,
        prevScore: "256",
        currScore: "147",
        courses: [
          "Digital Product Management: Fundamentals",
          "Data analysis and visualization with python",
        ],
        extraActivity: [
          "Annual R-Sports (Football)",
          "Biweekly Figma UI Design",
        ],
        rank: 2,
        prevSeverity: [4, 13, 21, 5, 0],
        currSeverity: [0, 9, 12, 5, 0],
      },
      {
        name: "Shreya Srivastava",
        nickname: "Shrek",
        client: "iOS",
        profileImg: shreya,
        prevScore: "56",
        currScore: "132",
        courses: ["Javascript", "NodeJS"],
        extraActivity: [
          "Reliance Family day volunteering",
          "Christmas decoration",
        ],
        rank: 3,
        prevSeverity: [0, 3, 1, 9, 0],
        currSeverity: [0, 6, 10, 11, 1],
      },
      {
        name: "Dhruv Parmar",
        nickname: "Cold Parmar",
        client: "iOS",
        profileImg: dhruv,
        prevScore: "161",
        currScore: "102",
        courses: ["Data Structures & Algorithms", "Microservices with NodeJS"],
        extraActivity: ["Annual R-Sports (Football)", "Voice collection task"],
        rank: 4,
        prevSeverity: [2, 10, 12, 0, 1],
        currSeverity: [0, 6, 9, 3, 0],
      },

      {
        name: "Barnali C",
        nickname: "Bernoulli ",
        client: "iOS",
        profileImg: barnali,
        prevScore: "88",
        currScore: "79",
        courses: ["Designing with Penpot"],
        extraActivity: ["Christmas decoration"],
        rank: 5,
        prevSeverity: [1, 1, 8, 10, 0],
        currSeverity: [0, 1, 5, 14, 4],
      },
      {
        name: "Pranjal Thigale",
        nickname: "Thigale Bhai",
        client: "iOS",
        profileImg: pranjal,
        prevScore: "118",
        currScore: "62",
        courses: ["Docker"],
        extraActivity: ["Christmas decoration"],
        rank: 6,
        prevSeverity: [0, 2, 18, 4, 0],
        currSeverity: [0, 2, 5, 7, 0],
      },
    ],

    prevConsolidatedCount: [9, 30, 68, 36, 1],
    currConsolidatedCount: [2, 31, 54, 43, 5],
    issuesRaised: 135,
  },
];
