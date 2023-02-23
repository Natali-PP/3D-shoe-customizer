import { useContext, useState, useEffect } from "react";
import { CustomizationContext } from "../context/CustomizationContex.jsx";
import { Button, Box, Heading, Text, Stack, Flex, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
import { motion, AnimatePresence } from "framer-motion";
import CustomColorPicker from "./CustomColorPicker.jsx";
import SizeCustomizer from "./SizeCustomizer.jsx";

export default function CustomizationInterface() {
  const { isOpenModal, customization, setIsOpenModal } = useContext(CustomizationContext);

  const heightSideBar = window.innerHeight > 909 ? "auto" : "80vh";
  const overflowYSideBar = window.innerHeight > 909 ? "hidden" : "scroll";

  return (
    <Box style={{ position: "absolute", top: 0, right: "1%" }} p={3} ml={3} width="310px">
      <Box className="headingGlass" mb={4} p={4}>
        <Flex justify="space-between">
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
        <Heading as="h1" size="lg" p={2} style={{ fontFamily: "Noto Sans Mono" }}>
          {customization.layerName ? customization.layerName : "Click on a layer to start editing!"}
        </Heading>
      </Box>
      <AnimatePresence>
        {isOpenModal ? (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: heightSideBar, overflowY: overflowYSideBar, overflowX: "hidden" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <Stack spacing="4">
              <Stack className="glass" p={8} width="290px" spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer color
                </Heading>
                <CustomColorPicker />
              </Stack>

              <Stack className="glass" p={8} width="290px" spacing="12px">
                <Heading as="h3" size="sm" py={2}>
                  Layer size
                </Heading>
                <SizeCustomizer />
              </Stack>
            </Stack>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </Box>
  );
}
