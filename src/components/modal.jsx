import React, { useEffect, useState } from 'react'
import axios from "axios";
const Modal = ({isVisible, onClose,disconnect}) => {
    const [countdown, setCountdown] = useState(null);
    const fetchCountdown = async () => {
        try {
        const response = await fetch("https://themillionseconds.onrender.com/realCountdown");
        const data = await response.json();
        setCountdown(data.countdown);
        } catch (err) {
        setError("Failed to fetch countdown");
        }
    };
    useEffect(() => {
        fetchCountdown(); // Fetch immediately on load
        const interval = setInterval(fetchCountdown, 500);
        
        return () => clearInterval(interval);
    }, []);
    const [content, setContent] = useState(null);
    const [amount, setAmount] = useState("");
    if (!isVisible) return null;
    const handleClose = (e) =>{
        if(e.target.id === 'wrapper') onClose();
    }
    const changeContent =() =>{
        let cont = document.getElementById("url").value 
        setContent(cont);
    }
    const changeAmount =(amount) =>{
        let cont
        if(amount == undefined){
            cont = document.getElementById("amount").value 
        }else{
            cont = amount;
        }
        setAmount(cont);
    }
    const pay = async()=>{
        let amount = document.getElementById("amount").value
        let url = document.getElementById("url").value 
        let username = document.getElementById("username").value 
        if(amount > 99999||amount<5||username.length==0){
            console.log("the data entered is not valid")
            return;
        }
        try {
            const response = await axios.request({
                method: 'POST',
                url: `https://themillionseconds.onrender.com/pay`,
                headers: {
                },
                data: {
                    amount:Math.round(amount),
                    url:url,
                    username:username
                },
              
              })
            const data = await response.data;
            console.log(data)
            window.location.href =data.url;
          } catch (err) {
            console.log(err);
          }
    }
return (
    <div className='fixed inset-0  flex grid backdrop-blur-sm' id="wrapper" onClick={handleClose}>
        <div className="absolute w-112 ring-2 h-190 flex flex-col bg-white rounded-xl place-self-center shadow-xl" >
            <div class="grid grid-cols-8">
                <h1 class="col-span-7 place-self-center text-4xl mt-2 font-bold">Purchase here!</h1>
                <button onClick={()=>{onClose()}} class=" col-start-8  bg-red-400 rounded h-10 w-10 text-xl font-bold mr-5 mt-4 place-self-center">X</button>
            </div>
            <div class=" mt-5 h-full ml-5 mr-5 mb-5">
                <div class=" h-26">
                    <div class="h-13  grid grid-cols-3">
                        <button class=" mt-1 mb-1 ml-1 mr-1 rounded-xl bg-gray-200 hover:bg-blue-200"onClick={()=>{changeAmount(5)}}>5</button>
                        <button class=" mt-1 mb-1 ml-1 mr-1 rounded-xl bg-gray-200 hover:bg-blue-200" onClick={()=>{changeAmount(10)}}>10</button>
                        <button class=" mt-1 mb-1 ml-1 mr-1 rounded-xl bg-gray-200 hover:bg-blue-200"onClick={()=>{changeAmount(30)}}>30</button>
                    </div>
                    <input type="number"  value={amount} onChange={()=>{changeAmount()}} placeholder="Amount of seconds" id="amount" class="w-full h-11 mt-1 mb-1 ring rounded p-4"></input>
                </div>
                <h1 class="place-self-center mt-2 text-gray-500">Minimum: 5 | Maximum: 99999</h1>
                <h1 class="mt-5 text-gray-600">URL to an Image or gif</h1>
                <input type="text" placeholder="https://www.gif.com" id="url" class="w-full h-6 mt-1 mb-1 ring rounded p-4" onChange={()=>{changeContent()}}></input>
                <div class="ring grid mt-2 w-[100%] h-64 place-self-center">{content !== null ? <img class="object-cover h-64 w-[100%]" src={content} />:<h1 class="place-self-center font-bold text-center text-2xl ml-5 mr-5">Preview</h1>}</div>
                <h1 class="text-gray-500 mt-5">Username</h1>
                <input type="text" maxLength="16" placeholder="max 16 characters" id="username" class="w-full h-6 mt-1 mb-1 ring rounded p-4" onChange={()=>{changeContent()}}></input>
                <div class="ring mt-5"></div>
                <div class="h-16 grid grid-cols-2">
                    <button class="bg-green-300 w-32 h-10 place-self-center rounded font-bold text-2xl" onClick={()=>{pay()}}>PAY</button>
                    <h1 class="place-self-center font-bold text-2xl">{amount} $ USD</h1>
                </div> 
                {countdown==amount?<p class="text-green-600 text-sm mt-2">You are buying a bitcoin!</p>:<p class="text-gray-400 text-sm mt-2">You are not buying a bitcoin</p>}           
            </div>
        </div>
    </div>
);
}

export default Modal;