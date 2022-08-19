import styled from 'styled-components'

export const ContainerButton = styled.button`

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.75rem;

  width: 100%;
  height: 3.125rem;

  background: ${(props) => props.theme['--yellow']};
  border-radius: 6px;

  border: none;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['--yellow-dark']};
  }

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  span {
    font-size: 0.875rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['--white']};
    margin-top: 4px;
    margin-left: 0.5rem;
    font-weight: bold;
  }
`