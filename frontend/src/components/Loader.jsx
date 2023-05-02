
function Loader() {
  return (
    <div>
      <div className="w-full h-full bg-black flex justify-center items-center">
        <h1 className="text-white stilson">{Math.floor(progress)}</h1>
      </div>
    </div>
  )
}

export default Loader;
