function Circles({ loading }) {
  return (
    <div className={`circle-container absolute w-full h-full max-h-[1080px] top-0 ${loading ? "overflow-hidden" : "overflow-x-clip" }`}>
      <div className="absolute
                      -translate-x-[30%] -translate-y-[40%]"
      >
        <div
          className="circle-one rounded-full bg-gradient-to-r from-soft-yellow to-soft-green z-0 
                    w-[18rem] h-[18rem]
                    lg:h-[20rem] lg:w-[20rem]
                    2xl:w-[28rem] 2xl:h-[28rem]"
        />
      </div>
      <div className="absolute top-20 right-20
                      sm:top-24 sm:right-44
      ">
        <div className="circle-two rounded-full bg-gradient-to-r from-soft-yellow to-soft-green z-0
                        w-[6.25rem] h-[6.25rem]
                        2xl:w-[10rem] 2xl:h-[10rem]
                        "
        />
      </div>
      <div className="absolute z-20 top-48 right-0">
        <div className="circle-three rounded-full bg-gradient-to-r from-soft-yellow to-soft-green
                        w-[6.25rem] h-[6.25rem]"
        />
      </div>
      <div className="absolute z-20 left-0 bottom-14 -translate-x-[70%]
                      sm:bottom-20 sm:-translate-x-[30%]
      ">
        <div className="circle-four rounded-full bg-gradient-to-r from-soft-yellow to-soft-green 
                        w-[15.625rem] h-[15.625rem]"
        />
      </div>
      <div className="absolute right-0 bottom-0 translate-y-[30%] translate-x-[30%]
                      sm:
      ">
        <div className="circle-five rounded-full bg-gradient-to-r from-soft-yellow to-soft-green 
                        w-[12.5rem] h-[12.5rem]" 
        />
      </div>
    </div>
  )
};

export default Circles;

// 2xl:translate-x-[15%] 2xl:translate-y-[60%]