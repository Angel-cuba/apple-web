import { useMemo, type JSX } from "react";
import { useGLTF, useTexture } from "@react-three/drei";
import { MeshStandardMaterial } from "three";
import type { MacbookGLTFResult } from "../../types/MacbookModel";

type MacbookModelProps = JSX.IntrinsicElements["group"] & {
  finishColor?: string;
};

export function MacbookModel14({
  finishColor = "#2e2c2e",
  ...props
}: MacbookModelProps) {
  const { nodes, materials } = useGLTF(
    "/models/macbook-14-transformed.glb",
  ) as unknown as MacbookGLTFResult;

  const texture = useTexture("/screen.png");
  const finishMaterial = useMemo(
    () =>
      new MeshStandardMaterial({
        color: finishColor,
        metalness: 0.82,
        roughness: 0.27,
      }),
    [finishColor],
  );

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.Object_10.geometry}
        material={finishMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_16.geometry}
        material={materials.zhGRTuGrQoJflBD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_20.geometry}
        material={finishMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_22.geometry}
        material={materials.lmWQsEjxpsebDlK}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_30.geometry}
        material={materials.LtEafgAVRolQqRw}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_32.geometry}
        material={materials.iyDJFXmHelnMTbD}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_34.geometry}
        material={materials.eJObPwhgFzvfaoZ}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_38.geometry}
        material={materials.nDsMUuDKliqGFdU}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_42.geometry}
        material={materials.CRQixVLpahJzhJc}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_48.geometry}
        material={materials.YYwBgwvcyZVOOAA}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_54.geometry}
        material={materials.SLGkCohDDelqXBu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_58.geometry}
        material={materials.WnHKXHhScfUbJQi}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_66.geometry}
        material={materials.fNHiBfcxHUJCahl}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_74.geometry}
        material={materials.LpqXZqhaGCeSzdu}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_82.geometry}
        material={materials.gMtYExgrEUqPfln}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_96.geometry}
        material={finishMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_107.geometry}
        material={materials.JvMFZolVCdpPqjj}
        rotation={[Math.PI / 2, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_123.geometry}
        material={materials.sfCQkHOWyrsLmor}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh
        geometry={nodes.Object_127.geometry}
        material={finishMaterial}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload("/models/macbook-14-transformed.glb");
