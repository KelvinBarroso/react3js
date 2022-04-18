import { Html } from "@react-three/drei";
import { MeshProps } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";

interface BoxProps extends MeshProps {
  color: string;
  text?: string;
}

export const Box = ({ text, color, ...props }: BoxProps): JSX.Element => {
  const mesh = useRef<any>();
  const [hover, setHover] = useState(false);
  const [box, setBox] = useState(true);
  useEffect(() => {
    document.body.style.cursor = hover ? 'pointer' : 'auto'
  }, [hover])

  return (
    <mesh  onClick={()=>setBox(!box)} ref={mesh}  {...props}  onPointerEnter={() => setHover(true)} onPointerLeave={() => setHover(false)}>
      {box && (<boxBufferGeometry attach="geometry" />)}
      {!box && (<sphereBufferGeometry attach="geometry" />)}
      <meshStandardMaterial  attach="material" color={color} />
      <Html >
        <div style={{ pointerEvents: "none" }}>
          <h1 style={{ opacity: hover ? 1 : 0, marginBottom: 0, pointerEvents: "none" }}>{text || `I'm a colored object!!`}</h1>
        </div>
      </Html>
    </mesh>
  );
};
