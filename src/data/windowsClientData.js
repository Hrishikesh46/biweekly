import windowsLogo from '../assets/windows.png';

import ishita from '../assets/TeamMembers/Ishita.webp';
import aditi from '../assets/TeamMembers/Aditi.webp';
import sonali from '../assets/TeamMembers/Sonali.webp';
import pratiksha from '../assets/TeamMembers/Pratiksha.webp';
import khushi from '../assets/TeamMembers/Khushi.webp';

export const WindowsClientData = [
  {
    client: 'Windows',
    clientLogo: windowsLogo,
    clientMembers: [
      {
        name: 'Ishita Singh',
        nickname: 'Bouncer ',
        client: 'Windows',
        profileImg: ishita,
        prevScore: '75',
        currScore: '162',
        courses: ['Figma UI Design'],
        rank: 1,
        CurrSeverity: [0, 6, 9, 8, 1],
      },

      {
        name: 'Sonali Anand',
        nickname: 'Sonli ',
        client: 'Windows',
        profileImg: sonali,
        prevScore: '193',
        currScore: '149',
        courses: ['JavaScript Basics'],
        rank: 2,
        CurrSeverity: [4, 1, 10, 18, 0],
      },
      {
        name: 'Aditi Bukkawar',
        nickname: 'ADT ',
        client: 'Windows',
        profileImg: aditi,
        prevScore: '49',
        currScore: '113',
        courses: [
          'Introduction to Machine Learning',
          'Natural Language Processing & Transformers',
        ],
        rank: 3,
        CurrSeverity: [0, 6, 8, 8, 1],
      },
      {
        name: 'Pratiksha Bhavsar',
        nickname: 'Naturo ',
        client: 'Windows',
        profileImg: pratiksha,
        prevScore: '42',
        currScore: '96',
        courses: [' Programming with Javascript'],
        rank: 4,
        CurrSeverity: [0, 7, 5, 5, 0],
      },
      {
        name: 'Khushi Bohre',
        nickname: 'Khushi ',
        client: 'Windows',
        profileImg: khushi,
        prevScore: 'NA',
        currScore: '14',
        courses: ['Generative AI '],
        rank: 5,
        CurrSeverity: [0, 1, 0, 2, 0],
      },
    ],
    currConsolidatedCount: [2, 21, 31, 42, 1],
    issuesRaised: 97,

  },
];
