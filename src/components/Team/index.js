import React from 'react'
import Debbie from '../../images/teamImages/debbie-millhouse.png'
import Randy from '../../images/teamImages/Randy-Holloran.png'
import Mark from '../../images/teamImages/Mark-Collins-1.png'
import Don from '../../images/teamImages/Don-v4.png'
import Annemarie from '../../images/teamImages/AnneMarie-Cicero.png'
import Anthony from '../../images/teamImages/Anthony-Nakvosas-1.png'
import Karie from '../../images/teamImages/Karie-Collins-.png'
import Karsh from '../../images/teamImages/Karsh-Patel.png'
import Colleen from '../../images/teamImages/Colleen Prendeville.png'
import Eric from '../../images/teamImages/Eric Cox.png'
import Matt from '../../images/teamImages/Matt-Gorsuch.png'
import Katie from '../../images/teamImages/katie-2.png'
import Sarah from '../../images/teamImages/sarah-fuller.png'
import Andrea from '../../images/teamImages/Andrea Santilli.png'
import Annette from '../../images/teamImages/annette.png'


import { TitleCont, TeamH1b, TeamCard, TeamContainer, TeamH1, TeamH2, TeamIcon, TeamP, TeamWrapper } from './TeamElements'
import HorizontalScroll from 'react-scroll-horizontal'

const Team = () => {
  return (
    <TeamContainer id="team">
        <TitleCont>
        <TeamH1></TeamH1>
        <TeamH1b>Our Team</TeamH1b>
        </TitleCont>
            <HorizontalScroll>
            <TeamCard>
                <TeamIcon src={Debbie}/>
                <TeamH2>Debbie Millhouse</TeamH2>
                <TeamP>President</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Randy}/>
                <TeamH2>Randy Holloran</TeamH2>
                <TeamP>Chief Operating Officer</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Mark}/>
                <TeamH2>Mark Collins</TeamH2>
                <TeamP>Managing Director</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Don}/>
                <TeamH2>Don Cartwright</TeamH2>
                <TeamP>Partner</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Anthony}/>
                <TeamH2>Anthony Nakvosas</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Andrea}/>
                <TeamH2>Andrea Santilli</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Eric}/>
                <TeamH2>Eric Cox</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Colleen}/>
                <TeamH2>Colleen Prendeville</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Karie}/>
                <TeamH2>Karie Collins</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Matt}/>
                <TeamH2>Matt Gorsuch</TeamH2>
                <TeamP>Business Development Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Katie}/>
                <TeamH2>Katie Windhurst</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Sarah}/>
                <TeamH2>Sarah Fuller</TeamH2>
                <TeamP>Office Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Annette}/>
                <TeamH2>Annette Metcalf</TeamH2>
                <TeamP>Administrative Assisstant</TeamP>
            </TeamCard>
            </HorizontalScroll>
        
    </TeamContainer>
  )
}

export default Team