import androidLogo from "../assets/android.png";
import meeti from "../assets/TeamMembers/Meeti.webp";
import sanika from "../assets/TeamMembers/Sanika.webp";
import sahara from "../assets/TeamMembers/Sahara.webp";
import riya from "../assets/TeamMembers/Riya.webp";
import divyanshi from "../assets/TeamMembers/Divyanshi.webp";
import yashi from "../assets/TeamMembers/Yashi.webp";
import nikhil from "../assets/TeamMembers/Nikhil.webp";
import Pooja from "../assets/NewCategoryAsset/pooja.webp";

export const AndroidClientData = [
  {
    client: "Android",
    clientLogo: androidLogo,
    clientMembers: [
      {
        name: "Nikhil Jaiswal",
        nickname: "Jaiswal Ji",
        client: "Android",
        profileImg: nikhil,
        prevScore: "199",
        currScore: "216",
        courses: ["React Basics", "Meta Backend Developer"],
        extraActivity: [
          "Voice Collection task",
          "Reliance family day volunteering",
        ],
        rank: 1,
        prevSeverity: [1, 7, 15, 18, 4],
        currSeverity: [1, 8, 17, 19, 0],
      },
      {
        name: "Divyanshi S",
        nickname: "Divya",
        client: "Android",
        profileImg: divyanshi,
        prevScore: "80",
        currScore: "161",
        courses: ["Spring Framework", "Introduction to spring boot"],
        extraActivity: [
          "Reliance Family day volunteering",
          "Helped in Analytics Dashboard",
        ],
        rank: 2,
        prevSeverity: [0, 3, 7, 7, 0],
        currSeverity: [0, 5, 17, 11, 0],
      },
      {
        name: "Yashi Pandey",
        nickname: "Pandey Ji",
        client: "Android",
        profileImg: yashi,
        prevScore: "53",
        currScore: "160",
        courses: [
          "Product Management: Initial Product Strategy and Plan",
          "Introduction to Agile and Scrum",
        ],
        rank: 3,
        extraActivity: ["Danced in Christmas event", "Voice collection task"],
        prevSeverity: [0, 2, 5, 4, 0],
        currSeverity: [1, 7, 14, 8, 0],
      },

      {
        name: "Meeti Shah",
        nickname: "Mighty Shah",
        client: "Android",
        profileImg: meeti,
        prevScore: "155",
        currScore: "131",
        courses: ["Digital Product Management", "Software Product Management"],
        extraActivity: [
          "Annual R-Sports (Table Tennis)",
          "Biweekly Figma UI Design",
        ],
        rank: 4,
        prevSeverity: [2, 7, 12, 6, 1],
        currSeverity: [0, 10, 9, 2, 0],
      },
      {
        name: "Sahara Mali",
        nickname: "Sharara",
        client: "Android",
        profileImg: sahara,
        prevScore: "137",
        currScore: "130",
        courses: ["Introduction to spring boot"],
        extraActivity: ["Helped in Analytics Dashboard"],
        prevSeverity: [0, 5, 16, 5, 2],
        currSeverity: [1, 3, 13, 10, 1],
        rank: 5,
      },
      {
        name: "Sanika Mhasvekar",
        nickname: "Sanity",
        client: "Android",
        profileImg: sanika,
        prevScore: "152",
        currScore: "83",
        courses: ["AWS Fundamentals"],
        extraActivity: ["Christmas Decoration"],
        rank: 6,

        prevSeverity: [1, 5, 15, 9, 0],
        currSeverity: [0, 4, 9, 2, 0],
      },

      {
        name: "Riya Kesaria",
        nickname: "Jhansi Ki Rani",
        client: "Android",
        profileImg: riya,
        prevScore: "91",
        currScore: "67",
        courses: ["Data structure and algorithm", "Figma essentials"],
        extraActivity: [
          "Reliance family day volunteering",
          "Voice collection task",
        ],
        rank: 7,
        prevSeverity: [1, 2, 10, 5, 0],
        currSeverity: [0, 3, 5, 6, 0],
      },
      {
        name: "Pooja Kadam",
        nickname: "Pooja Ma'am",
        client: "Android",
        profileImg: Pooja,
        prevScore: "NA",
        currScore: "15",
        courses: ["Introduction to SAP MM"],
        extraActivity: [],
        rank: 8,
        prevSeverity: [0, 0, 0, 0, 0],
        currSeverity: [1, 1, 0, 0, 0],
      },
    ],

    prevConsolidatedCount: [5, 31, 80, 54, 7],
    currConsolidatedCount: [4, 40, 85, 58, 1],
    issuesRaised: 189,
  },
];
