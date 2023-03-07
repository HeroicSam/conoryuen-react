import { useMemo } from "react";
import { Color, Vector3 } from 'three'

export default function calculateShaderUniforms() {
  return useMemo(() => {
    return {
      treeUniforms: {
        colorMap: {
          value: [
            new Color('#427062').convertLinearToSRGB(),
            new Color('#33594e').convertLinearToSRGB(),
            new Color('#234549').convertLinearToSRGB(),
            new Color('#1e363f').convertLinearToSRGB(),
          ]
        },
        brightnessThresholds: {
          value: [0.9, 0.45, 0.001]
        },
        lightPosition: {
          value: new Vector3(15, 15, 15),
        }
      }
    }
  }, [])
}