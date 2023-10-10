import styled from 'styled-components'

export const CoffeeElement = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  width: 256px;
  height: 310px;
  margin-top: 3rem;
  background: ${(props) => props.theme['base-card']};

  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;

  header {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    img {
      margin-top: -20px;
      margin-bottom: 1rem;
    }

    div {
      span + span {
        margin-left: 4px;
      }
    }
  }

  h1 {
    font-size: 24px;
    margin-bottom: -1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }

  p {
    font-size: 14px;
    line-height: 1.3;
    text-align: center;
    margin: 5px 5px;
    color: ${(props) => props.theme['base-label']};
  }
`

export const CoffeeTag = styled.span`
  font-size: 10px;
  font-weight: bold;
  padding: 4px 8px 4px;
  border-radius: 8px;
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CoffeeFooter = styled.footer`
  line-height: 1.3;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-size: 24px;
    float: left;

    span {
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
    }
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    padding: 0.25rem 0.5rem 0.25rem;
    border: none;
    cursor: pointer;
    background-color: ${(props) => props.theme['purple-dark']};
    color: ${(props) => props.theme.white};
    border-radius: 8px;
  }

  button[type='submit']:hover {
    background-color: ${(props) => props.theme.purple};
  }

  form {
    display: flex;
    gap: 0.5rem;
    flex-direction: row;
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
