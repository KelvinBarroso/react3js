import React, { Suspense } from 'react';
import * as THREE from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei';
import { Heart } from '../../components/Heart';
import { Nathan } from '../../components/Nathan';
import { GridHelperProps } from '@react-three/fiber';
import { Box } from '../../components/Box';


export const Canvas = (): JSX.Element => {

    return <THREE.Canvas >
        <gridHelper />
        <Stars />
        <ambientLight intensity={0.1} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Suspense fallback={null}>
            <group dispose={null}>
                <Nathan />
                <Box />
            </group>
        </Suspense>
        <OrbitControls />
    </THREE.Canvas >
}

