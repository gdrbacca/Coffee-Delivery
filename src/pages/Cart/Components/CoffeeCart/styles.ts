import styled from 'styled-components'

export const CoffeeElementCart = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  width: 400px;
  padding: 8px 4px 8px;
  background: ${(props) => props.theme['base-card']};

  img {
    width: 64px;
    height: 64px;
    margin-right: 1.25rem;
  }

  h1 {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 16px;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  span {
    font-size: 16px;
    font-weight: 700;
    margin-left: 1.5rem;
    white-space: nowrap;
    color: ${(props) => props.theme['base-text']};
  }

  div > footer {
    margin-top: 0.875rem;
    display: flex;
    gap: 1rem;
  }
`

export const ButtonRemove = styled.button`
  display: flex;
  align-items: center;
  padding: 6.5px 8px 6.5px;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }

  svg {
    color: ${(props) => props.theme.purple};
  }
`

export const NumberInput = styled.div`
  border: none;
  width: 72px;
  height: 38px;

  display: flex;
  border-radius: 8px;
  overflow: hidden;

  input[type='number'] {
    -webkit-appearance: textfield !important;
    -moz-appearance: textfield !important;
    appearance: textfield !important;
  }
  input[type='number']::-webkit-inner-spin-button,
  input[type='number']::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
`

export const InputPlusMinus = styled.input`
  text-align: center;
  height: 100%;
  width: 39%;
  border: none;
  font-size: 16px;
  background: ${(props) => props.theme['base-button']};
`

export const ButtonPlusMinus = styled.button`
  height: 100%;
  width: 30%;
  background: ${(props) => props.theme['base-button']};
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: ${(props) => props.theme.purple};

  :hover {
    color: ${(props) => props.theme['purple-dark']};
  }
`
