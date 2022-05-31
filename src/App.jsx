import { useEffect, useState } from "react";

import "./App.css";
import CardGiovanni from "./components/Cards/CardGiovanni";
import styles from "./App.css";
import CardMaria from "./components/Cards/CardMaria";
import CardDouglas from "./components/Cards/CardDouglas";
import CardVictor from "./components/Cards/CardVictor";
import CardOthon from "./components/Cards/CardOthon";
import Loader from "./components/loading/Loader";

function App() {
  const [count, SetLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetLoader(false);
    }, 5000);
  });

  return (
    <>
      <div className={!count ? "disabled" : ""}>
        <Loader />
      </div>

      <main className={count ? "disabled" : ""}>
        <CardGiovanni />
        <CardMaria />
        <CardVictor />
        <CardOthon />
        <CardDouglas />
      </main>
    </>
  );
}

export default App;
