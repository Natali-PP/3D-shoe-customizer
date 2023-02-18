import { useState, createContext } from 'react';
//import { useDisclosure } from '@chakra-ui/react';

export const CustomizationContext = createContext({});

export default function CustomizationContextProvider({ children }){
  /*const [layerName, setLayerName] = useState();
  const [layerColor, setLayerColor] = useState('test');
  const [layerSize, setLayerSize] = useState();

  */
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpenModal = () => setIsOpenModal(true);
  const onCloseModal = () => setIsOpenModal(false);

  //const { isOpen, onOpen, onClose } = useDisclosure()
  const [layerColor, setLayerColor] = useState('test');
  return(
    <CustomizationContext.Provider value={{layerColor,setLayerColor, isOpenModal,onOpenModal,onCloseModal, setIsOpenModal}}>
      {children}
    </CustomizationContext.Provider>
  )
}

