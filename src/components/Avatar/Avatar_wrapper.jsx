import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Avatar_model_sangmean";

export default function Avatar() {
    return (
        <Canvas className="avatar-canvas" camera={{ position: [2, 0, 12.25], fov: 15, zoom: 1.2 }}>
            <ambientLight intensity={1.25} />
            <ambientLight intensity={0.1} />
            <directionalLight intensity={0.4} />
            <Model position={[0.025, -0.9, 0]} />
            <OrbitControls />
        </Canvas>
    );
}
