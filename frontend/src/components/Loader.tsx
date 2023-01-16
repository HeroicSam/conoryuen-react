import { Html, useProgress } from '@react-three/drei';


function Loader( { setModelsLoaded } ) {
  const { active, progress, errors, item, loaded, total } = useProgress()
  if ( !active ) {
    setModelsLoaded(!active);
  };
  return (
    <Html center>{progress} % loaded</Html>
  )
}

export default Loader;