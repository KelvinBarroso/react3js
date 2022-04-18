import { MeshProps } from "@react-three/fiber";
import React, { useRef } from "react";

interface BoxProps extends MeshProps {
  color: string;
}

export const Box = ({ color, ...props }: BoxProps): JSX.Element => {
  const mesh = useRef<any>();
  return (
    <mesh ref={mesh} {...props}>
      <boxBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material" color={color} />
    </mesh>
  );
};
