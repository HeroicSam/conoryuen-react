import { useState } from "react";

function LoadingScreen() {

  const [loadProgress, setLoadProgress] = useState(0);

  setTimeout(() => {
    if (loadProgress < 100) {
      setLoadProgress(loadProgress + 1);
    }
  }, 50)


  return (
    <div className="absolute w-full h-full bg-gradient-to-br from-soft-yellow to-soft-green">
      <h1 className="text-black">
        { loadProgress }%
      </h1>
    </div>
  )
}

export default LoadingScreen;

// need to add a svg noise filter and animate the gradient clockwise
