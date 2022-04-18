import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three'

interface RigProps {
    children?: JSX.Element | JSX.Element[];
}
export const Rig = ({ children }: RigProps): JSX.Element => {
    const ref = useRef<any>()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    const initialPos = camera.position;
    useFrame(() => {
        camera.position.lerp(vec.set((mouse.x/2)-initialPos.x, 0.05-initialPos.y, 0.5-initialPos.z), 0.005)
    })
    return <group ref={ref}>{children}</group>
};
