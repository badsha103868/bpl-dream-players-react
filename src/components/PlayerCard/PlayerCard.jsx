import React, { useState } from 'react';
import userImg from '../../assets/user1.png'
import flagImg from '../../assets/report1.png'
import { toast } from 'react-toastify';



const PlayerCard = ({player,setAvailableBalance,availableBalance, setPurchasedPlayers, purchasedPlayers}) => {
  // chose player ar jonno usestate
  const [isSelected, setIsSelected] = useState(false);

  //  player ar balance function aro ak vave kora jai sheta
  const handleSelected =(playerData)=>{
  
    const playerPrice = parseInt(playerData.price.split("USD").join("").split(",").join(""))

  // jodi available balance kom thake then alert
   if(availableBalance<playerPrice){
    toast("Not enough coins")
    return;
   }

   if(purchasedPlayers.length === 6){
    toast("6 players already selected")
    return;
   }
    setIsSelected(true)
         setAvailableBalance(availableBalance - playerPrice);

      setPurchasedPlayers([...purchasedPlayers, playerData]) ; 
      toast("Player Purchased")
  }


  return (
    <div className="card bg-base-100  shadow-sm p-4">
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
        <button disabled={isSelected} onClick={()=>{handleSelected(player)}} className="btn ">{isSelected===true?"Selected":"Chose Player"}</button>
       </div>
      </div>
    </div>
  );
};

export default PlayerCard;