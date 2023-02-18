import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef, useContext } from "react";
import ModelShoe from './models/ModelShoe.jsx'
import { useControls } from 'leva'
import {CustomizationContext} from '../../context/CustomizationContex.jsx';

import { Button } from '@chakra-ui/react';

function Scene(){

  const {onOpenModal} = useContext( CustomizationContext );
  return(
    <>
      <Button 
            //ref={btnRef} 
        onClick={onOpenModal}
        >
            Open
        </Button>
    <Canvas camera={{position:[0,0.5,1.05]}}>
      <Suspense fallback={<p>Loading...</p>} />
        <axesHelper />
        <gridHelper />
        <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
        <directionalLight intensity={0.1} position={[100,0,50]} />
        <ModelShoe />
        <Environment 
          //preset="night" 
          //files="./img/syntwave-2.hdr" 
          files="./img/xoor.hdr" 
          blur={0.41}
          //blur={0.05}
          background />
      <Suspense />
    </Canvas>
    </>
  )

}

export default Scene;
