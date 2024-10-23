import macLogo from '../assets/MacOS.png';
import ameya from '../assets/TeamMembers/Ameya.webp';
import nikita from '../assets/TeamMembers/Nikita.webp';
import isha from '../assets/TeamMembers/Isha.webp';
import mansa from '../assets/TeamMembers/Mansa.webp';

export const MacOSClientData = [
  {
    client: 'MacOS',
    clientLogo: macLogo,
    clientMembers: [
      {
        name: 'Ameya Deodhar',
        nickname: 'Amoy ',
        client: 'MacOS',
        profileImg: ameya,
        prevScore: '81',
        currScore: '147',
        courses: ['Figma UI Design'],
        rank: 1,
        CurrSeverity: [1, 7, 10, 10, 0],
      },{
        name: 'Mansa Sharma',
        nickname: 'Mansedi ',
        client: 'MacOS',
        profileImg: mansa,
        prevScore: '68',
        currScore: '95',
        courses: ['Introduction to SQL'],
        rank: 2,
        CurrSeverity: [1, 2, 9, 8, 0],
      },
      {
        name: 'Nikita Bharati',
        nickname: 'Pookie',
        client: 'MacOS',
        profileImg: nikita,
        prevScore: '140',
        currScore: '92',
        courses: ['React - The Complete Guide 2024 ', 'Next.js & Redux'],
        rank: 3,
        CurrSeverity: [1, 3, 7, 7, 2],
      },
      
      {
        name: 'Isha Wargad',
        nickname: 'Designer ',
        client: 'MacOS',
        profileImg: isha,
        prevScore: '24',
        currScore: '52',
        courses: ['Figma UI Design'],
        rank: 4,
        CurrSeverity: [0, 2, 4, 5, 1],
      },
    ],

    currConsolidatedCount: [3, 14, 30, 30, 3],
    issuesRaised: 80,

  },
];
