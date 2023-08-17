import { useState } from "react"
import moment from "moment"

function ShowDep({name,time,direction}){
  
  let UserTime=new Date().toLocaleTimeString()
  let BusDepartureTime=time
  const format = "HH:mm:ss";
  const UserTimeMoment = moment(UserTime, format);
  const BusDepartureTimeMoment = moment(BusDepartureTime, format);
  const timeDifference = BusDepartureTimeMoment.diff(UserTimeMoment);
  const duration = moment.duration(timeDifference);
  let formattedDuration = duration.minutes()
  if ( isNaN(formattedDuration) ){
   formattedDuration = "mer än 1 timme "
  } if(formattedDuration<= 1){
    formattedDuration ="nu"
  }

  if(typeof formattedDuration === "number"){
    formattedDuration = `  ${formattedDuration} minuter `
  }

  return <div className="py-4 px-4 bg-gray-300 ">
    <h1>{name}</h1>
    <p> Mot : {direction}</p>
    <p className="font-bold">  {formattedDuration} </p>


  </div>
}
export default ShowDep