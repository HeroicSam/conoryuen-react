import gsap from 'gsap'

import HotswapsApp from './tabletapps/HotswapsApp'

function TabletHome() {

  function openApp(appClass) {
    const appCSSClass = `.${appClass}`
    const t1 = gsap.timeline()

    t1.to(appCSSClass, {
      width: "90px",
      height: "90px",
      duration: .2,
    })
    .to(appCSSClass, {
      position: "absolute",
      width: "673px",
      height: "934px",
      duration: .2
    })
  }

  return (
    <div className='w-[670px] h-[930px] bg-transparent w-full h-full grid grid-cols-4 grid-rows-4'>
      <HotswapsApp openApp={openApp} />
      <div className='appTwo appShadow bg-white h-20 w-20 rounded-2xl place-self-center' onClick={() => openApp("appTwo")}></div>
      <div className='appThree appShadow bg-white h-20 w-20 rounded-2xl place-self-center' onClick={() => openApp("appThree")}></div>
      <div className='appFour appShadow bg-white h-20 w-20 rounded-2xl place-self-center' onClick={() => openApp("appFour")}></div>
    </div>
  )
}

export default TabletHome;
