import { addManyGiffsActions } from "../Store/giffReducer";


export const fetchGiffs = () => {
   return function(dispatch) {
       fetch('api.giphy.com/v1/gifs/trending?api_key=G6IUk4p6wt1cmihk94u2EFYxYMfdGX5W')
       .then(response => response.json())
       .then(json => dispatch(addManyGiffsActions(json)))
       
       
   }
}