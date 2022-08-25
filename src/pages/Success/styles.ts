import styled from 'styled-components'

export const Container = styled.main`

    width: 100%;
    max-width: 67.5rem;
    margin: 0 auto;
    padding: 2.5rem 0;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    flex-wrap: wrap;

    @media (max-width: 1120px) {
      padding: 2.5rem 1.25rem;
    }

    & > h1:first-child {
      color: ${(props) => props.theme['--yellow-dark']};
      font-size: var(font-size-title-l);
      margin-top: 5rem;
      margin-bottom: 0.25rem;
    }

    & > p:first-child {
      color: ${(props) => props.theme['--base-subtitle']};
      font-size: var(font-size-l);
    }
`

export const Wrapper = styled.div`

    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

    gap: 6.375rem;

    margin-top: 2.5rem;

    flex-wrap: wrap;
`

export const ContainerInfo = styled.div`

  display: flex;
  flex: 1 1 400px;
  flex-direction: column;
  
  gap: 2rem;

  padding: 2.5rem;

  border: 1px solid transparent;

  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-left-radius: 36px;
  border-bottom-right-radius: 6px;

  border-image: linear-gradient(90deg, #DBAC2C , #8047F8);
  border-image-slice: 1;
`

export const Info = styled.div`

    display: flex;
    align-items: center;
    justify-content: flex-start;

    gap: 0.75rem;

    & > div:first-child {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;

      p {
        color: ${(props) => props.theme['--base-text']};
      }
    }
`

type ColorInfo = '--purple' | '--yellow' | '--yellow-dark';

export const Icon = styled.section<{ color: ColorInfo }>`

    height: 2.1875rem;
    width: 2.1875rem;

    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props) => props.theme[props.color]};
    border-radius: 100px;

  svg {
    color: white;
  }
`

export const Illustration = styled.div`
  img {
    width: 30.75rem;
    height: 18.3125rem;
  }
`
