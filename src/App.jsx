import { useState } from "react";
import "./App.css";
import CookieClicker from "./components/CookieClicker.jsx";
import UserComponent from "./components/UserComponent.jsx";
import CatFacts from "./components/CatFacts.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <CatFacts />
      <CookieClicker />
      <UserComponent />
    </>
  );
}

export default App;
