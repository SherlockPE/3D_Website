import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

const RotatingCube = () => {
	const meshRef = useRef();
	useFrame(() => {
		if (meshRef.current) {
			meshRef.current.rotation.x += 0.01;
			meshRef.current.rotation.y += 0.01;
		}
	})
	return (
		<mesh ref={meshRef}>
			<cylinderGeometry args={[1, 1, 1, 32]} />
			<meshLambertMaterial color={'#468585'} emissive={'#468585'}/>
		</mesh>
	);
};

const App = () => {
	return (
		<div style={{ height: '100vh', width: '100vw' }}>
			<Canvas>
				<OrbitControls enableZoom enablePan enableRotate/>
				<directionalLight position={[1, 1, 1]} intensity={10} color={'#fef9f9'}/>
				<color attach="background" args={["#f0f0f0"]}/>
				<RotatingCube/>
			</Canvas>
		</div>
	);
};

export default App;
