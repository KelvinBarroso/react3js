import React, { useRef, useState } from 'react';
import * as THREE from '@react-three/fiber'
import { Html, PresentationControls} from '@react-three/drei';


export const Box = (): JSX.Element => {
    const [color, setColor] = useState(true)
    const mesh = useRef<any>();
    return (
        <>
            <PresentationControls global zoom={0.8} rotation={[0, -Math.PI / 4, 0]} polar={[0, Math.PI / 4]} azimuth={[-Math.PI / 4, Math.PI / 4]}>

                <mesh
                    ref={mesh}
                    rotation={[Math.PI / 1, 0, 0]}
                    onClick={(e) => setColor(!color)}
                    castShadow
                    receiveShadow
                >
                   <boxBufferGeometry attach='geometry' />
                    <meshLambertMaterial attach='material' color={color ? 'hotpink' : 'blue'} />
                    <Html scale={1} rotation={[Math.PI / 1, 0, 0]} position={[1, 1, 1]} transform occlude>
                        <div className="annotation">
                            {' Kelvin <3 Yana'} <span style={{ fontSize: '1.5em' }}>@</span>
                        </div>
                    </Html>
                </mesh>
            </PresentationControls>
        </>
    );
}



