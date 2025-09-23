import React, { use } from 'react';
import userImg from '../../assets/user1.png'
import flagImg from '../../assets/report1.png'


const AvailablePlayers = ({playerPromise }) => {

  const playerData = use(playerPromise )
  console.log("Fetch Data", playerData);
  return (
    <div  className='max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4'>

     {
      playerData.map(player =>  <div className="card bg-base-100  shadow-sm p-4">
         <figure>
          <img className='w-full h-[300px] object-cover'
           src={player.player_image}
           alt="Shoes" />
         </figure>
       <div className="mt-4">
         <div className='flex'>
            <img src={userImg} alt="" /><h2 className="card-title ml-2">{player.player_name}</h2>
         </div>
        <div className='flex  justify-between mt-4 border-b-1 border-gray-400 pb-2'>
           <div className='flex items-center gap-1'>
            <img className='w-[20px] h-[20px]' src={flagImg} alt="" /> <span>{player.player_country}</span>
           </div>
         <button className='btn'>{player.playing_role}</button>  
        </div>

        <div className='flex justify-between font-bold mt-4'>
           <span>Rating</span>
           <span>{player.rating}</span>
        </div>

        <div className='flex justify-between mt-4'>
           <span className='font-bold'>{player.bating_style}</span>
           <span>{player.bowling_style}</span>
        </div>


       <div className="card-actions mt-3 flex justify-between items-center">
        <p className='font-bold'>Price: ${player.price}</p>
        <button className="btn ">Choose Player</button>
       </div>
      </div>
    </div>)
     }

     
  </div>
  );
};

export default AvailablePlayers;