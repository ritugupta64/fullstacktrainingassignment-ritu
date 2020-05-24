import { css } from 'styled-components'

const Styles = css`
  max-width: 300px;
  margin: 1rem .5rem;
  padding: 0.5rem;
  background-color: #1f232a;

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
    }
  }
  &__name {
    margin: 0;
    font-weight: 400;
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  &__id {
  }

  &__demographic {
    background-color: #333333;
    padding: 1rem;
    border-radius: 0px 0px 5px 5px;
  }
   p{
    margin: 0;
    font-size: 0.625rem;
    color: #fff;
    padding: 1rem 0;
    border-bottom: 1px solid #fff;
    display: flex;
    flex-wrap: wrap;
  
     strong{
       flex: 1
     }
     &:last-child{
       border-bottom: 0px;
     }
   }
`

export default Styles
