import androidLogo from '../assets/android.png';
import meeti from '../assets/TeamMembers/Meeti.webp';
import sanika from '../assets/TeamMembers/Sanika.webp';
import sahara from '../assets/TeamMembers/Sahara.webp';
import riya from '../assets/TeamMembers/Riya.webp';
import divyanshi from '../assets/TeamMembers/Divyanshi.webp';
import yashi from '../assets/TeamMembers/Yashi.webp';
import nikhil from '../assets/TeamMembers/Nikhil.webp';

export const AndroidClientData = [
  {
    client: 'Android',
    clientLogo: androidLogo,
    clientMembers: [
      {
        name: 'Nikhil Jaiswal',
        nickname: 'Jaiswal Ji',
        client: 'Android',
        profileImg: nikhil,
        prevScore: '204',
        currScore: '172',
        courses: ['Introduction to React'],
        rank: 1,
        CurrSeverity: [1, 6, 14, 13, 4],
      },

      {
        name: 'Meeti Shah',
        nickname: 'Mighty Shah',
        client: 'Android',
        profileImg: meeti,
        prevScore: '68',
        currScore: '155',
        courses: ['Programming with JavaScript'],
        rank: 2,
        CurrSeverity: [2, 7, 12, 6, 1],
      },
      {
        name: 'Sanika Mhasvekar',
        nickname: 'Sanity',
        client: 'Android',
        profileImg: sanika,
        prevScore: '104',
        currScore: '129',
        courses: [
          'Introduction to Cloud computing',
          'Database Management with SQL',
        ],
        rank: 3,
        CurrSeverity: [1, 5, 11, 9, 0],
      },
      {
        name: 'Sahara Mali',
        nickname: 'Sharara',
        client: 'Android',
        profileImg: sahara,
        prevScore: '53',
        currScore: '121',
        courses: ['Programming with JavaScript'],
        CurrSeverity: [0, 4, 15, 5, 2],
        rank: 4,
      },
      {
        name: 'Riya Kesaria',
        nickname: 'Jhansi Ki Rani',
        client: 'Android',
        profileImg: riya,
        prevScore: '11',
        currScore: '83',
        courses: ['Data Structures and Algorithms', 'Linux Cloud and DevOps'],
        rank: 5,
        CurrSeverity: [1, 2, 9, 4, 0],
      },
      {
        name: 'Divyanshi S',
        nickname: 'Divya',
        client: 'Android',
        profileImg: divyanshi,
        prevScore: 'NA',
        currScore: '70',
        courses: [
          'Introduction to DevOps',
          'DevOPS with AWS',
          'Introduction to Backend Development',
        ],
        rank: 6,
        CurrSeverity: [0, 3, 5, 7, 0],
      },

      {
        name: 'Yashi Pandey',
        nickname: 'Pandey Ji',
        client: 'Android',
        profileImg: yashi,
        prevScore: 'NA',
        currScore: '45',
        courses: ['Product Management: Initial Product Strategy and Plan'],
        rank: 7,

        CurrSeverity: [0, 2, 5, 3, 0],
      },
    ],

    currConsolidatedCount: [5, 29, 71, 47, 7],
    issuesRaised: 159
  },
];
