import { useContext, useState, useEffect } from "react";
import { CustomizationContext } from "../context/CustomizationContex.jsx";
import {
  Button,
  Box,
  Heading,
  Text,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
  Stack,
  Flex,
  IconButton
} from "@chakra-ui/react";
import { ChevronUpIcon } from '@chakra-ui/icons'
import Colorful from "@uiw/react-color-colorful";
import { hexToRgba, rgbaToHex } from "@uiw/color-convert";
import Circle from "@uiw/react-color-circle";
import "../App.css";
import { motion, AnimatePresence } from "framer-motion"

export default function CustomizationInterface() {
  const { isOpenModal, customization, setCustomization, setIsOpenModal } = useContext(CustomizationContext);
  const [colorOnColorPicker, setColorOnColorPicker] = useState(customization.layerColor[`${customization.layerName}`]);
  const [colorOnCircle, setColorOnCircle] = useState("#1A0E3E");
  const [sliderValue, setSliderValue] = useState(0);

  const upperCaseFirstLetter = (str) => `${str[0].toUpperCase()}${str.slice(1).toLowerCase()}`;

  useEffect(() => {
    setColorOnColorPicker(customization.layerColor[`${customization.layerName}`]);
  }, [isOpenModal]);

  useEffect(() => {
    setColorOnColorPicker(customization.layerColor[`${customization.layerName}`]);
  }, [colorOnCircle]);

  const handleColorChangeOnColorPicker = (color) => {
    setColorOnColorPicker(color.hex);
    setCustomization((prevState) => ({
      ...prevState,
      layerColor: {
        ...prevState.layerColor,
        [customization.layerName]: color.hex,
      },
    }));
  };

  const handleColorChangeOnCircle = (color) => {
    setColorOnCircle(color.hex);
    setCustomization((prevState) => ({
      ...prevState,
      layerColor: {
        ...prevState.layerColor,
        [customization.layerName]: color.hex,
      },
    }));
  };

  const handleSliderChange = (value, axis) => {
    setSliderValue(value);
    setCustomization((prevState) => ({
      ...prevState,
      layerSize: {
        ...prevState.layerSize,
        [customization.layerName]: {
          ...prevState.layerSize[customization.layerName],
          [axis]: value,
        },
      },
    }));
  };

  const setDefaultValuesForLayer = (layer) => {
    setCustomization((prevState) => ({
      ...prevState,
      layerSize: {
        ...prevState.layerSize,
        [layer]: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
    }));
  };

  const setDefaultValuesForModel = (layer) => {
    setCustomization((prevState) => ({
      ...prevState,
      layerSize: {
        laces: {
          x: 1,
          y: 1,
          z: 1,
        },
        mesh: {
          x: 1,
          y: 1,
          z: 1,
        },
        caps: {
          x: 1,
          y: 1,
          z: 1,
        },
        inner: {
          x: 1,
          y: 1,
          z: 1,
        },
        sole: {
          x: 1,
          y: 1,
          z: 1,
        },
        stripes: {
          x: 1,
          y: 1,
          z: 1,
        },
        band: {
          x: 1,
          y: 1,
          z: 1,
        },
        patch: {
          x: 1,
          y: 1,
          z: 1,
        },
      },
    }));
  };
  return (
    <Box
      style={{ position: "absolute", top: 0, right: "1%" }}
      p={3}
      ml={3}
      width="310px"
    >
      <Box className="headingGlass" mb={4} p={4} >
        <Flex justify='space-between' >
        <Text p={2}>Shoe Configurator</Text>
          {isOpenModal ? <IconButton variant="outline" colorScheme='whiteAlpha' aria-label='Collapse menu' onClick={() => setIsOpenModal(!isOpenModal)} icon={<ChevronUpIcon />} /> : null}
        </Flex>
        <Heading as="h1" size="lg" p={2} style={{fontFamily: 'Noto Sans Mono'}}>
          {customization.layerName ? customization.layerName : "Click on a layer to start editing!"}
        </Heading>
      </Box>
      <AnimatePresence>
      {isOpenModal ?
          <motion.div 
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: '80vh', overflowY:'scroll', overflowX:'hidden', },
              collapsed: { opacity: 0, height: 0 }
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
      <Stack spacing="4" 
      >
        <Stack className="glass"  p={8} width='290px' spacing='12px'>
          <Heading as="h3" size="sm" py={2}  >
            Layer color
          </Heading>
          {/*<Text>{customization.layerColor[`${customization.layerName}`]}</Text>*/}
          <Circle
            colors={["#1A0E3E", "#1F1A70", "#DB488B", "#FF83F6", "#3ED0EB"]}
            color={colorOnCircle}
            onChange={(color) => {
              handleColorChangeOnCircle(color);
            }}
          />
          <Colorful
            color={colorOnColorPicker}
            disableAlpha={"Hide"}
            onChange={(color) => handleColorChangeOnColorPicker(color)}
            onClick={(e) => e.stopPropagation}
            style={{width:'230px'}}
          />
        </Stack>

        <Stack className="glass" p={8} width='290px' spacing='12px'>
          <Heading as="h3" size="sm" py={2}>
            Layer size
          </Heading>
          <Text>Width</Text>
          <Slider
            aria-label="slider-height"
            defaultValue={1}
            min={0}
            max={3}
            step={0.2}
            onChange={(v) => handleSliderChange(v, "z")}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <Text>Height</Text>
          <Slider
            aria-label="slider-height"
            defaultValue={1}
            min={0}
            max={3}
            step={0.2}
            onChange={(v) => handleSliderChange(v, "y")}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>

          <Text>Depth</Text>
          <Slider
            aria-label="slider-width"
            defaultValue={1}
            min={0}
            max={3}
            step={0.2}
            onChange={(v) => handleSliderChange(v, "x")}
          >
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
          <Button variant="outline" colorScheme='whiteAlpha' mt={10} onClick={() => setDefaultValuesForLayer(customization.layerName)}>
            Default values for layer
          </Button>
          <Button variant="outline" colorScheme='whiteAlpha' onClick={setDefaultValuesForModel}>
            Default values for model
          </Button>
        </Stack>
      </Stack>
          </motion.div>
      : null }
      </AnimatePresence>
    </Box>
  );
}
