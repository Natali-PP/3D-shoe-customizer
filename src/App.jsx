import './App.css';
import Scene from "./components/scene/Scene.jsx";
import CustomizationContextProvider from "./context/CustomizationContex.jsx";
import CustomizationInterface from "./components/CustomizationInterface.jsx";
import MobileCustomizationInterface from "./components/MobileCustomizationInterface.jsx";
import Media from "react-media";
function App() {
  return (
    <CustomizationContextProvider>
      <div className="App">
        <Scene />
        <Media queries={{ small: "(max-width: 599px)" }}>
          {(matches) => (matches.small ? <MobileCustomizationInterface /> : <CustomizationInterface />)}
        </Media>
      </div>
    </CustomizationContextProvider>
  );
}

export default App;
