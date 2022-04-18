import { Bloom, EffectComposer } from "@react-three/postprocessing";
import { KernelSize } from 'postprocessing'
import React from "react";

export const Postprocessing = (): JSX.Element => {
  return (
      <EffectComposer multisampling={8}>
        <Bloom kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} intensity={0.6} />
        <Bloom kernelSize={KernelSize.HUGE} luminanceThreshold={0} luminanceSmoothing={0} intensity={0.5} />
      </EffectComposer>
  );
};
