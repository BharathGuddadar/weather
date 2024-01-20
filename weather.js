const apikey ="cf3c0a57450337efee6fb61219da5a21";
const form=document.querySelector("form");
// const apiUrl= "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search= document.querySelector("#search");
const weather=document.querySelector("#weather");
// const API='https://api.openweathermap.org/data/2.5/we ather?q={city}&appid=(API_KEY}&units=metric'

// const IMG_URL='https://openweathermap.org/img/wn/ ${data.weather[0].icon}@2x.png'

const getweather=async(city)=>{
    const url="https://archive-api.open-meteo.com/v1/archive?latitude=52.52&longitude=13.41&start_date=2024-01-03&end_date=2024-01-17&hourly=temperature_2m"
    const response=await fetch(url);
    console.log(response);
    const data=await response.json();
    return showweather(data);
}

const showweather=(data)=>{
    console.log(data)
    weather.innerHTML="    <div>    <h2>32 *C ⛅</h2>    <h4>clear</h4>    </div>    "
}

form.addEventListener(
    "submit",
    function(event){
        getweather(search.value)
        event.preventDefault();
    }
)