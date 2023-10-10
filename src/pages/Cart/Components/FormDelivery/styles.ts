import * as RadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const MainFormDelivery = styled.div`
  h1 {
    font-size: 18px;
  }
`

export const InputSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem 3rem 1rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

interface DescriptionTypes {
  variant: 'address' | 'payment'
}

export const DescriptionSection = styled.table<DescriptionTypes>`
  tr {
    display: flex;
    align-items: top;
    td {
      padding: 0.5rem;
    }
    td > span {
      font-size: 16px;
      color: ${(props) => props.theme['base-subtitle']};
    }
    span > p {
      font-size: 14px;
      color: ${(props) => props.theme['base-text']};
    }
  }

  td > svg {
    color: ${(props) =>
      props.variant === 'address'
        ? props.theme['yellow-dark']
        : props.theme.purple};
  }
`

export const FieldsSection = styled.table`
  border-collapse: separate;
  border-spacing: 15px 15px;

  input {
    height: 42px;
    padding-left: 10px;
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};
    border: 1px solid ${(props) => props.theme['base-button']};
    outline: 0;
    border-radius: 6px;
    width: 100%;

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus::placeholder {
      color: transparent;
    }

    &:focus {
      box-shadow: none;
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }

  td {
    &:first-child {
      width: 30%;
    }

    &:last-child {
      width: 10%;
    }
  }
`

export const InputComplemento = styled.div`
  position: relative;
  &::after {
    content: attr(data-required);
    font-style: italic;
    position: absolute;
    right: 8px;
    top: 50%;
    font-size: 15px;
    transform: translateY(-50%);
    color: #ccc;
  }
`

export const PaymentSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 3rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
  margin-top: 1rem;
`

export const PaymentType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  gap: 1rem;
  margin-top: 0.5rem;
`

export const PaymentButton = styled(RadioGroup.Item)`
  background: ${(props) => props.theme['base-button']};
  padding: 1.5rem;
  display: flex;
  align-items: center;

  gap: 1.5rem;
  border-radius: 6px;
  cursor: pointer;
  border: 0;
  color: ${(props) => props.theme['base-text']};
  svg {
    color: ${(props) => props.theme.purple};
  }

  &[data-state='unchecked']:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  &[data-state='checked'] {
    border: 1px solid ${(props) => props.theme.purple};
    background: ${(props) => props.theme['purple-light']};
  }
`
