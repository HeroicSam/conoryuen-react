import { useState, useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

function Raycaster({ handleTransition }) {
  const { camera, raycaster, scene } = useThree();
  const [intersects, setIntersects] = useState([]);

  useEffect(() => {
    function handleMouseMove(event) {
      // calculate mouse position in normalized device coordinates
      // (-1 to +1) for both components
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      // update the picking ray with the camera and mouse position
      raycaster.setFromCamera(mouse, camera);

      // calculate objects intersecting the picking ray
      const intersections = raycaster.intersectObjects(scene.children, true);
      setIntersects(intersections);
      
      if(intersections.length > 0) {
        for(let i = 0; i < intersections.length; i++) {
          let intersectObj = intersections[i].object.name
          if(intersectObj === 'tablet') {
            handleTransition()
          }
        }
      }

    }

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [raycaster, camera, scene]);

  return null;
}

export default Raycaster;