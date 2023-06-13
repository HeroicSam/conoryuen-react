function NavBar({ sizes }) {

  const isMobile = sizes.width < 768;

  console.log(isMobile)

  return (
    <div className={`
      fixed flex w-full top-0 px-16 py-10 justify-between text-lg font-pangramsansrounded text-gray-800 z-20
      ${isMobile ? 'px-4 py-6 text-base' : null}
    `}>
      <div className="ease">CONOR YUEN</div>
      {isMobile && <a className="ease">Menu</a>}
      {!isMobile && (<div className="flex w-60 justify-between">
        <div className="ease">WORK</div>
        <div className="ease">ABOUT</div>
        <div className="ease">CONTACT</div>
      </div>)}
    </div>
  )
}

export default NavBar;
