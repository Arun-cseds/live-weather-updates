import { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./infoBox";



export default  function WatherApp(){

    const[weatherInfo ,setWeatherInfo]=useState({
        city:"delhi",
        feelsLike:24.84,
        temp:25,
        temMin:34,
        tempMax:25,
        humidity:47,
        weather:"haze",

    });

    let updateInfo=(newInfo)=>{
        setWeatherInfo(newInfo);
    }

    return(
        <div style={{textAlign:"center"}} >
        <h1> weather app by delta</h1>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo}/>
        </div>
    )

}