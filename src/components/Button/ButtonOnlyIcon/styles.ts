import styled from 'styled-components'

export const ButtonContainer = styled.button`
  width: 2.375rem;
  height: 2.375rem;
  border: none;
  border-radius: var(--default-border-radius);

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['--purple-dark']};

  position: relative;

  cursor: pointer;

  transition: background-color .2s;

  &:hover {
    background: ${(props) => props.theme['--purple']};
  }

  &:focus {
    outline: none;
    box-shadow: none;
  }

  svg {
    color: ${(props) => props.theme['--base-card']};
  }

`