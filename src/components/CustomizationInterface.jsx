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
} from "@chakra-ui/react";
import Colorful from "@uiw/react-color-colorful";
import { hexToRgba, rgbaToHex } from "@uiw/color-convert";
import Circle from "@uiw/react-color-circle";
import "../App.css";
export default function CustomizationInterface() {
  const { isOpenModal, onOpenModal, onCloseModal, customization, setCustomization } = useContext(CustomizationContext);
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
      isOpen={isOpenModal}
      onClose={onCloseModal}
      maxW="310px"
    >
      <Box className="cyanGlass" mb={4} p={4}>
        <Text p={2}>Shoe Configurator</Text>
        <Heading as="h1" size="md" p={2}>
          {customization.layerName ? customization.layerName : "Click on a layer to start editing!"}
        </Heading>
      </Box>
      <Stack spacing="4" style={{ display: customization.layerName ? "flex" : "none" }}>
        <Flex className="glass" p={8} direction="column" justify="center" align="center">
          <Heading as="h2" size="md" py={2} ml={2} style={{ alignSelf: "start" }}>
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
          />
        </Flex>

        <Box className="glass" p={8}>
          <Heading as="h2" size="md" py={2}>
            Layer size
          </Heading>
          <Text>Width</Text>
          <Slider
            aria-label="slider-height"
            defaultValue={1}
            //defaultValue={5}
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
            //defaultValue={5}
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
            //defaultValue={5}
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
          <Button variant="outline" my={4} onClick={() => setDefaultValuesForLayer(customization.layerName)}>
            Default values for layer
          </Button>
          <Button variant="outline" onClick={setDefaultValuesForModel}>
            Default values for model
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}
