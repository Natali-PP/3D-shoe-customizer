import {useContext} from 'react';
import {CustomizationContext} from '../context/CustomizationContex.jsx';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  //useDisclosure,
  Input,
  Box
} from '@chakra-ui/react'

export default function CustomizationModal(){
  //const { isOpen, onOpen, onClose } = useDisclosure()

  const { layerColor, setLayerColor, isOpenModal, onOpenModal, onCloseModal, layerName } = useContext( CustomizationContext );

  const handleChange = (event) => setLayerColor(event.target.value)
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
              <DrawerHeader>{layerName}</DrawerHeader>
    
              <DrawerBody>
                <Input 
                  placeholder="Type here..." 
                  value={layerColor}
                  onChange={handleChange}
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
