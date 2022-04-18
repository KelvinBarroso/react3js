import { Reflector, ReflectorProps, useTexture } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";
import * as THREE from 'three'




export const Ground = ({ ...props }: ReflectorProps): JSX.Element => {
    const [floor, normal] = useTexture(['surface_img.png', '/surface_norm.jpg'])
    const normalScale = new THREE.Vector2(2, 2)
    return (
        <Reflector resolution={1024} {...props}>
            {(Material, props) => <Material  color="#f0f0f0" metalness={0} roughnessMap={floor} normalMap={normal} normalScale={normalScale} {...props} />}
        </Reflector>
    )
};
