
const searchInput = document.getElementById('search');
const searchBtn = document.getElementById('search-btn');
const weatherImage = document.getElementById('image');
const weatherImageTwo = document.getElementById('image-2');
const weatherImageThree = document.getElementById('image-3');
var today = document.querySelector('today');
var currentLocation = document.getElementById('location');

function successLocation(pos){
    console.log(pos.coords.latitude,pos.coords.longitude);
    getAPI(`${pos.coords.latitude},${pos.coords.longitude}`)
    
}
function errorLocation(error){
    console.log(error)

}



 function getLoction(){
    if(navigator.geolocation){

      navigator.geolocation.getCurrentPosition(successLocation, errorLocation,{});
    

    }else{
    alert('not')

    }

}
getLoction()


async function getAPI(city){
    // let APIKey = "6a02086e510a477a878145757240201";
    let getAPI = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=e4b5cef0ab3248b0b16214424240601&q=${city}&days=3`);
    const data = await getAPI.json();
    console.log(data)
    
    clearInput()
    displayData(data)
}
// getAPI();


searchBtn.addEventListener('click',function(){

    getAPI(searchInput.value);
    clearInput()

});
// getAPI('cairo')

function clearInput(){
    searchInput.value = '';
}

function displayData(list){
    document.getElementById('location').innerHTML =`${list.location.name}` ;
    document.getElementById('location-2').innerHTML =`${list.location.name}` ;
    document.getElementById('location-3').innerHTML =`${list.location.name}` ;
    document.querySelector('.num').innerHTML = `${list.current.temp_c}ºC`;
    document.getElementById('num-2').innerHTML = `${list.forecast.forecastday[1].day.maxtemp_c}ºC`;
    document.getElementById('num-3').innerHTML = `${list.forecast.forecastday[2].day.maxtemp_c}ºC`;
    weatherImage.src = `${list.current.condition.icon}`;
    weatherImageTwo.src = `${list.forecast.forecastday[1].day.condition.icon}`;
    weatherImageThree.src = `${list.forecast.forecastday[2].day.condition.icon}`;
    document.querySelector('.humidity').innerHTML = `${list.current.humidity}%`;
    document.querySelector('.humidity-2').innerHTML = `${list.current.humidity}%`;
    document.querySelector('.humidity-3').innerHTML = `${list.current.humidity}%`;
    document.querySelector('.wind').innerHTML = `${list.current.wind_kph}km/h`;
    document.querySelector('.wind-2').innerHTML = `${list.current.wind_kph}km/h`;
    document.querySelector('.wind-3').innerHTML = `${list.current.wind_kph}km/h`;
    document.querySelector('.wind-dir').innerHTML = `${list.current.wind_dir}`;
    document.querySelector('.wind-dir-2').innerHTML = `${list.current.wind_dir}`;
    document.querySelector('.wind-dir-3').innerHTML = `${list.current.wind_dir}`;
    
        // document.querySelector('.humidity').innerHTML = data[0].lat + "%";
    
}



var myDate = new Date();
var month = myDate.getMonth();
var date = myDate.getDate();
// console.log(date)
var day = myDate.getDay();
var days =  ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var today = days[day];
// console.log(today);

var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var inMonth = months[month];
// console.log(inMonth)
document.getElementById('today').innerHTML = today;
document.getElementById('date').innerHTML = date + inMonth;


let tomorrow = days[day+1];
console.log(tomorrow);
let afterTomorrow = days[day+2];
console.log(afterTomorrow);
document.getElementById('next-day').innerHTML = tomorrow;
document.getElementById('next-date').innerHTML = date+1 + inMonth;
document.getElementById('next-2days').innerHTML = afterTomorrow;
document.getElementById('next-2date').innerHTML = date+2 + inMonth;
























