"use client";

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

const ThreeDScene = () => {
  return (
    <Canvas style={{ height: '100vh', background: '#111' }}>
      {/* Add a camera controller */}
      <OrbitControls />
      {/* Ambient light for general lighting */}
      <ambientLight intensity={0.5} />
      {/* Example geometry */}
      <mesh>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#e91e63" />
      </mesh>
    </Canvas>
  );
};

export default ThreeDScene;
