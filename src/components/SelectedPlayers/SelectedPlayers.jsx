import React from 'react';
import SelectedCard from '../SelectedCard/SelectedCard';


const SelectedPlayers = ({purchasedPlayers , removePlayer, toggle, setToggle}) => {
  // console.log(purchasedPlayers)
  return (
    <div className='max-w-[1200px] mx-auto'>
      {
        purchasedPlayers.map(player => <SelectedCard player={player} removePlayer={removePlayer}></SelectedCard>)
      }
      <div onClick={()=>setToggle(true)} className='max-w-[1200px] mx-auto'>
       <button className='btn py-3 px-4  border-1 border-gray-400 rounded-2xl mt-4 bg-[#E7FE29]'>Add More Player</button>
   </div>
    </div>
  );
};

export default SelectedPlayers;