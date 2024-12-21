import Suspense from 'react'
import { Canvas } from '@react-three/fiber'
import Loader from '../../src/components/Loader'
const Chess = React.lazy(() => import('../models/chess'));


/*<div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
 POPUP
</div>*/ 



const Home = () => {
  const adjustChessForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0]

    if(window.innerWidth <768) {
      screenScale = [0.9, 0.9, 0.9];
      screenPosition = [0, -6.5, -43];
    } else {
      screenScale = [1, 1, 1]
      screenPosition = [0, -6.5, -43];
    } 
    return [screenScale, screenPosition, rotation];
  }

  const [chessScale, ChessPosition, chessRotation] = adjustChessForScreenSize();
  return (
    <section className="w-full h-screen relative">
      {/* CANVAS- Root component that sets up entire 3D scene: lights, objects etc*/}
      <Canvas 
        className="w-full h-screen bg-transparent"
        camera={{ near: 0.1, far: 1000 }}
        > 
        <Suspense fallback={<Loader />}> {/* Show loader when 3D model is loading*/}
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />

          <Chess 

            position={ChessPosition}
            scale={chessScale}
            rotation={chessRotation}
            
          />

        </Suspense>
      </Canvas>
    </section>
  )
}

export default Home     