import React from 'react';

const SelectedCard = ({player , removePlayer}) => {
  // console.log(player)
   
  const handleRemove =()=>{
    removePlayer(player)
  }

  return (
    <div className='border-2 border-gray-300  flex justify-between items-center p-3 rounded-xl'>
           <div className='flex items-center '>
             <img src={player.img} alt="" className='h-[50px] w-50px] rounded-xl' />
            <div className='ml-2'>
               <h1 className='font-bold'>{player.player_name}</h1>
             <p className='text-xs'>{player.bating_style}</p>
            </div>
           </div>
           <div>
            <img onClick={handleRemove} src="https://i.ibb.co.com/XrKS733B/Frame.png" alt="" />
           </div>
      </div>
  );
};

export default SelectedCard;