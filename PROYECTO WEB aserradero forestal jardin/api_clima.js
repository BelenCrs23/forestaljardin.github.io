const direccion = "https://api.openweathermap.org/data/2.5/weather?lat=34.36&lon=58.26&appid=60206ab352ed07783483c16b7801d61e&units=metric"
async function obtenerTemperatura(){
    try{
const response = await fetch(direccion);
const data = await response.json()
document.getElementById("tem").innerHTML = data.main.temp;
   
 }
 catch(error){console.log('ocurrió un error grave', error)}
}

 obtenerTemperatura()

