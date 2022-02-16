import React, { useEffect } from "react";
import {fetchGiffs} from '../asyncActions/giffs.js';
import {useDispatch, useSelector} from 'react-redux';
import Gifs from "./Gifs";

const Trending = () => {
  const dispatch = useDispatch();
  const giffs = useSelector((state)=>state.giffs);
  console.log(giffs);

 // useEffect(() => {
   // dispatch(fetchGiffs());
  //}, [dispatch]);

    return(
        <>
          <button onClick={()=>dispatch(fetchGiffs())}>Datas</button>
          
          {giffs.map(giff => 
                <Gifs key={giff.images.downsized_still.url} giff={giff} />
              )
          
          }
      
        
        
        
       </>
        
      //  export default Grid;
    );
}

export {Trending};