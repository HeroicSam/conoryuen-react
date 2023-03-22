function TabletApp() {

  console.log('mounting')

  return (
    <div className='w-[670px] h-[930px] bg-transparent w-full h-full'>
      <div className='absolute bg-white h-20 w-20 rounded-lg ml-20 mt-20'></div>
      <div className='absolute bg-white h-20 w-20 rounded-lg ml-60 mt-20'></div>
      <div className='absolute bg-white h-20 w-20 rounded-lg ml-80 mt-20'></div>
      <div className='absolute bg-white h-20 w-20 rounded-lg ml-100 mt-20'></div>
    </div>
  )
}

export default TabletApp;
