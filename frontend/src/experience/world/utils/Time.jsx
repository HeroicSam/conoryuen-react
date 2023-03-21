import { useState } from "react";

function Time() {

  const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];


  const [currentDate, setCurrentDate] = useState(null)
  const [currentTime, setCurrentTime] = useState(null)

  function getTime() {

    let today = new Date();

    let date = today.getDate();


    let numericalMonth = today.getMonth()+1;
    let day = today.getDay();
    let hour = today.getHours();

    if(hour<10)hour = "0"+hour;

    var minute = today.getMinutes();
    if(minute<10)minute = "0"+minute;

    var second = today.getSeconds();
    if(second<10)second = "0"+second;

    setCurrentTime(`${hour - 12}:${minute}`)
    setCurrentDate(`${daysOfTheWeek[day]}, ${month[numericalMonth - 1]} ${date}`)
  }


  setTimeout(getTime, 1000);

  return (
    <div className="w-full mt-20 flex flex-col items-center">
      <p className="m-0 p-0 text-2xl">{currentDate}</p>
      <h1 className="m-0 p-0">{currentTime}</h1>
    </div>
  )
  
}

export default Time;