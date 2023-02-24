import { useGLTF, Bounds } from "@react-three/drei";
import { useRef, useContext, useEffect } from "react";
import { CustomizationContext } from "../../../context/CustomizationContex.jsx";

function ModelShoe({ ...props }) {
  const { nodes, materials } = useGLTF("/model.glb");
  const group = useRef();
  const { setIsOpenModal, customization, setCustomization } =
    useContext(CustomizationContext);

  const handleClick = (e) => {
    e.stopPropagation();
    setCustomization((prevState) => ({
      ...prevState,
      layerName: e.object.material.name,
    }));
    setIsOpenModal(true);
  };

  return (
    <Bounds fit observe margin={0.8}>
      <group {...props} ref={group} dispose={null}>
        <mesh
          geometry={nodes.shoe.geometry}
          material={materials.laces}
          material-color={customization.layerColor.laces}
          onClick={(e) => handleClick(e)}
          scale={[customization.layerSize.laces.x, customization.layerSize.laces.y, customization.layerSize.laces.z]}
        />
        <mesh
          geometry={nodes.shoe_1.geometry}
          material={materials.mesh}
          material-color={customization.layerColor.mesh}
          scale={[customization.layerSize.mesh.x, customization.layerSize.mesh.y, customization.layerSize.mesh.z]}
          onClick={(e) => handleClick(e)}
        />

        <mesh
          geometry={nodes.shoe_2.geometry}
          material={materials.caps}
          material-color={customization.layerColor.caps}
          onClick={(e) => handleClick(e)}
          scale={[customization.layerSize.caps.x, customization.layerSize.caps.y, customization.layerSize.caps.z]}
        />
        <mesh
          geometry={nodes.shoe_3.geometry}
          material={materials.inner}
          material-color={customization.layerColor.inner}
          onClick={(e) => handleClick(e)}
          scale={[customization.layerSize.inner.x, customization.layerSize.inner.y, customization.layerSize.inner.z]}
        />
        <mesh
          geometry={nodes.shoe_4.geometry}
          material={materials.sole}
          material-color={customization.layerColor.sole}
          onClick={(e) => handleClick(e)}
          scale={[customization.layerSize.sole.x, customization.layerSize.sole.y, customization.layerSize.sole.z]}
        />
        <mesh
          geometry={nodes.shoe_5.geometry}
          material={materials.stripes}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.stripes}
          scale={[
            customization.layerSize.stripes.x,
            customization.layerSize.stripes.y,
            customization.layerSize.stripes.z,
          ]}
        />
        <mesh
          geometry={nodes.shoe_6.geometry}
          material={materials.band}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.band}
          scale={[customization.layerSize.band.x, customization.layerSize.band.y, customization.layerSize.band.z]}
        />
        <mesh
          geometry={nodes.shoe_7.geometry}
          material={materials.patch}
          onClick={(e) => handleClick(e)}
          material-color={customization.layerColor.patch}
          scale={[customization.layerSize.patch.x, customization.layerSize.patch.y, customization.layerSize.patch.z]}
        />
      </group>
    </Bounds>
  );
}

export default ModelShoe;
