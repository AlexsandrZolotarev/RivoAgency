const CHANGE_COUNTER_PLUS = "CHANGE-COUNTER-PLUS";
const CHANGE_COUNTER_MINUS = "CHANGE-COUNTER-MINUS";
const SET_CARDS = "SET-CARDS";
let initialState = { 
    album: [],
  counterAlbum: 1,
}
const ordersReducer = (state = initialState, action) => {

  let copyState = {...state};
  switch(action.type)
    {
      case CHANGE_COUNTER_PLUS:{
        copyState.counterAlbum = {...state.counterAlbum };
        copyState.album = [...state.album];
        copyState.counterAlbum = state.counterAlbum;

        if(copyState.counterAlbum >= copyState.album.at(-1).id) return state;

        copyState.counterAlbum = state.counterAlbum + 1;
      
        return copyState;
      }
      case CHANGE_COUNTER_MINUS:{
        
        copyState.counterAlbum = {...state.counterAlbum };
        copyState.album = [...state.album];
        copyState.counterAlbum = state.counterAlbum;

        if(!(copyState.counterAlbum === 1)) copyState.counterAlbum = state.counterAlbum - 1;
        return copyState;
      }
      case SET_CARDS:{
        debugger;

        copyState.album = [...state.album];
        copyState.album = action.cards;

        return copyState;
      
      }
      default :
         return state;
    }
}

export const onChangeCounterPlus = (symbol) => ({type:CHANGE_COUNTER_PLUS, symbol: symbol});
export const onChangeCounterMinus = (symbol) => ({type:CHANGE_COUNTER_MINUS, symbol: symbol});
export const setCardsAC = (cards) => ({type:SET_CARDS, cards: cards});
  

export default ordersReducer;