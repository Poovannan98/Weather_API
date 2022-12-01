async function getWeather(){
    var cityName= document.querySelector('#cityName').value
       
   
    let data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=5ffb2bf73007aff071ad4d176e997efd`)
    let result = await data.json()
    console.log(result)
   
    var weather = document.querySelector('#weather')
    
    try{
    weather.innerHTML=`<div class="card text-center h-100" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" id="title">${result.name}</h1>
    </div>            
        <div class="card-body">
             <img src="./weather.jpg" class="card-img-top" alt="no">
        <div class="card-text">
       
                <p><span id="sp" >Country Code: </span><span id="sp1">${result.sys.country}</span></p>
                <p><span id="sp">Temperature: </span><span id="sp1">${result.main.temp}</span></p>
                <p><span id="sp">Humidity: </span><span id="sp1">${result.main.humidity}</span></p>
                <p><span id="sp">Pressure: </span><span id="sp1">${result.main.pressure}</span></p>
                <p><span id="sp">Wind Speed: </span><span id="sp1">${result.wind.speed}</span></p>
                <p><span id="sp">Weather: </span><span id="sp1">${result.weather[0].description}</span></p>             
                
        </div>            
        </div>
    </div>`
    }catch(err){
        weather.innerHTML=`<div class="card text-center h-100" style="width: 20rem;">
    <div class="card-header">
        <h1 class="text-center" id="title">Error Code: ${result.cod}</h1>
    </div>            
        <div class="card-body">
             <img src="./error.png" class="card-img-top" alt="no">
        <div class="card-text">
       
                <p><span id="sp" >Message: </span><span id="sp1">${result.message}</span></p>
        </div>            
        </div>
    </div>`
    }
    }

