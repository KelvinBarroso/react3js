import React, { useEffect, useRef, useState } from 'react';
import { PresentationControls} from '@react-three/drei';
import { useFrame, useLoader } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'
import { AnimationMixer } from 'three';

export const Nathan = (): JSX.Element => {

    const obj = useLoader(FBXLoader, 'objects/Nathan01.fbx')

    const group = useRef(obj)
    const {  animations } = obj;
  
    const actions = useRef(obj as any)
    const [mixer] = useState(() => new AnimationMixer(obj as any))
    useFrame((state, delta) => mixer.update(delta))
    useEffect(() => {
      actions.current = {
        'mixamo.com': mixer.clipAction(animations[0], group.current)
      }
      return () => animations.forEach((clip) => mixer.uncacheClip(clip))
    }, [])
  
    useEffect(() => actions.current['mixamo.com'].play(), [])

    console.log(obj)
    return  <primitive ref={obj} object={obj} scale={0.01} color='hotpink' />
}



