import { useState, useEffect } from "react";

const Counter = () => {
  const [countdown, setCountdown] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch countdown value from backend
  const fetchCountdown = async () => {
    try {
      const response = await fetch("https://themillionseconds.onrender.com/countdown");
      const data = await response.json();
      setCountdown(data.countdown);
    } catch (err) {
      setError("Failed to fetch countdown");
    }
  };

  // Fetch countdown every second to show live updates
  useEffect(() => {
    fetchCountdown(); // Fetch immediately on load
    const interval = setInterval(fetchCountdown, 1000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <>
    <h1 class="text-8xl font-bold">{countdown !== null ? countdown.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") : "Loading..."}</h1>
    </>
  );
};

export default Counter;
