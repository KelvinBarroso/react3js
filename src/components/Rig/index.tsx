import { useFrame, useThree } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";
import * as THREE from 'three'
import { Box } from "../../components/Box";

interface RigProps {
    children?: JSX.Element | JSX.Element[];
}
export const Rig = ({ children }: RigProps): JSX.Element => {
    const ref = useRef<any>()
    const vec = new THREE.Vector3()
    const { camera, mouse } = useThree()
    useFrame(() => {
        camera.position.lerp(vec.set(mouse.x * 2, 0.5, 1.5), 0.005)
        ref.current.position.lerp(vec.set(mouse.x * 0.1, mouse.y * 0.01, 0), 0.01)
        ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (-mouse.x * Math.PI) / 200, 0.01)
    })
    return <group ref={ref}>{children}</group>
};
