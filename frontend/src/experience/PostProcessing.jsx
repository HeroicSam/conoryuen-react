import { EffectComposer, Noise, Bloom, Outline } from '@react-three/postprocessing'

function PostProcessing() {

  return (
    <EffectComposer>
      <Bloom luminanceThreshold={.77} luminanceSmoothing={0.1} height={300} />
      <Noise opacity={0.20} />
    </EffectComposer>
  )
}

export default PostProcessing;