function Lights() {
  return (
    <>
      <pointLight position={[0,5,4]} castShadow intensity={.5}/>
      <ambientLight intensity={.6} />
    </>
  )
}

export default Lights;