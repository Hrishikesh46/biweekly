import webLogo from '../assets/webrtc.png';

import kunal from '../assets/TeamMembers/Kunal.webp';
import soumya from '../assets/TeamMembers/Soumya.webp';
import alwis from '../assets/TeamMembers/Alwis.webp';
import ayush from '../assets/TeamMembers/Ayush.webp';
import aniruddh from '../assets/TeamMembers/Aniruddh.webp';

export const WebClientData = [
  {
    client: 'WebRTC',
    clientLogo: webLogo,
    clientMembers: [
      {
        name: 'Kunal Jaiswal',
        nickname: 'Kunnu ',
        client: 'WebRTC',
        profileImg: kunal,
        prevScore: '83',
        currScore: '200',
        courses: ['Start the UX Design Process'],
        rank: 1,
        CurrSeverity: [2, 13, 11, 7, 0],
      },
      {
        name: ' Soumya Sinha',
        nickname: 'Somu ',
        client: 'WebRTC',
        profileImg: soumya,
        prevScore: '140',
        currScore: '138',
        courses: ['Crash course on Python'],
        rank: 2,
        CurrSeverity: [1, 2, 10, 20, 2],
      },
      {
        name: 'Alwis Shaji',
        nickname: 'Dabeli ',
        client: 'WebRTC',
        profileImg: alwis,
        prevScore: '53',
        currScore: '82',
        courses: ['Java Spring Boot'],
        rank: 3,
        CurrSeverity: [1, 3, 5, 7, 2],
      },
      {
        name: 'Ayush Pandey',
        nickname: 'OG Pandey ',
        client: 'WebRTC',
        profileImg: ayush,
        prevScore: '35',
        currScore: '60',
        courses: ['Web development'],
        rank: 4,
        CurrSeverity: [0, 4, 4, 2, 2],
      },
      {
        name: 'Aniruddh Ghewade',
        nickname: 'Anni  ',
        client: 'WebRTC',
        profileImg: aniruddh,
        prevScore: 'NA',
        currScore: '21',
        courses: ['DevOps with AWS', 'Learning REST APIs'],
        rank: 5,
        CurrSeverity: [0, 0, 3, 2, 0],
      },
    ],
    currConsolidatedCount: [4, 22, 33, 38, 6],
  },
];
