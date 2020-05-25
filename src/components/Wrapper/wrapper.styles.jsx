import { css } from 'styled-components'

const Styles = css`

display:flex;
flex-wrap: wrap;
padding: 1rem;
.container__left-column{
        flex:  0 0 20%;
        padding-right: 3rem;
     } 
.container__right-column{
       flex: 0 0 80%;
    }
 .container__top-container{
   display: flex;
}  
@media only screen and (max-width: 767px){
   .container__left-column{
      flex-basis: 100%;
      padding-right: 0;
   }
   .container__right-column{
      flex-basis: 100%;
   } 
} 

@media only screen and (min-width: 768px) and (max-width:991px){
   .container__right-column{
      flex-basis: 75%;
   } 
} 

}`

export default Styles
