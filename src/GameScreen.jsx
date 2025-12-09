import { useState } from "react";

const GameScreen = () => {
  const [moles, setMoles] = useState(0);
  const [score, setScore] = useState(0);
  const moleHoles = new Array(9).fill(null);

  const moleClick = () => {
    const randomIndex = Math.floor(Math.random() * moleHoles.length);
    setScore(randomIndex);
  };
  const handleClick = (mole) => {
    if (mole !== moles) return;
    setScore((prev) => prev + 1);
    moleClick();
  };
  return (
    <>
      <div>
        <h1>Whack a Mole</h1>
        <button>Score:</button>
        <button>Time:</button>
        <button>Restart</button>
      </div>
      <div>
        {moleHoles.map((index) => (
          <div
            className={`toggleButton ${mole ? "hole" : "mole"}`}
            onClick={handleClick}
          />
        ))}
        <div />
      </div>
    </>
  );
};
export { GameScreen };
