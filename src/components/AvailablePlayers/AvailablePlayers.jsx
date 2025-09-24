import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playerPromise,setAvailableBalance, availableBalance ,setPurchasedPlayers, purchasedPlayers}) => {

  const playerData = use(playerPromise )
  // console.log("Fetch Data", playerData);
  return (
    <div  className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

     {
      playerData.map(player => <PlayerCard player={player} setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers}  ></PlayerCard>)
     }

     
  </div>
  );
};

export default AvailablePlayers;