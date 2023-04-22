import React, {useRef,useEffect} from 'react';
import { useAspect, useVideoTexture, useTexture } from '@react-three/drei'
import { Plane } from '@react-three/drei';


export function Screen() {
    const videoRef = useRef(null);
    const texture = useVideoTexture("video.mp4")
    console.log(videoRef);

    useEffect(() => {
      const video = videoRef.current.children[0].material.map.image;
      video.pause(); 
    }, []);
  
    function statusVideo() {
      const video = videoRef.current.children[0].material.map.image;
      if (video.paused) {
        video.play(); 
      } else {
        video.pause(); 
      }
    }
  
      return (
        <group ref={videoRef} onClick={statusVideo}> 
          <Plane args={[5, 3]}  rotation={[-Math.PI / 50.9, 0, 0]}
          position={[0, 1.5, -4]} color="#ffff" >
          <meshBasicMaterial map={texture} toneMapped={false} muted={false}/>
          </Plane>
          
        </group>
        );
  }
  export default Screen;
