import { EffectComposer, Noise, Bloom } from '@react-three/postprocessing'

function PostProcessing() {
  return (
    <EffectComposer>
      <Bloom luminanceThreshold={.78} luminanceSmoothing={0.1} height={300} />
      <Noise opacity={0.20} />
    </EffectComposer>
  )
}

export default PostProcessing;