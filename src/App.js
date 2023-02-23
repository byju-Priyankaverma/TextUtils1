import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
// import About from "./components/About";
import About1 from "./components/About1";
import { useState } from "react";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [btntext, setbtntext] = useState("Enable Dark Mode");

  const [alert, setalert] = useState(null);

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      setbtntext("Enable light Mode");
      showAlert("Dark Mode has been Enabled", "success");
      // document.title = "TextUtils - Dark MOde";
      // setInterval(()=>{
      //   document.title = 'TextUtils is amazing'
      // },2000)
      // setInterval(()=>{
      //   document.title = 'Install TextUtils'
      // },1300)
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setbtntext("Enable dark Mode");
      showAlert("Light Mode has been Enabled", "success");
      // document.title = "TextUtils - Light MOde";
    }
  };
  return (
    <>
    <Router>
      <Navbar
        title="TextUtils"
        aboutus="About Us"
        mode={mode}
        toggleMode={toggleMode}
        btntext={btntext}
      />
      <Alert alert={alert} />
      <div className="container">
      <Switch>
          <Route path="/about">
          <About1 mode={mode}/>
            {/* <About /> */}
          </Route>
          <Route path="/">
          <TextForm
                title="TextUtils - Word Counter | Change the case of words | Remove Extra spaces"
                mode={mode}
                showAlert={showAlert}/>
          </Route>
        </Switch>
      </div>
      {/* <About1 mode={mode}/> */}
    </Router>
    </>
  );
}
export default App;
