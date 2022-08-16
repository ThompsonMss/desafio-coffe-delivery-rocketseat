import styled, { css } from 'styled-components'

interface ContainerInputProps {
  width: string;
  optional?: string;
}

export const ContainerInput = styled.div<ContainerInputProps>`
  position: relative;

  width: 100%;
  max-width: ${(props) => `${props.width}rem`};

  height: 2.625rem;
  border: 1px solid ${(props) => props.theme['--base-button']};

  border-radius: 4px;

  background: ${(props) => props.theme['--base-input']};

  @media (max-width: 680px) {
    max-width: none;
  }

  input {

    ${(props) => {
      if (props.optional)
        return css`padding: 0 4.0625rem 0 0.75rem;`

      return css`padding: 0 0.75rem;`
    }};

    width: 100%;
    height: 2.625rem;

    border: none;
    border-radius: 4px;

    background: transparent;

    font-size: var(--font-size-s);

    color: ${(props) => props.theme['--base-text']};

    &::placeholder {
      color: ${(props) => props.theme['--base-label']};
    }
    
  }

  span {
    font-size: 0.75rem;
    font-style: italic;
    color: ${(props) => props.theme['--base-label']};

    position: absolute;
    top: 0.6875rem;
    right: 0.75rem;
  }
`