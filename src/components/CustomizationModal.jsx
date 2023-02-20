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
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
} from '@chakra-ui/react';
import Colorful from '@uiw/react-color-colorful';
import { hexToRgba, rgbaToHex } from '@uiw/color-convert';
import Circle from '@uiw/react-color-circle';

export default function CustomizationModal(){
  const { isOpenModal, onOpenModal, onCloseModal, customization, setCustomization } = useContext( CustomizationContext );
  const [colorOnColorPicker, setColorOnColorPicker] = useState(customization.layerColor[`${customization.layerName}`]);
  const [colorOnCircle, setColorOnCircle] = useState('#1A0E3E');
  const [sliderValue, setSliderValue] = useState(0);


  const upperCaseFirstLetter = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

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

  const handleSliderChange = ( value, axis ) => {
    setSliderValue(value);
    setCustomization( prevState => ({
      ...prevState,
      layerSize:{
        ...prevState.layerSize,
        [customization.layerName]:{
          ...prevState.layerSize[customization.layerName],
          [axis]:value,
        }
      }
    }))
  };

  const setDefaultValuesForLayer = (layer ) =>{
    setCustomization( prevState => ({
      ...prevState,
      layerSize:{
        ...prevState.layerSize,
        [layer]:{
          x:1,
          y:1,
          z:1,
        }
      }
    }))
  };

  const setDefaultValuesForModel = (layer) => {
    setCustomization( prevState => ({
      ...prevState,
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
    }))
  };
  return(
          <Drawer
            isOpen={isOpenModal}
            placement="right"
            onClose={onCloseModal}
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

                <Colorful
                  color={colorOnColorPicker}
                  disableAlpha={"Hide"}
                  onChange={ (color) => handleColorChangeOnColorPicker(color)}
                  onClick={ (e) => e.stopPropagation}
                />

                <Text>Size width</Text>
                  <Slider aria-label='slider-height' defaultValue={1}
                    //defaultValue={5}
                    min={0}
                    max={3}
                    step={0.2}
                    onChange={(v) => handleSliderChange(v, 'z')}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>

                <Text>Size height</Text>
                  <Slider aria-label='slider-height' defaultValue={1}
                    //defaultValue={5}
                    min={0}
                    max={3}
                    step={0.2}
                    onChange={(v) => handleSliderChange(v, 'y')}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>

                <Text>Size depth</Text>
                  <Slider aria-label='slider-width' defaultValue={1}
                    //defaultValue={5}
                    min={0}
                    max={3}
                    step={0.2}
                    onChange={(v) => handleSliderChange(v,'x')}
                  >
                    <SliderTrack>
                      <SliderFilledTrack />
                    </SliderTrack>
                    <SliderThumb />
                  </Slider>
                <Button onClick={() => setDefaultValuesForLayer(customization.layerName)}>Default size values for layer</Button>
                <Button onClick={setDefaultValuesForModel}>Default size values for model</Button>

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
