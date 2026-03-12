import { Environment, Lightformer } from "@react-three/drei";

export const AmbientLight = () => {
  return (
    <group>
      <Environment resolution={256} background>
        <group>
          <Lightformer
            form="rect"
            intensity={8}
            scale={10}
            position={[-10, 5, -5]}
            rotation={Math.PI / 2}
          />
          <Lightformer
            form="rect"
            intensity={8}
            scale={10}
            position={[10, 0, 1]}
            rotation={Math.PI / 2}
          />
        </group>
      </Environment>
      <spotLight
        position={[-4, 10, 6]}
        intensity={Math.PI * 0.3}
        angle={0.2}
        decay={0}
      />
      <spotLight
        position={[-1, -25, 9]}
        intensity={Math.PI * 0.3}
        angle={0.15}
        decay={0}
      />
      <spotLight
        position={[-4, 10, 6]}
        intensity={Math.PI * 1.52}
        angle={0.22}
        decay={0.1}
      />
    </group>
  );
};
