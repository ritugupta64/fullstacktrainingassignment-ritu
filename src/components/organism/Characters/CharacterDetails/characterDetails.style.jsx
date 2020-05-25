import { css } from 'styled-components'

const Styles = css`
  max-width: 262px;
  margin: ${props => props.theme.tokens.tokenSpacingSm} 0;
  padding: 0.5rem;
  background-color: ${props => props.theme.colors.fontGrey};

  figure {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    & img {
      max-width: 100%;
      border-radius: 5px 5px 0px 0px;
    }
    & figcaption {
      position: absolute;
      bottom: 0;
      background: rgba(0, 0, 0, 0.7);
      width: 100%;
      padding: 0.5rem;
      & strong {
        margin: 0;
        font-weight: 400;
        font-size: 1.2rem;
        margin-bottom: 0.5rem;
        color: ${props => props.theme.colors.whiteColor};
        display: block;
      }

      & span {
        color: ${props => props.theme.colors.whiteColor};
        display: block;
        font-size: 0.625rem;
      }
    }
  }
  
  section {
    background-color: ${props => props.theme.colors.greyColor};
    padding: 1rem;
    border-radius: 0px 0px 5px 5px;

    p {
      margin: 0;
      font-size: 0.625rem;
      color: ${props => props.theme.colors.whiteColor};
      padding: 1rem 0;
      border-bottom: 1px dotted ${props => props.theme.colors.whiteColor};
      display: flex;
      flex-wrap: wrap;

      strong {
        flex: 1;
        &:nth-child(2){
          color:${props => props.theme.colors.orangeColor};
          text-align:right;
        }
      }
      &:last-child {
        border-bottom: ${props => props.theme.tokens.none};
      }
    }
  }
`

export default Styles
