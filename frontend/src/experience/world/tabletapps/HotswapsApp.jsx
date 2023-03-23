function HotswapsApp({ openApp }) {
  return (
    <div
      className='appOne appShadow bg-appOne bg-cover h-20 w-20 rounded-2xl place-self-center hover:opacity-90'
      onClick={() => openApp("appOne")}
    ></div>
  )
}

export default HotswapsApp;
