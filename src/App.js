import { useEffect, useState } from "react";
import "./App.css";
import AdviceCard from "./Components/Advice/AdviceCard";

function App() {
  const [advice, setAdvice] = useState({ id: "", advice: "" });

  const fetchAdviceHandler = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    setAdvice({ id: data["slip"].id, advice: data["slip"].advice });
  };

  useEffect(() => {
    fetchAdviceHandler();
  }, []);

  return (
    <>
      <AdviceCard
        id={advice.id}
        advice={advice.advice}
        fetch={fetchAdviceHandler}
      />
    </>
  );
}

export default App;
