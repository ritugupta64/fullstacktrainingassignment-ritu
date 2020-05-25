import {css} from 'styled-components';

const Styles =  css`
  color: ${props => props.theme.colors.greyColor};
  font-size: ${props => props.headingtype === 'h2' ? props.theme.tokens.tokenfontSizeSm : props.theme.tokens.tokenSpacingXl};
  margin-bottom: ${props => props.theme.tokens.tokenSpacingSm};
`;

export default Styles