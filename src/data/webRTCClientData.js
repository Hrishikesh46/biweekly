import webLogo from '../assets/webrtc.png';

import kunal from '../assets/TeamMembers/Kunal.Jaiswal.jpg';
import soumya from '../assets/TeamMembers/Soumya3.Sinha.jpg';
import alwis from '../assets/TeamMembers/Alwis.Shaji.jpg';
import ayush from '../assets/TeamMembers/Ayush_Pandey.jfif';
import aniruddh from '../assets/TeamMembers/Aniruddh.Ghewade.jpg';

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
        CurrSeverity: [0, 0, 3, 2, 0],
      },
    ],
    currConsolidatedCount: [4, 22, 33, 38, 6],
  },
];
