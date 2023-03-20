import { Canvas } from '@react-three/fiber'
import Experience from './Experience'

function App() {
  return (
    <Canvas shadows camera={{ position: [1.6, 1.9, 2.2] }}>
      <Experience />
    </Canvas>
  )
}

export default App
