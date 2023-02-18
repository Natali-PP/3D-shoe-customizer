import './App.css';
import Scene from './components/scene/Scene.jsx';
import { useState, useRef } from 'react';
import './styles/mainModal.css'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Input,
  Box
} from '@chakra-ui/react'

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()
  return (
    <div className="App">
      <Scene />
    <>
      <Button ref={btnRef}  onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
        size={'sm'}
        color="gray.100"
        //className="customModal"
      >
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>

        </DrawerContent>
        </Drawer>
    </>
  
    </div>
  );
}

export default App;

