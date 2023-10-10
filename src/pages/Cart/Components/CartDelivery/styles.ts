import styled from 'styled-components'

export const MainCartDelivery = styled.div`
  h1 {
    font-size: 18px;
  }
`

export const DeliverySection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px;

  background-color: ${(props) => props.theme['base-card']};
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;

  hr {
    margin-top: 2rem;
    margin-bottom: 2rem;
    border: 1px solid ${(props) => props.theme['base-button']};
    width: 100%;
  }
`

export const DeliveryData = styled.table`
  margin: 1.5rem 0 1.5rem;
  width: 100%;
  tr {
    color: ${(props) => props.theme['base-text']};

    &:last-child {
      font-size: 20px;
      font-weight: bold;
      color: ${(props) => props.theme['base-subtitle']};
    }
    td {
      &:first-child {
        text-align: left;
      }
      &:last-child {
        text-align: right;
      }
    }
  }
`

export const DeliveryButton = styled.button`
  width: 100%;
  height: 46px;
  border: 0;
  border-radius: 8px;
  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;

  &:not(:disabled):hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    cursor: not-allowed;
  }
`
