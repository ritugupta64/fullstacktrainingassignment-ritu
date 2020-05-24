export const getCharacterData = (data, dispatch) => {
   dispatch({
       type: 'getCharacter',
       payload: data
   })
}