import { useState } from 'react'
import Modal from './modal'

function Buy() {
    const [showSettingModal,setShowSettingModal] = useState(false)
    const buyAction = async () => {
        setShowSettingModal(true);
    }

    return (
    <div class="w-46 h-12 rounded">
        <button class="text-center text-2xl font-bold bg-green-300 w-full h-full rounded-xl" onClick={buyAction}>Buy here!</button>
        <Modal isVisible={showSettingModal} onClose={() => setShowSettingModal(false)} disconnect={()=>{gestionDeConnection(null); window.location.reload();}} />   
    </div>
    )
}
  
export default Buy