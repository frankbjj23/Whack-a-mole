import WelcomeScreen from "./WelcomeScreen";
import { GameScreen } from "./GameScreen";
import { useState } from "react";

const App = () => {
  const [showWelcomeScreen, setShowWelcomeScreen] = useState(true);
  return (
    <>
      {showWelcomeScreen ? (
        <WelcomeScreen setShowWelcomeScreen={setShowWelcomeScreen} />
      ) : (
        <GameScreen />
      )}
    </>
  );
};
export default App;
