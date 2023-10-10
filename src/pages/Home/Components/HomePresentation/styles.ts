import styled from 'styled-components'

const ICON_COLORS = {
  YellowDark: 'yellow-dark',
  Yellow: 'yellow',
  Gray: 'base-text',
  Purple: 'purple',
}
interface IconProps {
  iconColor: keyof typeof ICON_COLORS
}

export const PresentationContainer = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 1rem 0 0.5rem;
`
export const PresentationText = styled.div`
  width: 50%;

  p {
    margin-top: 0.5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }

  table {
    width: 100%;
    min-width: 600px;
    margin-top: 5rem;
    font-family: 'Roboto', sans-serif;
    font-size: 16;
    line-height: 1.3;
    border-collapse: collapse;

    td {
      display: inline-flex;
      align-items: center;
      text-align: left;
      gap: 0.5rem;
      padding: 6px;
      width: 50%;
    }
  }
`

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

export const PresentationImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
`
