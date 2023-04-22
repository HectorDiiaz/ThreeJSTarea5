import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Screen from './Screen'
import Floor from './Floor'
import Pared_Imagen from './screenimg';
export default function Experience() {

    return <>
        <Perf position="top-left" />
        <OrbitControls makeDefault />
        <Screen/>
        <Pared_Imagen/>
        <Floor/>
        <ambientLight/>
    </>
}