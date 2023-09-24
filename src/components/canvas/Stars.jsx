import { useState, useRef, Suspense, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload, OrbitControls } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";

const Stars = (props) => {
  const whiteRef = useRef();
  const redRef = useRef();
  const yellowRef = useRef();
  const jugnuRef = useRef();
  const [jugnuColor, setJugnuColor] = useState('purple')
  let [whiteSphere] = useState(() => random.inSphere(new Float32Array(800), { radius: 1.2 }));
  let [redSphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1.2 }));
  let [yellowSphere] = useState(() => random.inSphere(new Float32Array(500), { radius: 1.2 }));
  let [jugnuSphere] = useState(() => random.inSphere(new Float32Array(50), { radius: 1.2 }));

  useFrame((state, delta) => {
    whiteRef.current.rotation.x -= Math.sin(delta)/750;
    whiteRef.current.rotation.z -= Math.cos(delta)/750;

    jugnuRef.current.rotation.x += Math.sin(delta)/650;
    jugnuRef.current.rotation.z += Math.cos(delta)/650;

    redRef.current.rotation.x -= Math.sin(delta)/700;
    redRef.current.rotation.z -= Math.cos(delta)/700;

    yellowRef.current.rotation.x += Math.sin(delta)/600;
    yellowRef.current.rotation.z += Math.cos(delta)/600;
  })

  setInterval(()=>{
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);

    setJugnuColor(`rgb(${r},${g},${b})`);
  }, 650);


  return (
    <group>
      <Points ref={whiteRef} positions={whiteSphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='white'
          size={0.006}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points ref={redRef} positions={redSphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='red'
          size={0.008}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points ref={yellowRef} positions={yellowSphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='yellow'
          size={0.007}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <Points ref={jugnuRef} positions={jugnuSphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color={jugnuColor}
          size={0.02}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
      <OrbitControls enableZoom={false} enablePan={false}/>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className='w-full h-auto absolute inset-0'>
      <Canvas camera={{ position: [0,0,1] }}>
      <Suspense fallback={null}>
          <Stars />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
