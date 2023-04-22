import React, {useState, useRef } from 'react';
import {Plane, useTexture} from '@react-three/drei';
export function Screenimg() {
  const paredRef = useRef(null)

  const images = ["1.jpg", "2.jpg", "3.jpg"];
  const [imagenPared, setImagenPared] = useState(0);
  const textureImagenes = useTexture(images[imagenPared]);
  

  function onPareIMG() {
    setImagenPared((imagenPared + 1) % images.length);
  }


   return (
      <group ref={paredRef} onClick={onPareIMG}>
      <Plane 
        
        args={[5, 3]}  
        rotation={[Math.PI / 1, 0, 3.1]}
        position={[0, 1.5, 4]} 
        color="#000000" 
        
      >
        <meshStandardMaterial map={textureImagenes}/>
      </Plane>
      </group>
    );
   
}
export default Screenimg;