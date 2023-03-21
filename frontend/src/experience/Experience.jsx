import { useState, Suspense } from 'react'
import Loader from '../components/Loader'

import CameraControls from './CameraControls'
import Lights from './Lights'
import PostProcessing from './PostProcessing'

function Experience() {

  const [isLoaded, setIsLoaded] = useState(false)

  return (
    <Suspense fallback={<Loader setIsLoaded={setIsLoaded} />}>
      <color attach="background" args={["#FFDFD3"]} />
      <CameraControls />
      <Lights />
      <PostProcessing />
    </Suspense>
  )
}

export default Experience
