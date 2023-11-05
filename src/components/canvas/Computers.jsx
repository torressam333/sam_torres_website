/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
import { Suspense, useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';
import './Computers.css';

const Computers = ({ isMobile, isTablet }) => {
  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight intensity={1} groundColor='white' />
      <pointLight intensity={2} />
      <spotLight
        position={[-20, 50, 10]}
        angle={1}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.3 : isTablet ? 0.6 : 0.75}
        position={
          isMobile ? [0, -4, -0.5] : isTablet ? [0, -2, -0.75] : [0, -3, -1]
        }
        rotation={[0, -0.2, -0.05]}
      />
    </mesh>
  );
};

const ComputerCanvas = () => {
  const [isMobile, setisMobile] = useState(false);
  const [isTablet, setisTablet] = useState(false);

  useEffect(() => {
    // Watch for view being <= 868px
    const mediaQuery = window.matchMedia('(max-width: 868px)');
    const mediaQueryTablet = window.matchMedia('(max-width: 1751px)');

    // Set initial val
    setisMobile(mediaQuery.matches); // T or F
    setisTablet(mediaQueryTablet.matches); // T or F

    // Set isMobile based on change event
    const handleMediaQueryChange = (event) => setisMobile(event.matches);

    // Listen for change of window size
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    mediaQueryTablet.addEventListener('change', handleMediaQueryChange);

    // Clean up fn to remove event when component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand'
      shadows
      camera={{ position: [20, 2, 4], fov: 30 }}
      gl={{ preserveDrawingBuffer: true }}
      className='computer3d'
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* Only rotate on x-axis */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} isTablet={isTablet} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputerCanvas;
