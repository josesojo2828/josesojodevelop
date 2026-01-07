"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as THREE from "three";

function FloatingShape({ geometry, positionFactor, color }: any) {
    const meshRef = useRef<THREE.Mesh>(null!);
    // viewport nos da el ancho y alto visible en unidades 3D
    const { viewport, mouse } = useThree();
    const randomFactor = useMemo(() => Math.random(), []);

    useFrame((state) => {
        if (!meshRef.current) return;

        // Calculamos la posición base según el tamaño actual de la ventana
        // positionFactor[0] es X (-0.5 es izquierda, 0.5 es derecha)
        // positionFactor[1] es Y (-0.5 es abajo, 0.5 es arriba)
        const baseX = viewport.width * positionFactor[0];
        const baseY = viewport.height * positionFactor[1];

        const time = state.clock.getElapsedTime();

        // 1. Movimiento flotante
        const floatY = Math.cos(time + randomFactor) * 0.3;
        const floatX = Math.sin(time + randomFactor) * 0.3;

        // 2. Reacción al Mouse (Efecto de alejarse)
        // Multiplicamos por un factor para que el movimiento sea proporcional al viewport
        const mouseConstraint = 1.5;
        const targetX = baseX + (mouse.x * viewport.width * 0.05);
        const targetY = baseY + (mouse.y * viewport.height * 0.05);

        // Aplicamos la posición con una transición suave (lerp)
        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, targetX + floatX, 0.1);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, targetY + floatY, 0.1);
        meshRef.current.position.z = positionFactor[2]; // La profundidad se mantiene fija

        meshRef.current.rotation.x += 0.005;
        meshRef.current.rotation.y += 0.005;
    });

    return (
        <mesh ref={meshRef}>
            <primitive object={geometry} attach="geometry" />
            <meshPhongMaterial
                color={color}
                wireframe
                transparent
                opacity={0.15}
            />
        </mesh>
    );
}

export default function Background3D() {
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={1} />

                {/* Esquina Superior Izquierda */}
                <FloatingShape
                    geometry={new THREE.IcosahedronGeometry(1, 0)}
                    positionFactor={[-0.4, 0.35, -2]}
                    color="#000000"
                />

                {/* Esquina Inferior Derecha */}
                <FloatingShape
                    geometry={new THREE.TorusGeometry(0.7, 0.2, 16, 32)}
                    positionFactor={[0.4, -0.35, -3]}
                    color="#333333"
                />

                {/* Fondo - Centro Derecha */}
                <FloatingShape
                    geometry={new THREE.OctahedronGeometry(1.2, 0)}
                    positionFactor={[0.3, 0.1, -6]}
                    color="#666666"
                />

                {/* Fondo - Abajo Izquierda */}
                <FloatingShape
                    geometry={new THREE.DodecahedronGeometry(0.8, 0)}
                    positionFactor={[-0.35, -0.3, -5]}
                    color="#999999"
                />
            </Canvas>
        </div>
    );
}
