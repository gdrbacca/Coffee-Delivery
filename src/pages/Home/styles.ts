import styled from 'styled-components'

export const TituloLista = styled.h1`
  font-size: 32px;
  margin-top: 7rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ListCoffes = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ul {
    list-style-type: none;
    overflow: hidden;
    width: 80%;
    margin-left: 10%;
    li {
      margin-right: 4rem;
      float: left;
    }
    li:nth-child(4n) {
      margin-right: 0;
    }
    li:nth-child(4n + 1) {
      clear: left;
    }
  }
`
