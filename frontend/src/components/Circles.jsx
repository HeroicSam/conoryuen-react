function Circles() {
  return (
    <div className="circle-container absolute w-full h-full">
      <div className="absolute -translate-x-[30%] -translate-y-[40%]">
        <div
          className="circle-one rounded-full bg-gradient-to-r from-soft-yellow to-soft-green z-0 
                    w-[18rem] h-[18rem]
                    lg:h-[20rem] lg:w-[20rem]
                    2xl:w-[28rem] 2xl:h-[28rem]"
        />
      </div>
      <div className="absolute w-full h-full
                      translate-x-[60%] translate-y-[10%] 
                      2xl:translate-x-[20%] 2xl:translate-y-[20%] ">
        <div className="circle-two rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[6.25rem] h-[6.25rem] z-0"/>
      </div>
      <div className="absolute w-full h-full z-20
                      translate-x-[90%] translate-y-[30%]
                      2xl:translate-x-[80%] 2xl:translate-y-[30%]">
        <div className="circle-three rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[6.25rem] h-[6.25rem]"/>
      </div>
      <div className="absolute w-full h-full z-20
                      -translate-x-[40%] translate-y-[60%]
                      md:translate-x-[10%]
                      "
      >
        <div className="circle-four rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[15.625rem] h-[15.625rem]"/>
      </div>
      <div className="absolute translate-x-[55%] translate-y-[75%] w-full h-full z-20">
        <div className="circle-five rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[12.5rem] h-[12.5rem]" />
      </div>
    </div>
  )
};

export default Circles;

// 2xl:translate-x-[15%] 2xl:translate-y-[60%]