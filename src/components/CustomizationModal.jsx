import {useContext, useState} from 'react';
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
import {  Circle, Wheel } from '@uiw/react-color';
import Colorful from '@uiw/react-color-colorful';
import { hexToRgba, rgbaToHex } from '@uiw/color-convert'

export default function CustomizationModal(){

  const { layerColor, setLayerColor, isOpenModal, onOpenModal, onCloseModal, layerName, setInnerColor , innerColor, customization, setCustomization } = useContext( CustomizationContext );
  const upperCaseFirstLetter = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;
  const handleChange = (e) => setLayerColor(e.target.value)
  const [colorOnColorPicker, setColorOnColorPicker] = useState(rgbaToHex(layerColor));

  const handleColorChangeOnColorPicker = ( color) => {
    setColorOnColorPicker(color.hex);
    setCustomization( prevState => ({
      ...prevState,
      layerColor:{
        ...prevState.layerColor,
        [customization.layerName]:color.hex
      }
    }))
  }

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
                <Text>{`R:${layerColor.r} G:${layerColor.g} B:${layerColor.b}`}</Text>
                <Text>{`Color state R:${colorOnColorPicker} `}</Text>
                {/*<Input 
                  placeholder="Type here..." 
                  value={layerColor}
                  onChange={handleChange}
                />
                />*/}
                {/*<Circle />*/}
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
