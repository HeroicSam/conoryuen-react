import { Suspense } from 'react'

import { Scene } from './world/Scene'
import { Ground }  from './world/Ground'
import Tablet from './world/Tablet'
import Camera from './Camera'
import Lights from './Lights'
import PostProcessing from './PostProcessing'

function Experience() {

  return (
    <>
      <Camera />
      <color attach="background" args={["#FFDFD3"]} />
      <Lights />
      <Suspense>
        <Ground />
        <Scene />
        <Tablet />
      </Suspense>
      <PostProcessing />
    </>
  )
}

export default Experience
