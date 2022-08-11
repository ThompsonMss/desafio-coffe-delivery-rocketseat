import styled from 'styled-components'

export const Container = styled.div`
  width: 16rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${(props) => props.theme['--base-card']};
  border-radius: 6px 36px 6px 36px;

  padding: 0 1.25rem 1.25rem 1.25rem;

  img {
    width: 7.5rem;
    height: 7.5rem;
    
    margin-top: -1.25rem;

  }

  h1 {
    font-size: var(--font-size-title-s);
    color: ${(props) => props.theme['--base-subtitle']};
    text-align: center;

    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: var(--font-size-s);
    color: ${(props) => props.theme['--base-label']};
    text-align: center;
    margin-bottom: 2.0625rem;
  }

  footer {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`

export const ContainerTypeOfCoffe = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.5rem;
`

export const TypeOfCoffe = styled.div`
  background: ${(props) => props.theme['--yellow-light']};
  border-radius: 100px;

  padding: 0.25rem 0.5rem;

  span {
    color: ${(props) => props.theme['--yellow-dark']};
    font-size: 0.75rem;
    font-weight: bold;
    line-height: 130%;
  }
`

export const Price = styled.h2`
  font-size: var(--font-size-title-m);
  color: ${(props) => props.theme['--base-text']};

  &::before {
    content: 'R$';
    font-size: var(--font-size-s);
    color: ${(props) => props.theme['--base-text']};
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-right: .2rem;
  }
`

export const ContainerAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: .5rem;
`

