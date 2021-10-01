import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./NavBar";
import Login from "./Login";
import ParksPage from "./ParksPage";

function App() {
  const [currentUser, setCurrentUser] = useState(null)
  

  useEffect(() => {
    fetch('/me')
      .then(res => {
        if (res.ok) {
          res.json().then((user) => {
            setCurrentUser(user)
          })
        } 
      })
  }, [])

  if(!currentUser)  return <Login onLogin={setCurrentUser}/>
  
  return (
    <>
    <NavBar className="NavBar" currentUser={currentUser} setCurrentUser={setCurrentUser} />
    <main>
      <Switch>
      <Route path="/">
        <ParksPage currentUser={currentUser} />
      </Route>

      </Switch>
    </main>
    </>
  )
}

export default App;
