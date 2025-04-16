import * as THREE from "three";

const ModelLights = () => {
  return (
    <>
      <spotLight
        castShadow={true}
        position={[2, 5, 6]}
        angle={0.15}
        penumbra={0.2}
        intensity={100}
        color="white"
      />
      {/* bluish overhead lamp */}
      <spotLight
        castShadow={true}
        position={[4, 5, 4]}
        angle={0.3}
        penumbra={0.5}
        intensity={40}
        color="#4cc9f0"
      />
      {/* purplish side fill */}
      <spotLight
        castShadow={true}
        position={[-3, 5, 5]}
        angle={0.4}
        penumbra={1}
        intensity={60}
        color="#9d4edd"
      />
      {/* area light for soft moody fill */}
      <primitive
        castShadow={true}
        object={new THREE.RectAreaLight("#ff8059", 8, 3, 2)}
        position={[1, 3, 4]}
        rotation={[-Math.PI / 4, Math.PI / 4, 0]}
        intensity={5}
      />
      {/* subtle point light for atmospheric tone */}
      <pointLight
        castShadow={true}
        position={[0, 1, 0]}
        intensity={1}
        color="#ff8059"
      />
      <pointLight
        castShadow={true}
        position={[1, 2, -2]}
        intensity={10}
        color="#ff8059"
      />
    </>
  );
};
export default ModelLights;
