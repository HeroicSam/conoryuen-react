function NavBar({ isMobile }: { isMobile: boolean }) {
  return (
    <div className={`
      fixed flex w-full px-24 py-8 justify-between text-lg overflow-hidden forma
      ${isMobile ? 'px-8 py-6 text-base' : null}
    `}>
      <div className="ease">Conor Yuen</div>
      {isMobile && <a className="ease">Menu</a>}
      {!isMobile && (<div className="flex w-60 justify-between">
        <div className="ease">Works</div>
        <div className="ease">About Me</div>
        <div className="ease">Contact</div>
      </div>)}
    </div>
  )
}

export default NavBar;
