import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme.background};

  width: 75%;
  height: 6.5rem;
  top: 0;
  left: 0;
  margin-left: 10rem;
  position: fixed;

  padding: 1rem;
  nav {
    display: flex;
    gap: 1rem;

    a {
      position: relative;
      display: flex;
      align-items: center;
      padding: 0.25rem;
      background-color: ${(props) => props.theme['yellow-light']};
      color: ${(props) => props.theme['yellow-dark']};
      border-radius: 8px;

      span {
        position: absolute;
        top: -10px;
        right: -10px;
        width: 20px;
        height: 20px;
        background: ${(props) => props.theme['yellow-dark']};
        color: ${(props) => props.theme.white};
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
      }
    }
  }
`

export const SelectCity = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
  border-radius: 8px;

  overflow: hidden;

  label {
    padding: 0.5rem;
    padding-right: 0;
  }
  select {
    appearance: none;
    padding: 0.5rem;
    border: none;
    outline: 0;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    cursor: pointer;
    width: 100%;
    height: 100%;
    &::-ms-expand {
      display: none;
    }
  }
`
