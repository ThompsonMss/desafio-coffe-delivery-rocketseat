import styled from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 0;
  background: ${(props) => props.theme['--background']};

  position: fixed;
  top: 0;

  nav {

    width: 100%;
    max-width: 67.5rem;
    margin: 0 auto;
    padding: 0 1.25rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      height: 2.5rem;
      width: 5.309375rem;
    }

  }
`

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  gap: 0.75rem;
`

export const ButtonLocaltion = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: var(--default-border-radius);
  background: ${(props) => props.theme['--purple-light']};
  color: ${(props) => props.theme['--purple-dark']};

  padding: 0.5rem;

  gap: 0.25rem;
  cursor: pointer;
  
  svg {
    color: ${(props) => props.theme['--purple']};
  }
`

export const ContainerLayout = styled.div`
  width: 100%;
  margin-top: 6.5rem;
`