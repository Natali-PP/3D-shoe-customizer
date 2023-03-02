import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls} from "@react-three/drei";
import { Suspense } from "react";
import ModelShoe from "./models/ModelShoe.jsx";

function Scene() {
  return (
    <Canvas camera={{ position: [0, 0.5, 1.05] }}>
      <Suspense fallback={<p>Loading...</p>} />
      <OrbitControls enablePan={true} enableZoom={true} enableRotate={true} />
      <directionalLight intensity={0.1} position={[100, 0, 50]} />
      <ModelShoe />
      <Environment files="./img/syntwave-2.hdr" blur={0.41} background />
      <Suspense />
    </Canvas>
  );
}

export default Scene;
