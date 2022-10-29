import React from "react";
import "./App.css";
import Home from "./Home";

function App() {
  const [loginCLicked, setLoginClicked] = React.useState(false);
  let login = false;
 const handleSubmit = e => {
    e.preventDefault();
    sessionStorage.setItem("Email",e.target.email.value);
    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else {
      login = true;
      setLoginClicked(!loginCLicked)
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    }
  };
  
  return (
    <>
      {!loginCLicked ?
        <div className="App">
      <form className="form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="none@email.com.br" />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input type="password" name="password" />
        </div>
        <button className="primary">Log In</button>
      </form>
      </div>
      : <><Home /></>}
      </>
      
    
  );
}

export default App;
