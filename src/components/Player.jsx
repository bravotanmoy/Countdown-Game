import { useState } from "react";

export default function Player() {
  const [enteredPalyerName, setEnteredPlayerName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleChange(event) {
    setSubmitted(false);
    setEnteredPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitted(true);
  }


  return (
    <section id="player">
      <h2>Welcome {submitted ? enteredPalyerName : 'unknown entity'} </h2>
      <p>
        <input type="text" onChange={handleChange} value={enteredPalyerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
