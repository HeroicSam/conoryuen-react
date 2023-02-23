import { Html, useProgress } from '@react-three/drei';

function Loader( { setIsLoaded } ) {
  const { active, progress, errors, item, loaded, total } = useProgress()
  console.log(active, errors);
  if ( !active ) {
    console.log('setting active')
    setIsLoaded(!active);
  };
  return (
    <Html fullscreen>
      <div className="w-full h-full bg-black flex justify-center items-center">
        <h1 className="text-white stilson">{Math.floor(progress)}</h1>
      </div>
    </Html>
  )
}

export default Loader;
