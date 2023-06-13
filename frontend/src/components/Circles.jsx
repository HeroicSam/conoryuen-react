function Circles() {
  return (
    <div className="circle-container absolute w-full h-full">
      <div className="circle-one-container absolute -translate-x-[20%] -translate-y-[30%]">
        <div className="circle-one rounded-full bg-gradient-to-r from-soft-yellow to-soft-green w-[28rem] h-[28rem] z-0" />
      </div>
      <div className="absolute rounded-full bg-gradient-to-r from-soft-yellow to-soft-green" />
      <div className="absolute rounded-full bg-gradient-to-r from-soft-yellow to-soft-green" />
      <div className="absolute rounded-full bg-gradient-to-r from-soft-yellow to-soft-green" />
      <div className="absolute rounded-full bg-gradient-to-r from-soft-yellow to-soft-green" />
    </div>
  )
};

export default Circles;