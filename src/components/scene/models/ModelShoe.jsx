import { useGLTF, GradientTexture } from "@react-three/drei";
import { useRef, useContext } from "react";
import {CustomizationContext} from '../../../context/CustomizationContex.jsx';

function ModelShoe({...props}){
  const { nodes, materials } = useGLTF('/model.glb');
  const group = useRef();
  const { setLayerColor,  setIsOpenModal, setLayerName, layerColor, innerColor, customization, setCustomization } = useContext( CustomizationContext );


  const handleClick = (e) => {
    e.stopPropagation();
    //setLayerName(e.object.material.name.replace(/^./, str => str.toUpperCase()))
    setCustomization( prevState => ({
      ...prevState,
      layerName: e.object.material.name
    }))
    console.log('Layer color',e.object.material.color, e.object.material.color.r*255)
    setIsOpenModal(true);
  }

  console.log('context color en model', layerColor)

  return (
    <group {...props} ref={group} dispose={null}>
      <mesh geometry={nodes.shoe.geometry} material={materials.laces}  material-color={customization.layerColor.laces} onClick={(e) => handleClick(e)}  />
      <mesh geometry={nodes.shoe_1.geometry} material={materials.mesh} material-color={customization.layerColor.mesh} 
        //scale={[0.25,0,0]} 
        onClick={(e) => handleClick(e)} />

      <mesh geometry={nodes.shoe_2.geometry} material={materials.caps} material-color={customization.layerColor.caps} onClick={(e) => handleClick(e)}/>
      <mesh geometry={nodes.shoe_3.geometry} material={materials.inner} material-color={customization.layerColor.inner} onClick={(e) => handleClick(e)}/>
      <mesh geometry={nodes.shoe_4.geometry} material={materials.sole} material-color={customization.layerColor.sole} onClick={(e) => handleClick(e)}>

      </mesh>
      <mesh geometry={nodes.shoe_5.geometry} material={materials.stripes} onClick={(e) => handleClick(e)} material-color={customization.layerColor.stripes}>
      </mesh>
      <mesh geometry={nodes.shoe_6.geometry} material={materials.band} onClick={(e) => handleClick(e)} material-color={customization.layerColor.band} />
      <mesh geometry={nodes.shoe_7.geometry} material={materials.patch} onClick={(e) => handleClick(e)} material-color={customization.layerColor.patch} >
        {/*<meshStandardMaterial>
          <GradientTexture
            stops={[0, 0.5,1]} // As many stops as you want
            colors={['green', 'red',  'red']} // Colors need to match the number of stops
            //size={9} // Size is optional, default = 1024
          />
          </meshStandardMaterial>
          */}
      </mesh>
    </group>
  )
}

export default ModelShoe
