import { useState,useEffect } from 'react'

function Liste() {
  const [Liste, setListe] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch countdown value from backend
  const fetchListe = async () => {
    try {
      const response = await fetch("https://themillionseconds.onrender.com/liste");
      const data = await response.json();
      if(data.liste.length ==0){
        setListe([]);
      }else{
        setListe(data.liste);
      }
    } catch (err) {
      setError("Failed to fetch liste");
    }
  };

  // Fetch countdown every second to show live updates
  useEffect(() => {
    fetchListe(); // Fetch immediately on load
    const interval = setInterval(fetchListe, 1000);
    
    return () => clearInterval(interval);
  }, []);
  if(Liste.length == 0){
    return(
    <>
      <div class="lg:h-72 lg:w-92 h-146 w-146 border-t-4 border-b-4 border-gray-800 grid grid-rows-8 ">
        <div class=" place-self-center text-2xl font-bold mt-5"></div>
        <div class=" place-self-center lg:text-2xl text-4xl font-bold mt-5"><h1>There aren't any for the moment</h1></div>
      </div>
    </>
    )
  }else{
  return (
    <>
      <div class="lg:h-72 lg:w-92 h-146 w-146 border-t-4 border-b-4 border-gray-800 grid grid-rows-8 ">
        <div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-red-500"><h1>{Liste[0].amount} sec - {Liste[0].name}</h1></div>
        {Liste[1]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"></div>:<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"><h1>{Liste[1].amount} sec - {Liste[1].name}</h1></div>}
        {Liste[2]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"></div>:<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"><h1>{Liste[2].amount} sec - {Liste[2].name}</h1></div>}
        {Liste[3]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"></div>:<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5"><h1>{Liste[3].amount} sec - {Liste[3].name}</h1></div>}
        {Liste[4]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-gray-600"></div>:<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-gray-600"><h1>{Liste[4].amount} sec - {Liste[4].name}</h1></div>}
        {Liste[5]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-gray-400"></div>:<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-gray-400"><h1>{Liste[5].amount} sec - {Liste[5].name}</h1></div>}
        {Liste[5]==undefined?<div class=" place-self-center lg:text-2xl text-5xl font-bold mt-5 text-gray-600"></div>:<div class="row-span-2 place-self-center lg:text-2xl text-5xl font-bold mt-5"><h1>AND MORE</h1></div>}
      </div>
    </>
  )
 }
}

export default Liste