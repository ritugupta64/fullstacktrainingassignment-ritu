import {css} from 'styled-components';

const Styles =  css`
  color: ${props => props.theme.colors.bgGrey};
  border: 1px solid ${props => props.theme.colors.blackColor};
  padding: .25rem
`;

export default Styles