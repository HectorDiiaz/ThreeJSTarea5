import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Door from './Door'
import Floor from './Floor'
import { useHelper } from '@react-three/drei'
import { DirectionalLight, hemisphereLight, SpotLight, PointLight } from 'three';
import { RectAreaLightHelper } from 'three/examples/jsm/helpers/RectAreaLightHelper'
import { DirectionalLightHelper, HemisphereLightHelper, SpotLightHelper, PointLightHelper} from 'three';
import { useRef } from 'react'
import { useControls } from 'leva'

export default function Experience() {

    
    const {intensity} = useControls({intensity: {value: 1, min: 0, max: 5}});
    //DirectionalLight implementación
        // const directionalLightRef = useRef();
        // useHelper(directionalLightRef, DirectionalLightHelper, 1)
    
    //HemisphereLight implementación
        // const hemisphereLightRef= useRef();
        // useHelper(hemisphereLightRef, HemisphereLightHelper, 1);

    //SpotLight implementación
        // const SpotLightRef = useRef();
        // useHelper(SpotLightRef, SpotLightHelper, 'red')

    //PointLight Implementación
        // const PointLightRef = useRef();
        // useHelper(PointLightRef, PointLightHelper,1)

    //RectAreaLight Implementación
            const rectAreaLightRef= useRef();
            useHelper(rectAreaLightRef, RectAreaLightHelper,"white");  
    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <Door/>
        <Floor/>
        {/* <hemisphereLight ref={hemisphereLightRef} castShadow position={[0,3,0]} args={['#00fff','#7fff00',intensity]}
        /> */}
        {/* <directionalLight ref={directionalLightRef} castShadow position={[0, 1, -4]} intensity={intensity} /> */}
        {/* <spotLight penumbra={0} ref={SpotLightRef} position={[0,3,0]} castShadow intensity={intensity} distance={4.5} angle={0.5}/> */}
        {/* <pointLight ref={PointLightRef} position={[-2,0,0]} castShadow intensity={intensity} /> */}
        <rectAreaLight args={['white',intensity, 5, 5]} ref={rectAreaLightRef} position={[0,2,0]} castShadow rotation-x={ - Math.PI * 0.5 }/>
    </>
}