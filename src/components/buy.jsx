import { useState } from 'react'
import Modal from './modal'

function Buy() {
    const [showSettingModal,setShowSettingModal] = useState(false)
    const buyAction = async () => {
        setShowSettingModal(true);
    }

    return (
    <div class="lg:w-46 lg:h-12 w-92 h-24 rounded">
        <button class="text-center lg:text-2xl text-4xl font-bold bg-green-300 w-full h-full rounded-xl" onClick={buyAction}>Buy here!</button>
        <Modal isVisible={showSettingModal} onClose={() => setShowSettingModal(false)} disconnect={()=>{gestionDeConnection(null); window.location.reload();}} />   
    </div>
    )
}
  
export default Buy