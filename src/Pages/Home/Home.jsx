import { useEffect, useState } from "react";
import "./Home";
import styles from "./Home.module.css";

import Loader from "../../components/loading/Loader";


function Home() {
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
      
       <h1 className={"titulo"}>Home page</h1>

      </main>
      
    </>
  );
}

export default Home;
