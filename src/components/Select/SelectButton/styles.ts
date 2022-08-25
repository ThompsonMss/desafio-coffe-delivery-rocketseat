import styled, { css } from 'styled-components'

export const ContainerButton = styled.button<{ activeButton: boolean }>`

  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0.75rem;

  width: 100%;
  height: 3.125rem;

  background: ${(props) => props.theme['--base-button']};
  border-radius: 6px;

  border: 1px solid ${(props) => props.theme['--base-button']};

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['--base-hover']};
  }

  &:focus {
    background: ${(props) => props.theme['--purple-light']};
    box-shadow: 0 0 0 2px ${(props) => props.theme['--purple']};
  }

  ${(props) => {
    if (props.activeButton) {

      return css`background: ${props.theme['--purple-light']};
                 box-shadow: 0 0 0 2px ${props.theme['--purple']};
                `
    }
  }}

  svg {
    font-size: 1rem;
    color: ${(props) => props.theme['--purple']};
  }

  span {
    font-size: 0.75rem;
    text-transform: uppercase;
    color: ${(props) => props.theme['--base-text']};
    margin-top: 4px;
    margin-left: 0.5rem;
  }
`