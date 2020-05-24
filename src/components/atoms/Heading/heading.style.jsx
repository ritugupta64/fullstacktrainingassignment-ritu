import {css} from 'styled-components';

const Styles =  css`
  color: ${props => props.theme.colors.greyColor};
  font-size: ${props => props.headingtype === 'h2' ? '1.5rem' : '2rem'};
  margin-bottom: 1rem;
`;

export default Styles