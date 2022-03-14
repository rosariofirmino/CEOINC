import React from 'react'
import Debbie from '../../images/teamImages/debbie-millhouse.png'
import Randy from '../../images/teamImages/Randy-Holloran.png'
import Mark from '../../images/teamImages/Mark-Collins-1.png'
import Don from '../../images/teamImages/Don-v4.png'
import Annemarie from '../../images/teamImages/AnneMarie-Cicero.png'
import Anthony from '../../images/teamImages/Anthony-Nakvosas-1.png'
import Karie from '../../images/teamImages/Karie-Collins-.png'
import Karsh from '../../images/teamImages/Karsh-Patel.png'
import Barry from '../../images/teamImages/ceo-staff.png'
import Mary from '../../images/teamImages/mary-V2.png'
import Matt from '../../images/teamImages/Matt-Gorsuch.png'
import Katie from '../../images/teamImages/katie-2.png'
import Sarah from '../../images/teamImages/sarah-fuller.png'
import Chris from '../../images/teamImages/Chris-Stroud-2.png'
import Annette from '../../images/teamImages/annette.png'


import { TeamCard, TeamContainer, TeamH1, TeamH2, TeamIcon, TeamP, TeamWrapper } from './TeamElements'
import HorizontalScroll from 'react-scroll-horizontal'

const Team = () => {
  return (
    <TeamContainer id="team">
        <TeamH1>Our Team</TeamH1>
        
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
                <TeamIcon src={Annemarie}/>
                <TeamH2>AnneMarie Cicero</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Anthony}/>
                <TeamH2>Anthony Nakvosas</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Karie}/>
                <TeamH2>Karie Collins</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Karsh}/>
                <TeamH2>Karsh Patel</TeamH2>
                <TeamP>Business Development Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Barry}/>
                <TeamH2>Barry Doctor</TeamH2>
                <TeamP>Recruiting Manager</TeamP>
            </TeamCard>
            <TeamCard>
                <TeamIcon src={Mary}/>
                <TeamH2>Mary Cheshareck</TeamH2>
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
                <TeamIcon src={Chris}/>
                <TeamH2>Chris Stroud</TeamH2>
                <TeamP>Business Development Manager</TeamP>
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