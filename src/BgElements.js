import styled from 'styled-components'

export const BackgroundContainer = styled.div`
    position: relative;
    overflow: hidden;
  
    @supports (overflow: clip) {
      overflow: clip;
    }
`

export const Background = styled.div`
    background-image: url(${props => props.bg});
    opacity: 0.1;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
`
