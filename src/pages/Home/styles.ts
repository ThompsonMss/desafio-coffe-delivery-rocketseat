import styled from 'styled-components'
import background from '@/assets/images/Background.svg'

export const IntroContainer = styled.div`
  width: 100%;

  position: relative;
  z-index: 5;

  background-color: ${(props) => props.theme['--background']};
`

export const Banner = styled.div`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-position: bottom; 
  background-size: cover;

  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  opacity: .7;
  width: 100%;
  height: 100%;
`

export const WrapperInto = styled.div`
    width: 100%;
    max-width: 67.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;
`