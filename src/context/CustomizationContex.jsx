import { useState, createContext } from 'react';

export const CustomizationContext = createContext({});

export default function CustomizationContextProvider({ children }){
  const [layerSize, setLayerSize] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);
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
      value={{isOpenModal,onOpenModal,onCloseModal, setIsOpenModal, layerSize,setLayerSize, customization, setCustomization}}
    >
      {children}
    </CustomizationContext.Provider>
  )
}

