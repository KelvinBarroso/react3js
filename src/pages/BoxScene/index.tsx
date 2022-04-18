
import React, { Suspense } from "react";
import { Box } from "../../components/Box";
import { Ground } from "../../components/Ground";
import { Postprocessing } from "../../components/Postprocessing";
import { Rig } from "../../components/Rig";

export const BoxScene = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <Rig>
        <Box color="#ff2060" scale={0.09} rotation={[0, 1, Math.PI / 3]} />
        <Box color="cyan" scale={0.09} position={[0.2, 0, -0.2]} rotation={[3, 2, Math.PI / 3]} />
        <Box color="orange" scale={0.09} position={[-0.2, 0, -0.2]} rotation={[2, 3, Math.PI / 3]} />
        <Box color="white" scale={0.09} position={[0, 0.0, -0.6]} rotation={[1, 0, Math.PI / 3]} />
        <Ground scale={1.5}  mirror={1} blur={[500, 100]} mixBlur={12} mixStrength={1.5} rotation={[-Math.PI / 2, 0, Math.PI / 2]} position-y={-0.08} position-z={-0.3}/>
      </Rig>
      <Postprocessing />
    </Suspense>
  );
};
