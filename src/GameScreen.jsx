import { useEffect, useState } from "react";

const GameScreen = () => {
  const [score, setScore] = useState(0);
  const moleHoles = Array.from({ length: 9 }, (_, index) => index);
  console.log(moleHoles);
  const [clickedMole, setClickedMole] = useState(() =>
    Math.floor(Math.random() * moleHoles.length)
  );
  const [timeRemaining, setTimeRemaining] = useState(30);

  const pickRandomMole = () => {
    const randomIndex = Math.floor(Math.random() * moleHoles.length);
    setClickedMole(randomIndex);
  };

  const handleClick = (mole) => {
    if (mole !== clickedMole) return;
    if (timeRemaining <= 0) return;
    setScore((prev) => prev + 1);
    pickRandomMole();
  };

  const handleRestart = () => {
    setScore(0);
    setTimeRemaining(30);
    pickRandomMole();
  };
  useEffect(() => {
    if (timeRemaining <= 0) return;
    const time = setInterval(() => {
      setTimeRemaining((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(time);
  }, [timeRemaining]);

  return (
    <>
      <div className="game-wrapper">
        <h1>Whack a Mole</h1>
        <div className="game-info">
          <button type="button">Score: {score}</button>
          <button type="button">Time: {timeRemaining}</button>
          <button type="button" onClick={handleRestart}>
            Restart
          </button>
        </div>
        <div className="game-board">
          {moleHoles.map((index) => (
            <div
              key={index}
              className={`toggleButton ${
                index === clickedMole ? "mole" : "hole"
              }`}
              onClick={() => handleClick(index)}
            />
          ))}
          <div />
        </div>
      </div>
    </>
  );
};
export { GameScreen };
