import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './infoBox.css'


export default function InfoBox({info}){

  const INIT_URL="https://images.unsplash.com/photo-1572224104789-b380cffbd9d2?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let COLD_URL=
  "https://plus.unsplash.com/premium_photo-1671658221576-8d9a4b04bd8e?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
  
  let HOT_URL=
  "https://plus.unsplash.com/premium_photo-1689298475215-ee343186074d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  let RAIN_URL=
  "https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";



    
    return(
      <div className="InfoBox">
      
<div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={
          info.humidity > 80 
          ? RAIN_URL 
           : info.temp >= 30 
          ? HOT_URL 
          : info.temp <= 15 
          ? COLD_URL 
          : INIT_URL
          }
          title="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city}
          </Typography>

          {/* Using separate Typography for each line */}
          <Typography variant="body2" color="text.secondary">
            Temperature = {info.temp}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Humidity = {info.humidity}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Min Temp = {info.tempMin}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Max Temp = {info.tempMax}°C
          </Typography>
          <Typography variant="body2" color="text.secondary">
            The Weather can be described as {info.weather} and feels like {info.feelsLike}°C.
          </Typography>
        </CardContent>
      </Card>
      </div>
    </div>

       
    )
}