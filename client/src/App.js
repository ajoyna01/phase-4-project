import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [parks, setParks] = useState([])

  useEffect(() => {
    fetch("https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key=jiubTrXhccHzfcEc6ihhjVV18MssQBvGoLrHNkQw")
      .then((r) => r.json())
      .then((data) => {
        setParks(data.data);
      });
  }, []);
  return (
    <div> {parks.map((park) => park.fullName)}
     
    </div>
  
  );
}

export default App;
