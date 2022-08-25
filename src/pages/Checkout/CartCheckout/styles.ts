import styled from 'styled-components'

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

const BaseCardCompleteOrder = styled.div`

  width: 100%;

  background:${(props) => props.theme['--base-card']};
  border-radius: var(--default-border-radius);

  padding: 2.5rem;
`

export const Cart = styled(BaseCardCompleteOrder)`
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
`


export const CardCoffe = styled.div`

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 1.25rem;

  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['--base-button']};
  margin-bottom: 1.5rem;

  img {
    height: 4rem;
    width: 4rem;
  }

`

export const ActionsCardCoffe = styled.div`

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  gap: 0.5rem;

  > p{
    font-size: var(--font-size-m);
    color: ${(props) => props.theme['--base-subtitle']};
  }

  > div{ 
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;

    gap: 0.5rem;
  }
`

export const PriceCardCoffe = styled.div`

  display: flex;
  align-items: flex-end;
  justify-content: flex-start;

  width: 100%;

  span {
    font-size: 1rem;
    font-weight: bold;
    text-align: right;
    width: 100%;
  }
`
export const ContainerValues = styled.div`

  display: flex;
  flex-direction: column;

  width: 100%;

  gap: 0.75rem;

  margin-bottom: 1.5rem;

  div {

    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    span {
      font-size: var(--font-size-s);
      color: ${(props) => props.theme['--base-text']};
    }

    p {
      font-size: 1.25rem;
      color: ${(props) => props.theme['--base-subtitle']};
      font-weight: bold;
    }
  }
`

export const Empty = styled.p`
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: 1px solid #ddd;
    color: #AAA;
`