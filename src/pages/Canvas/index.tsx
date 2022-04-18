import React from 'react';
import * as THREE from '@react-three/fiber'
import { BoxScene } from '../BoxScene';
import { CameraShake, OrbitControls } from '@react-three/drei';


export const Canvas = (): JSX.Element => {

    return <THREE.Canvas camera={{ near: 0.1, position: [0, 0.5, 0.7] }}>
            <color attach="background" args={['black']} />
        <ambientLight />
        <OrbitControls enableZoom enablePan={false} enableRotate={false} />

        <BoxScene />
        <CameraShake yawFrequency={0.2} pitchFrequency={0.2} rollFrequency={0.2} />

    </THREE.Canvas >
}

