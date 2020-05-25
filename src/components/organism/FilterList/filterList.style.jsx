import { css } from 'styled-components'

const Styles = css`
display:flex;
border: 1px solid ${props => props.theme.colors.blackColor};
padding: 1rem;
margin-bottom: ${props => props.theme.tokens.tokenSpacingSm} ;
flex-direction: column;
 & ul{
     list-style-type:${props => props.theme.tokens.none};
 }
 


`

export default Styles
