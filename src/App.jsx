
import './App.css'

import AvailablePlayers from './components/AvailablePlayers/AvailablePlayers'
import SelectedPlayers from './components/SelectedPlayers/SelectedPlayers'
import Navbar from './components/Navbar/Navbar'
import { Suspense, useState } from 'react'
import { ToastContainer} from 'react-toastify';

  const fetchPlayers = async()=>{
    const res = await fetch('/players.json')
    return res.json()
  }

    // async await diya fetch korle aikhane age oi function k call korte hobe na hole error deba

const playerPromise = fetchPlayers();

function App() {

  // toggoling state
  const [toggle, setToggle] = useState(true);

  // availableBalance ar jonno state
  const [availableBalance, setAvailableBalance] = useState(20000000)

  // selected players state
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);
  
  // removeData

  const removePlayer =(player)=>{
    // console.log(player);
    const filteredData = purchasedPlayers.filter(ply => ply.player_name !== player.player_name)
    setPurchasedPlayers(filteredData);
    // jodi remove ar por coin jog korte cai tahola 
    setAvailableBalance (availableBalance + parseInt(player.price.split("USD").join("").split(",").join("")));
  }
  

  return (
  <>
   
  <Navbar availableBalance={availableBalance}></Navbar>
  
  <div className=' max-w-[1200px] mx-auto flex justify-between items-center'>
    <h1 className='font-bold text-2xl'>
      {
        toggle===true? "Available Players":`Selected Player (${purchasedPlayers.length}/6)`
      }
    </h1>

    <div className='font-bold'>
      <button onClick={()=>setToggle(true)} className={`py-3 px-4 border-1 border-gray-400 rounded-l-2xl border-r-0 ${toggle=== true?"bg-[#E7FE29]":""}`}>Available</button>
      <button onClick={()=>setToggle(false)} className={`py-3 px-4  border-1 border-gray-400 rounded-r-2xl border-l-0 ${toggle===false?"bg-[#E7FE29]":""}`}>Selected <span>({purchasedPlayers.length})</span></button>
    </div>

  </div>

  {/* toggles use */}
   
   {
    toggle === true? <Suspense fallback = {<span className="loading loading-spinner loading-xl"></span>}>


    <AvailablePlayers playerPromise ={playerPromise}  setAvailableBalance={setAvailableBalance} availableBalance={availableBalance} purchasedPlayers={purchasedPlayers} setPurchasedPlayers={setPurchasedPlayers} ></AvailablePlayers>

  </Suspense>:<SelectedPlayers purchasedPlayers={purchasedPlayers} removePlayer={removePlayer} toggle={toggle} setToggle={setToggle} ></SelectedPlayers>
   }

 

  <ToastContainer/>
  </>
  )
}

export default App
