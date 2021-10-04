import { Switch, Route, BrowserRouter} from "react-router-dom";
import React, { useState, useEffect } from "react";
import NavBar from "./NavBar";
import SignUpPage from "./SignUpPage";
import ParksPage from "./ParksPage";
import LogInPage from "./LogInPage";


function App() {
  const [user, setUser] = useState(null);
  

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <LogInPage onLogin={setUser} />;
  
  return (<div>






<BrowserRouter>


<NavBar user={user} setUser={setUser} />
        <Switch>
        

        <Route path="/signup" >
          <SignUpPage  />
        </Route>

        <Route path="/login" >
          <LogInPage  />
        </Route>

        <Route path = "/">
          <ParksPage  />
        </Route>

        </Switch>

        </BrowserRouter></div>
     
    
  )
}

export default App;
