import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense, useRef } from "react";
import ModelShoe from './models/ModelShoe.jsx'


function Scene(){
  return(
    <Canvas camera={{position:[0,0.5,1.5]}}>
      <Suspense fallback={<p>Loading...</p>} />
        <axesHelper />
        <gridHelper />
        <OrbitControls />
        <ModelShoe />
        <Environment preset="sunset" background />
      <Suspense />
    </Canvas>
  )

}

export default Scene;
