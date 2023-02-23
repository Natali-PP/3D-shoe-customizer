import { useContext, useState, useEffect } from "react";
import { CustomizationContext } from "../context/CustomizationContex.jsx";
import { Button, Slider, SliderTrack, SliderFilledTrack, SliderThumb, SliderMark, Text } from "@chakra-ui/react";

export default function SizeCustomizer() {
  const { customization, setCustomization } = useContext(CustomizationContext);

  const handleSliderChange = (value, axis) => {
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
    <>
      <Text>Width</Text>
      <Slider
        aria-label="slider-height"
        value={customization.layerSize[customization.layerName].z}
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
        min={0}
        max={3}
        step={0.2}
        value={customization.layerSize[customization.layerName].y}
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
        min={0}
        max={3}
        step={0.2}
        value={customization.layerSize[customization.layerName].x}
        onChange={(v) => handleSliderChange(v, "x")}
      >
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>
        <SliderThumb />
      </Slider>
      <Button
        variant="outline"
        colorScheme="whiteAlpha"
        mt={10}
        onClick={() => setDefaultValuesForLayer(customization.layerName)}
      >
        Default values for layer
      </Button>
      <Button variant="outline" colorScheme="whiteAlpha" onClick={setDefaultValuesForModel}>
        Default values for model
      </Button>
    </>
  );
}
