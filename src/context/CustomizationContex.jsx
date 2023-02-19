import { useState, createContext } from 'react';

export const CustomizationContext = createContext({});

export default function CustomizationContextProvider({ children }){
  const [layerName, setLayerName] = useState();
  const [layerColor, setLayerColor] = useState('test');
  const [layerSize, setLayerSize] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  return(
    <CustomizationContext.Provider 
      value={{layerColor,setLayerColor, isOpenModal,onOpenModal,onCloseModal, setIsOpenModal, layerName, setLayerName, layerSize,setLayerSize}}
    >
      {children}
    </CustomizationContext.Provider>
  )
}

