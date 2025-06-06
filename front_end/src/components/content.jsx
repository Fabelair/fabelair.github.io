import { useState,useEffect } from 'react'

function Content() {
    const [content, setContent] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    // Function to fetch countdown value from backend
    const fetchContent = async () => {
      try {
        const response = await fetch("https://themillionseconds.onrender.com/url");
        const data = await response.json();
        setContent(data.url.toString());
      } catch (err) {
        setError("Failed to fetch content");
      }
    };
  
    // Fetch countdown every second to show live updates
    useEffect(() => {
      fetchContent(); // Fetch immediately on load
      const interval = setInterval(fetchContent, 1000);
      
      return () => clearInterval(interval);
    }, []);

  return (
    <>
      <div class="ring-2 h-84 w-84 grid">{content !== null ? <img class="object-cover h-84 w-84" src={content} />:<div class="place-self-center"> <h1 class="place-self-center font-bold text-center text-2xl ml-5 mr-5">Buy seconds to put what ever you want here!</h1> <h1 class="place-self-center text-center text-x ml-5 mr-5">(Will you be the one to buy a bitcoin)</h1></div>}</div>
    </>
  )
}

export default Content
