import styled from 'styled-components'

export const Container = styled.main`

    width: 100%;
    max-width: 67.5rem;
    margin: 0 auto;
    padding: 2.5rem 0;

    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    flex-wrap: wrap;

    @media (max-width: 1120px) {
      padding: 2.5rem 1.25rem;
    }
`

interface ItemProps {
  colorIcon: '--yellow-dark' | '--purple';
}

export const LabelCompleteOrder = styled.div<ItemProps>`

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  margin-bottom: 2rem;

  svg {
    font-size: 1.375rem;
    margin-right: 0.5rem;
    color: ${(props) => props.theme[props.colorIcon]};
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }

  p {
    color: ${(props) => props.theme['--base-subtitle']};
    font-size: var(--font-size-m);
  }

  span {
    color: ${(props) => props.theme['--base-text']};
    font-size: var(--font-size-s);
  }

`

export const CompleteOrder = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;
  max-width: 40rem;

  margin-right: 2rem;

  flex: 1 1 300px;

  @media (max-width: 680px) {
    max-width: none;
    margin-right: 0;
  }

  h3 {
    font-size: var(--font-size-title-xs);
    color: ${(props) => props.theme['--base-subtitle']};
    margin-bottom: 0.9375rem;
  }
`

const BaseCardCompleteOrder = styled.div`

  width: 100%;

  background:${(props) => props.theme['--base-card']};
  border-radius: var(--default-border-radius);

  padding: 2.5rem;
`

export const ContainerAddress = styled(BaseCardCompleteOrder)`
  margin-bottom: 0.75rem;
`

export const ContainerTypeOfPayment = styled(BaseCardCompleteOrder)``

export const ContainerCart = styled.aside`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  flex: 1 1 300px;

  width: 100%;
  max-width: 28rem;

  @media (max-width: 680px) {
    max-width: none;
  }

  h3 {
    font-size: var(--font-size-title-xs);
    color: ${(props) => props.theme['--base-subtitle']};
    margin-bottom: 0.9375rem;

    @media (max-width: 680px) {
      margin-top: 2rem;
    }
  }

`

export const Cart = styled(BaseCardCompleteOrder)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`

export const ContainerForm = styled.div`

  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1rem;
`

export const Row = styled.div`

  width: 100%;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1rem;
`
