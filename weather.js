

let key = "fe229d11b17842e489e90611243108"


let url =`http://api.weatherapi.com/v1/current.json?key=${key}&q=`

async function result() {
    let res = await axios.get(url);
    let temp = res.data.current.temp_c;
    console.log(temp);
    
}
let h3 = document.querySelector("#weather_type")
let bg = document.querySelector("#bg")
let images = ["img5.jpg","img8.jpg","img11.jpg", "img1 (2).jpg", "img4.jpg" ];
let currentIndex = 0;

function cycleImages() {
    bg.src = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
    
    setTimeout(cycleImages, 6000);
}
cycleImages();

let btn = document.querySelector(".btns");
btn.addEventListener("click", async(event)=>{
    event.preventDefault();
    try{
    let city = document.querySelector(".city");
    let location = city.value;
    let res = await axios.get(url+location);
    let temp = res.data.current.temp_c;

    temper.innerHTML = `${temp}&#176C`;
    feels_like.innerHTML = `Real Feel ${res.data.current.feelslike_c}`;
    humidity.innerHTML = `Humidity ${res.data.current.humidity} %`;
    h3.innerHTML = `Conditon: ${res.data.current.condition.text}`;
    precip.innerHTML = `Precipitation: ${res.data.current.precip_in}`
    console.log(res);
   
    let mist = res.data.current.condition.text;
    let climate = document.querySelector(".img1");
    if(mist=="Mist"){
        climate.src = "mist.png";

    }else if(mist==="Partly Cloudy" || mist==="Partly cloudy"){
        climate.src = "cloud.png";
    }else if(mist==="Moderate or heavy rain with thunder" || mist==="Patchy light rain with thunder"){
        climate.src = "thunderRain.png"
    }else if(mist==="Light rain shower" || mist==="Light rain" || mist==="Patchy rain nearby"){
        climate.src="lightrain.png"
    }else if(mist==="Sunny"){
        climate.src = "sunny1.png"
    }else if(mist==="Overcast"){
        climate.src ="overcast.png"
    }else if(mist==="Thundery outbreaks in nearby"){
        climate.src="thunder.png"
    }
    
}catch(err){
    let img1 = document.querySelector(".img1");
    setTimeout(()=>{

        img1.src = "404.png"
        console.log(err, "invalid location")
        h3.innerHTML  = "Invalid Location";
        temper.innerHTML = ""
    },1000);
}
})
async function locationOne() {
    let url1 = `http://api.weatherapi.com/v1/current.json?key=${key}&q=mumbai`;
    let resu = await axios.get(url1);
    temp_0.innerHTML = resu.data.current.temp_c;
    feels_like_0.innerHTML = resu.data.current.feelslike_c;
    humidity_0.innerHTML = resu.data.current.humidity;
    country_1.innerHTML = resu.data.location.country;

    
}
 locationOne();
 async function locationTwo() {
    let url2 = `http://api.weatherapi.com/v1/current.json?key=${key}&q=aligarh`;
    let resu = await axios.get(url2);
    temp_2.innerHTML = resu.data.current.temp_c;
    feels_like_2.innerHTML = resu.data.current.feelslike_c;
    humidity_2.innerHTML = resu.data.current.humidity;
    country_2.innerHTML = resu.data.location.country;

3
}
 locationTwo();
 
 async function locationThree() {
    let url3 = `http://api.weatherapi.com/v1/current.json?key=${key}&q=kathmandu`;
    let resu = await axios.get(url3);
    temp_3.innerHTML = resu.data.current.temp_c;
    feels_like_3.innerHTML = resu.data.current.feelslike_c;
    humidity_3.innerHTML = resu.data.current.humidity;
    country_3.innerHTML = resu.data.location.country;

    
}
 locationThree();