import React, { useRef, useState } from 'react';
import * as THREE from '@react-three/fiber'
import { Html, PresentationControls } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'


export const Heart = (): JSX.Element => {

    const obj = useLoader(OBJLoader, 'Heart.obj')
    console.log(obj)
    return (
        <>
            <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>
                <primitive object={obj} scale={0.05} color='hotpink' />
            </PresentationControls>
        </>
    );
}



