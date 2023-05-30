import gsap from "gsap";

import LoadingScreen from "./components/LoadingScreen";
import NavBar from "./components/NavBar";
import Home from "./components/Home";

function App() {

  return (
    <div className="flex justify-center items-center font-mori h-full w-full">
      <NavBar />
      {/* <LoadingScreen /> */}
      <Home />
      </div>
  )
}

export default App
