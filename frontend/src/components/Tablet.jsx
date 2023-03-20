import { Html } from "@react-three/drei"

export default function Tablet({ toTablet }){

    return (
        <Html
          position={[0.1095, 1.212, .828]}
          rotation-x={-Math.PI / 9}
          distanceFactor={.056}
          wrapperClass="tablet"
          occlude
          transform
        >
          <iframe src="../../index.html" />
        </Html>
    )
}
