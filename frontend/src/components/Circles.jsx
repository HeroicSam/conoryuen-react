function Circles() {
  return (
    <div className="circle-container absolute w-full h-full">
      <div className="absolute -translate-x-[30%] -translate-y-[40%]">
        <div className="circle-one rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[28rem] h-[28rem] z-0"/>
      </div>
      <div className="absolute translate-x-[20%] translate-y-[20%] w-full h-full">
        <div className="circle-two rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[6.25rem] h-[6.25rem] z-0"/>
      </div>
      <div className="absolute translate-x-[80%] translate-y-[30%] w-full h-full z-20">
        <div className="circle-three rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[6.25rem] h-[6.25rem]"/>
      </div>
      <div className="absolute translate-x-[15%] translate-y-[60%] w-full h-full z-20">
        <div className="circle-four rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[15.625rem] h-[15.625rem]"/>
      </div>
      <div className="absolute translate-x-[55%] translate-y-[75%] w-full h-full z-20">
        <div className="circle-five rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[12.5rem] h-[12.5rem]" />
      </div>
    </div>
  )
};

export default Circles;