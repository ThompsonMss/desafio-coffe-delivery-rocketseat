import styled from 'styled-components'

interface Props {
  small?: boolean;
}

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-radius: var(--default-border-radius);

  background: ${(props) => props.theme['--base-button']};

  span {
    padding: 0 0.3125rem;
  }
`

const BaseButton = styled.button<Props>`
  border: none;
  width: 1.625rem;
  height: ${(props) => props.small ? '2rem' : '2.375rem'};

  display: flex;
  align-items: center;
  justify-content: center;

  background: ${(props) => props.theme['--base-button']};
  
  cursor: pointer;

  &:focus {
    outline: 0;
    box-shadow: none;
  }

  &:hover {

    svg {
      color:  ${(props) => props.theme['--purple']};
    }

  }
`

export const ButtonMinus = styled(BaseButton)`
  border-top-left-radius: var(--default-border-radius);
  border-bottom-left-radius: var(--default-border-radius);
`

export const ButtonPlus = styled(BaseButton)`
  border-top-right-radius: var(--default-border-radius);
  border-bottom-right-radius: var(--default-border-radius);
`
