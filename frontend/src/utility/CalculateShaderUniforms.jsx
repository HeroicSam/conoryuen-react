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
      },
      grassUniforms: {
        colorMap: {
          value: [
            new Color('#8b9d77').convertLinearToSRGB(),
            new Color('#4c7f3b').convertLinearToSRGB(),
            new Color('#386837').convertLinearToSRGB(),
            new Color('#17332a').convertLinearToSRGB(),
          ]
        },
        brightnessThresholds: {
          value: [0.9, 0.25, 0.001]
        },
        lightPosition: {
          value: new Vector3(15, 15, 15),
        }
      },
      stageUniforms: {
        colorMap: {
          value: [
            new Color('#8b9d77').convertLinearToSRGB(),
            new Color('#8b9d77').convertLinearToSRGB(),
            new Color('#000000').convertLinearToSRGB(),
            new Color('#000000').convertLinearToSRGB(),
          ]
        },
        brightnessThresholds: {
          value: [0.9, 0.45, 0.001]
        },
        lightPosition: {
          value: new Vector3(15, 15, 15),
        }
      },
    }
  }, [])
}