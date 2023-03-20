import { Html } from "@react-three/drei";

function Tablet() {
  return (
    <Html
      position={[0.076, 1.192, .835]}
      rotation-x={-Math.PI / 9}
      distanceFactor={.056}
      wrapperClass="tablet"
      occlude
      transform
    >
      <iframe src="./src/experience/world/tablet/tablet.html" />
    </Html>
  )
}

export default Tablet;