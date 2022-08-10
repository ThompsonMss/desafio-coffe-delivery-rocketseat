import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: var(--default-border-radius);

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['--yellow-light']};

  position: relative;

  cursor: pointer;

  svg {
    color: ${(props) => props.theme['--yellow-dark']};
  }

`

export const Badge = styled.div`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['--yellow-dark']};

  position: absolute;
  top: -0.375rem;
  right: -0.6875rem;

  span {
    font-weight: bold;
    font-size: 0.7rem;
    color: ${(props) => props.theme['--white']};
  }
`