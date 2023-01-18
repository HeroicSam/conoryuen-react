import { Html, useProgress } from '@react-three/drei';


function Loader( { setIsLoaded } : { setIsLoaded: (name: boolean) => void }) {
  const { active, progress, errors, item, loaded, total } = useProgress()
  if ( !active ) {
    setIsLoaded(!active);
  };
  return (
    <Html fullscreen>
      <div className="w-full h-full bg-black flex justify-center items-center">
        <h1 className="text-white stilson">{progress}</h1>
      </div>
    </Html>
  )
}

export default Loader;