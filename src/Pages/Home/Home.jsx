import { useEffect, useState } from "react";
import "./Home";
import styled from 'styled-components';
import Loader from "../../components/loading/Loader";

const Title = styled.h1`
  padding-top: 20px;
  font-size: 30px;
  color: white;
`

function Home() {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 3000);
  }, []);
  
  return (
    <>
   
      <div className={!loader ? "disabled" : ""}>
        <Loader />
      </div>

      <main className={loader ? "disabled" : ""}>
      
       <Title>Bem vindos à G1 Info Store</Title>

      </main>
      
    </>
  );
}

export default Home;
