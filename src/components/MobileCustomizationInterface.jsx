import { useContext, useState, useEffect, useRef } from "react";
import { CustomizationContext } from "../context/CustomizationContex.jsx";
import { Button, Box, Heading, Text, Stack, Flex, IconButton, useOutsideClick } from "@chakra-ui/react";
import Circle from "@uiw/react-color-circle";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUpIcon } from "@chakra-ui/icons";
import CustomColorPicker from "../components/CustomColorPicker.jsx";
import SizeCustomizer from "../components/SizeCustomizer.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default function MobileCustomizationInterface() {
  const { isOpenModal, customization, setIsOpenModal } = useContext(CustomizationContext);
  const [clickedOutside, setClickedOutside] = useState(false);
  const myRef = useRef();

  const handleClickInside = () => setIsOpenModal(true);
  useEffect(() => {
    const handleClickOutside = (e) => {
      (myRef.current && !myRef.current.contains(e.target)) ? setIsOpenModal(false) : null;
    };
    document.body.addEventListener("mousedown", handleClickOutside);
    return () => document.body.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <>
      <Box
        style={{ position: "absolute", top: 0, right: "1%" }}
        ml={4}
        width="250px"
        className="headingGlass"
        mt={2}
        px={2}
      >
        <Flex justify="space-between" mt={2}>
          <Text p={2}>Shoe Configurator</Text>
          {isOpenModal ? (
            <IconButton
              variant="outline"
              colorScheme="whiteAlpha"
              aria-label="Collapse menu"
              onClick={() => setIsOpenModal(!isOpenModal)}
              icon={<ChevronUpIcon />}
            />
          ) : null}
        </Flex>
        <Heading as="h1" size="lg" p={2} style={{ fontFamily: "Noto Sans Mono" }} mb={2}>
          {customization.layerName ? customization.layerName : "Click on a layer to start editing!"}
        </Heading>
      </Box>

      <Box style={{ position: "absolute", bottom: 0, left: 0, right: 0, margin: "auto" }} p={3} ml={3} width="310px">
        {isOpenModal ? (
          <div ref={myRef} onClick={handleClickInside}>
            <Carousel className="glass" swipeable={false} showThumbs={false}>
              <Stack p={8} spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer color
                </Heading>
                <CustomColorPicker />
              </Stack>
              <Stack p={8} spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer size
                </Heading>
                <SizeCustomizer />
              </Stack>
            </Carousel>
          </div>
        ) : null}
      </Box>
    </>
  );
}
