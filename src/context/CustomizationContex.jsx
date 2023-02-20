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
    layerSize:{
      laces:{
        x:1,
        y:1,
        z:1
      },
      mesh:{
        x:1,
        y:1,
        z:1
      },
      caps:{
        x:1,
        y:1,
        z:1
      },
      inner:{
        x:1,
        y:1,
        z:1
      },
      sole:{
        x:1,
        y:1,
        z:1
      },
      stripes:{
        x:1,
        y:1,
        z:1
      },
      band:{
        x:1,
        y:1,
        z:1
      },
      patch:{
        x:1,
        y:1,
        z:1
      },
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

