import { useState } from "react";
import "./App.css";
import RestrictedPage from "./components/RestrictedPage";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const user = "Julio";

  function login() {
    setIsLoggedIn(true);
  }

  function logout() {
    setIsLoggedIn(false);
  }
  return (
    <div className="App">
      <header className="App-header">
        <RestrictedPage
          user={user}
          isLoggedIn={isLoggedIn}
          logout={logout}
          login={login}
        />
      </header>
    </div>
  );
}

export default App;
