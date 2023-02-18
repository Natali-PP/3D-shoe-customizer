import './App.css';
import Scene from './components/scene/Scene.jsx';
import { useState, useRef, useContext } from 'react';
import './styles/mainModal.css';
import CustomizationContextProvider from './context/CustomizationContex.jsx';
import CustomizationModal from './components/CustomizationModal.jsx';
import {useDisclosure, Button} from '@chakra-ui/react';

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  //const [value, setValue] = React.useState('')
  return (
    <CustomizationContextProvider>
      <div className="App">
        <Scene />
        <CustomizationModal />
      </div>
    </CustomizationContextProvider>  
  );
}

export default App;

