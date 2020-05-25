import { css } from 'styled-components'

const Styles = css`
  cursor: ${(props) => props.theme.tokens.cursorPointer};
  color: ${(props) => props.theme.colors.greyColor};
  border: 1px solid ${(props) => props.theme.colors.blackColor};
  padding: ${(props) => props.theme.tokens.tokenSpacingXs};
`

export default Styles
