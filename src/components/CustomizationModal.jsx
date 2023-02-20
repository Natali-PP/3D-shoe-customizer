import {useContext, useState, useEffect} from 'react';
import {CustomizationContext} from '../context/CustomizationContex.jsx';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  Box,
  Heading,
  Text
} from '@chakra-ui/react';
import { Wheel } from '@uiw/react-color';
import Colorful from '@uiw/react-color-colorful';
import { hexToRgba, rgbaToHex } from '@uiw/color-convert';

import Circle from '@uiw/react-color-circle';

export default function CustomizationModal(){

  const { isOpenModal, onOpenModal, onCloseModal, customization, setCustomization } = useContext( CustomizationContext );
  const upperCaseFirstLetter = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
  const handleChange = (e) => setLayerColor(e.target.value)
  const [colorOnColorPicker, setColorOnColorPicker] = useState(customization.layerColor[`${customization.layerName}`]);
  const [colorOnCircle, setColorOnCircle] = useState('#F44E3B');

  useEffect( () => {
    setColorOnColorPicker(customization.layerColor[`${customization.layerName}`])
  },[isOpenModal])

  useEffect( () => {
    setColorOnColorPicker(customization.layerColor[`${customization.layerName}`])
  },[colorOnCircle])

  const handleColorChangeOnColorPicker = ( color) => {
    setColorOnColorPicker(color.hex);
    setCustomization( prevState => ({
      ...prevState,
      layerColor:{
        ...prevState.layerColor,
        [customization.layerName]:color.hex
      }
    }))
  };

  const handleColorChangeOnCircle = ( color) => {
    setColorOnCircle(color.hex);
    setCustomization( prevState => ({
      ...prevState,
      layerColor:{
        ...prevState.layerColor,
        [customization.layerName]:color.hex
      }
    }))
  };

  return(
          <Drawer
            isOpen={isOpenModal}
            placement="right"
            onClose={onCloseModal}
            //finalFocusRef={btnRef}
            size={"sm"}
          >
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>{customization.layerName}</DrawerHeader>

    
              <DrawerBody>
                <Heading as='h2' size='md'>Color</Heading>

                <Text>{customization.layerColor[`${customization.layerName}`]}</Text>
                <Circle 
                  colors={[ '#1A0E3E', '#1F1A70', '#DB488B', '#FF83F6', '#3ED0EB' ]}
                  color={colorOnCircle}
                  onChange={(color) => {
                    handleColorChangeOnCircle(color);
                  }}
                />

                <Text>{`Color state R:${colorOnColorPicker} `}</Text>
                {/*<Input 
                  placeholder="Type here..." 
                  value={layerColor}
                  onChange={handleChange}
                />
                />*/}
                <Colorful
                  color={colorOnColorPicker}
                  disableAlpha={"Hide"}
                  onChange={ (color) => handleColorChangeOnColorPicker(color)}
                  onClick={ (e) => e.stopPropagation}
                />

              </DrawerBody>
    
              <DrawerFooter>
                <Button variant="outline" mr={3} onClick={onCloseModal}>
                  Cancel
                </Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
  )
}
