import React from "react";
import { useGLTF } from "@react-three/drei";

const My3DModel = () => {
  const { scene } = useGLTF("https://threejs.org/examples/models/gltf/DamagedHelmet/glTF/DamagedHelmet.gltf");

  return <primitive object={scene} scale={1.5} />;
};

export default My3DModel;
