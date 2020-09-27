/* Global Variables */
const apiKey = '&appid=f9536f2c554534bda5c8e2d4e3717190&units=metric'
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?zip=';

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+ 1 +'.'+ d.getDate()+'.'+ d.getFullYear();
const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const day = weekDays[d.getDay()];

//get temperature

const getTemp = async(url,zip,key)=>{
    const res = await fetch(url+zip+key)
    try{
      const json = await res.json();
      const temp = json.main.temp;
      return temp;
    }catch(error){
      console.log('error',error)
    }
  };

// update UI
 function updateUI (temp) {
  let feeling = document.getElementById('feelings').value;
  document.getElementById('temp').innerHTML = 'Temperature: ' + '<span style ="color: #000e4d">'+ temp + '</span>';
  document.getElementById('date').innerHTML = 'Date: ' +  '<span style ="color: #000e4d">'+ day +' ' + newDate + '</span>';
  document.getElementById('content').innerHTML ='Feelings: ' +'<span style ="color: #000e4d">'+ feeling + '</span>';
 
 }

// generte all the functions
function generate () {
 let newZip = document.getElementById('zip').value;
 
  if (newZip.length == 0) {
    alert('Enter the desired Zip code');
    
  } else {
 getTemp(baseUrl,newZip,apiKey)
 .then (updateUI)
 }
}

document.getElementById('generate').addEventListener('click', generate);


    
