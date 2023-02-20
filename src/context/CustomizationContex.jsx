import { useState, createContext } from 'react';

export const CustomizationContext = createContext({});

export default function CustomizationContextProvider({ children }){
  const [layerName, setLayerName] = useState();
  const [layerColor, setLayerColor] = useState('test');
  const [layerSize, setLayerSize] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [innerColor,setInnerColor]=useState('#ffffff');
  const [customization, setCustomization] = useState({
    layerName:'',
    layerColor:{
      laces:'#ffffff',
      mesh:'#ffffff',
      caps:'#ffffff',
      inner:'#ffffff',
      sole:'#ffffff',
      stripes:'#ffffff',
      band:'#ffffff',
      patch:'#ffffff',
    },
  });

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return(
    <CustomizationContext.Provider 
      value={{layerColor,setLayerColor, isOpenModal,onOpenModal,onCloseModal, setIsOpenModal, layerName, setLayerName, layerSize,setLayerSize, innerColor, setInnerColor, customization, setCustomization}}
    >
      {children}
    </CustomizationContext.Provider>
  )
}

