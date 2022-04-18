import React from 'react';
import * as THREE from '@react-three/fiber'
import { BoxScene } from '../BoxScene';


export const Canvas = (): JSX.Element => {

    return <THREE.Canvas >
        <gridHelper />
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <BoxScene />
    </THREE.Canvas >
}

