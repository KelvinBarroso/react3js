import React, { Suspense } from "react";
import { Box } from "../../components/Box";

export const BoxScene = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <group dispose={null}>
        <Box color={"hotpink"} />
      </group>
    </Suspense>
  );
};
