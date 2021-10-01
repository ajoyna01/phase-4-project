import React, { useState, useEffect } from 'react';
import './App.css';

function ParksPage() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?api_key=jiubTrXhccHzfcEc6ihhjVV18MssQBvGoLrHNkQw")
      .then((r) => r.json())
      .then((data) => {
        setParks(data.data);
        console.log(data.data)
      });
  }, []);
  
  
  
  return (
    <div> {parks.map((park) => park.fullName)}
     
    </div>
  
  );
}

export default ParksPage;