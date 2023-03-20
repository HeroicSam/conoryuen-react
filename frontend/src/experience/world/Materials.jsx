import * as THREE from 'three';

export const materials = {
  pianoMaterial: new THREE.MeshToonMaterial({
    color: new THREE.Color('#dfdfdf')
  }),
  blackKeyMaterial: new THREE.MeshToonMaterial({
    color: new THREE.Color('black')
  }),
  whiteKeyMaterial: new THREE.MeshLambertMaterial({
    color: new THREE.Color('#ffffff')
  }),
  redMaterial: new THREE.MeshToonMaterial({
    color: new THREE.Color('#f62c2f')
  }),
  brassMaterial: new THREE.MeshStandardMaterial({
    // color: new THREE.Color('#E1C16E'),
    color: new THREE.Color('#b9853c'),

  }),
  woodMaterial: new THREE.MeshStandardMaterial({
    color: new THREE.Color('#a45724')
  })
}