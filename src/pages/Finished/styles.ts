import styled from 'styled-components'

export const FinishedContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  margin-top: 7rem;
  padding: 1rem 0 0.5rem;
`

export const FinishedText = styled.div`
  width: 50%;
  h1 {
    font-size: 32px;
    color: ${(props) => props.theme['yellow-dark']};
  }

  p {
    font-size: 20px;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Filler = styled.div`
  padding: 1.5rem;
  background-color: #fff;
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;
`

export const FinishedData = styled.div`
  width: 100%;
  padding: 2px;
  margin-top: 3rem;
  background: linear-gradient(to right, yellow, purple);
  border-top-left-radius: 8px;
  border-top-right-radius: 32px;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 8px;

  table {
    width: 100%;
    padding: 1rem;
    background-color: ${(props) => props.theme.white};
    border-top-left-radius: 8px;
    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;
    border-bottom-right-radius: 8px;

    div {
      padding: 1.5rem 0 1.5rem;
    }

    tr {
      text-align: left;
      gap: 0.5rem;
      width: 100%;

      td {
        &:last-child {
          width: 90%;
        }
      }
      span {
        margin-left: 1rem;
      }
    }
  }
`

export const FinishedImage = styled.div`
  padding-top: 5rem;
  width: 50%;

  img {
    margin-left: 10rem;
  }
`

const ICON_COLORS = {
  YellowDark: 'yellow-dark',
  Yellow: 'yellow',
  Gray: 'base-text',
  Purple: 'purple',
}
interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const IconBackground = styled.span<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin-right: 1rem;
  border-radius: 9999px;
  background-color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  color: ${(props) => props.theme.background};
`
