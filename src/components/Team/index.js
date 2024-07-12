import React, { useEffect } from 'react';
import Debbie from '../../images/teamImages/debbie-millhouse.png';
import Randy from '../../images/teamImages/Randy-Holloran.png';
import Mark from '../../images/teamImages/Mark-Collins-1.png';
import Don from '../../images/teamImages/Don-v4.png';
import Anthony from '../../images/teamImages/Anthony-Nakvosas-1.png';
import Karie from '../../images/teamImages/Karie-Collins-.png';
import Colleen from '../../images/teamImages/Colleen Prendeville.png';
import Sarah from '../../images/teamImages/sarah-fuller.png';
import Ben from '../../images/teamImages/BenKoczab.png';
import Annette from '../../images/teamImages/annette.png';
import Acacia from '../../images/teamImages/acacia.png';
import Stacy from '../../images/teamImages/stacy.png';


import {
  TitleCont,
  TeamH1b,
  TeamCard,
  TeamContainer,
  TeamH1,
  TeamH2,
  TeamIcon,
  TeamP,
  TeamScroll
} from './TeamElements';

const Team = () => {


  return (
    <TeamContainer id='team'>
      <TitleCont>
        <TeamH1></TeamH1>
        <TeamH1b>Our Team</TeamH1b>
      </TitleCont>
      <TeamScroll id='team-horizontal-scroll'>
        <a href='https://www.linkedin.com/in/debby-millhouse-095293' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Debbie} />
          <TeamH2>Debbie Millhouse</TeamH2>
          <TeamP>President</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/holloran' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Randy} />
          <TeamH2>Randy Holloran</TeamH2>
          <TeamP>Chief Operating Officer</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/mark1collins' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Mark} />
          <TeamH2>Mark Collins</TeamH2>
          <TeamP>Managing Director</TeamP>
        </TeamCard>
        </a>
        <a href='https://linkedin.com/in/don-cartwright-17866' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Don} />
          <TeamH2>Don Cartwright</TeamH2>
          <TeamP>Partner</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/anthonynakvosas' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Anthony} />
          <TeamH2>Anthony Nakvosas</TeamH2>
          <TeamP>Recruiting Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/kariecollins' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Karie} />
          <TeamH2>Karie Collins</TeamH2>
          <TeamP>Recruiting Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://linkedin.com/in/ben-koczab-2924a627' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Ben} />
          <TeamH2>Ben Koczab</TeamH2>
          <TeamP>Recruiting Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/acacia-towers/' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Acacia} />
          <TeamH2>Acacia Towers</TeamH2>
          <TeamP>Recruiting Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://linkedin.com/in/stacy-f-164592221' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Stacy} />
          <TeamH2>Stacy F</TeamH2>
          <TeamP>Recruiting Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/sarah-fuller-401822168' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Sarah} />
          <TeamH2>Sarah Fuller</TeamH2>
          <TeamP>Office Manager</TeamP>
        </TeamCard>
        </a>
        <a href='https://www.linkedin.com/in/annette-metcalf-6814943' target='_blank' style={{ textDecoration: 'none' }}>
        <TeamCard>
          <TeamIcon src={Annette} />
          <TeamH2>Annette Metcalf</TeamH2>
          <TeamP>Administrative Assisstant</TeamP>
        </TeamCard>
        </a>
      </TeamScroll>
    </TeamContainer>
  );
};

export default Team;
