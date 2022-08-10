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
  background-position: center; 
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
    padding: 5.75rem 0;

    display: flex;
    justify-content: space-between;

    @media (max-width: 1120px) {
      padding: 5.75rem 1.25rem;
    }
`

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

  h1 {
    font-size: var(--font-size-xl);
  }

  p {
    color: ${(props) => props.theme['--base-subtitle']};
    font-size: var(--font-size-l);
    margin-top: 1rem;
  }

`

export const ContainerItems = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  max-width: 35.4375rem;

  margin-top: 4.125rem;
`

export const ColumnItem = styled.div`

  &:first-child {
    margin-right: 2.4rem;
  }

`

interface ItemProps {
  colorBadge: '--yellow-dark' | '--yellow' | '--purple' | '--base-text';
}

export const Item = styled.div<ItemProps>`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  margin-bottom: 1.25rem;

  div {

    display: flex;
    align-items: center;
    justify-content: center;

    width: 2rem;
    height: 2rem;

    border-radius: 50%;
    background: ${(props) => props.theme[props.colorBadge]};

    margin-right: 0.75rem;

    svg {
      font-size: 1rem;
      color: ${(props) => props.theme['--white']};
    }
  }

  span {
    color: ${(props) => props.theme['--base-text']};
    font-size: var(--font-size-m);
  }
`
