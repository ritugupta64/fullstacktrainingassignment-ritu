import {css} from 'styled-components';

const Styles =  css`
  color: ${props => props.theme.colors.bgGrey};
  border: 1px solid ${props => props.theme.colors.blackColor};
  padding: ${props => props.theme.tokens.tokenSpacingXs};
  margin-right: ${props => props.type === 'checkbox' ? props.theme.tokens.tokenSpacingXs : null};
  font-size: ${props => props.type === 'checkbox' ?  props.theme.tokens.tokenfontSizeXs :  props.theme.tokens.tokenfontSizeXsm};
`;

export default Styles