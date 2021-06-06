// Preload stop transitions

window.addEventListener('load', function () {
  document.body.classList.remove('preload');
})

// Loader for page on start

$.fakeLoader({
  timeToHide: 1,
  bgColor: "#376fad",
  spinner: "spinner3"
});


// Modal

$("#demo01").animatedModal({
  color: '#a2a2a2',
  animatedIn: 'backInUp',
  animatedOut: 'zoomOutDown',
  animationDuration: '1s',
  overflow: 'auto'
});


// Nav bar

// Show nav

document.querySelector('.nav-menu').addEventListener('click', function() {
  let navmenu = document.querySelector('.nav-menu');
  
  if(navmenu.classList) {
    let navOpen = document.querySelector('.nav-items');
    let listItems = document.querySelector('.list-items');
    let weatherCont = document.querySelector('.weather-container');
    navmenu.classList.toggle('nav-menu__open');
    navOpen.classList.toggle('nav-items__open');
    weatherCont.classList.toggle('weather-container__shift');
    listItems.classList.toggle('list-items__grow');

  }
  
})


// Show Shortcut Menu and Dock Buttons

document.querySelector('.shortcut__menu').addEventListener('click', function () {
  let menuDrop = document.querySelector('.shortcut__menu');

  if (menuDrop.classList) {
    let shortcutBox = document.querySelector('.shortcut-container');
    let menuBtn = document.querySelector('.shortcut-menu__btn')
    let dockBtns = document.getElementsByClassName('dock__btn');
    for (var i = 0; i < dockBtns.length; i++) {
      dockBtns[i].classList.toggle('dock__btn__grow');

    }
    shortcutBox.classList.toggle('shortcut-container__open');
    menuBtn.classList.toggle('shortcut-menu__btn-rotate');
    
  }
})

// DOM Elements for time

const time = document.getElementById('time');
const ampmTime = document.getElementById('ampm');

// // Option for AM or PM

const showAMorPM = true;

// // This is to display the current time.

function currentTime() {
  let today = new Date(),
      month = today.getMonth(),
      day = today.getDay(),
      date = today.getDate(),
      hour = today.getHours(),
      hour24 = today.getHours(),
      mins = today.getMinutes();

//    // This will set AM or PM

   const amPm = hour >= 12 ? 'PM' : 'AM';

//    // 12hr format
   hour = hour % 12 || 12;

//    // Output the time

   time.innerHTML = `${hour}<span>:</span>${addZero(mins)}`;
   ampmTime.innerHTML = `${showAMorPM ? amPm : ''}`;
   setTimeout(currentTime, 1000);
}

// // Function to add zero's to the minutes and seconds in single digits.

function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}

// Set the background and greeting to the time of day.

// function setBgGreeting () {
//   let today = new Date(),
//     hour = today.getHours();

//     if(hour < 12) {
// //       // Morning
      
//       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?sunrise')";
//       document.body.style.color = 'white';
//       greeting.textContent = 'Good Morning';
//     } else if (hour < 18) {
// //       // Afternoon
      
//       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?afternoon,landscape')";      
//       greeting.textContent = 'Good Afternoon'; 
//       document.body.style.color = 'white';
      
//     } else {
      
// //       // Evening
      
//       document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?night')";
//       greeting.textContent = 'Good Evening';
//       document.body.style.color = 'white';
//     }
// }

// // Get the name of user

// function getName () {
//   if(localStorage.getItem('userName') === null) {
//     userName.textContent = "[Enter Your Name]";
//   } else {
//     userName.textContent = localStorage.getItem('userName');
//   }
//   // userName.textContent = "Name"
// }


// // Set the name of the user

// function setName(e) {
//   if (e.key == 'Enter') {
//     // Check if ENTER is pressed.
//     // if (e.which == 13 || e.keyCode == 13) {
//       localStorage.setItem('userName', e.target.innerText);
//       userName.blur();
//       var brs = document.getElementsByTagName('br');
//         while (brs.length) {
//         brs[0].parentNode.removeChild(brs[0]);
// }
    
//   } else {
//     localStorage.setItem('userName', e.target.innerText)

//   }


// }


// // Listeners

// userName.addEventListener('keyup', setName);
// userName.addEventListener('blur', setName);



/*

One location = http://api.openweathermap.org/data/2.5/weather?q=Sydney&units=metric&appid=7b069d76e3865c86d3513410c18a4226

5 day forecast = https://api.openweathermap.org/data/2.5/onecall?lat=-33.98&lon=-151.12&exclude=hourly,daily&appid=7b069d76e3865c86d3513410c18a4226
*/

let weatherOriginal = {
  apiKey: "7b069d76e3865c86d3513410c18a4226",
  fetchWeather: function(latitude, longitude) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?lat="
       + latitude
       + "&lon="
       + longitude
       + "&units=metric&appid=" 
       + this.apiKey
      )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },

    fetchWeatherSearch: function(city) {
      fetch(
       "https://api.openweathermap.org/data/2.5/weather?q="
        + city
        + "&units=metric&appid=" 
        + this.apiKey
       )
         .then((response) => response.json())
         .then((data) => this.displayWeather(data));
      
    
    },

    displayWeather: function(data) {
      const { name } = data;
      const { country } = data.sys;
      const { icon, description } = data.weather[0];
      const { temp, humidity, feels_like } = data.main;
      const { speed } = data.wind;
      const { lon, lat} = data.coord;
      
      let weatherIcons = document.querySelectorAll('.icon');
        weatherIcons.forEach(function(item){
          item.src = `icons/${icon}.svg`
        });
      
      document.querySelector('.city').innerText = `${name}, ${country}`;
      document.querySelector('.description').innerText = description;
      let weatherTemp = document.querySelectorAll('.temp');
        weatherTemp.forEach(function(item){
          item.innerText = `${Math.round(temp)}°C`;
        });
      document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
      document.querySelector('.wind').innerText = `Wind Speed: ${speed}km/h`;
      // document.querySelector('.weather').classList.remove('loading');
      // document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?city%20of%20" + name + "')";
      // document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?${name}")`;
      weather7Day.fetchWeather(lat.toFixed(2), lon.toFixed(2));
    },
    search: function () {
      this.fetchWeatherSearch(document.querySelector('.search-box').value);
      
    },
};

document
  .querySelector('.searchbtn')
  .addEventListener('click', function () {
    let inputShape = document.querySelector('.card');
    let cardTimeShape = document.querySelector('.card-time');
    cardTimeShape.classList.remove('.card-time');
    inputShape.classList.remove('.card');
    let emptyBox = document.querySelector('input');
      emptyBox.innerHTML = '';
      weather.search();
  });

  document.querySelector('.search-box').addEventListener("keyup", function (event) {
    if (event.key == 'Enter') {
    weatherOriginal.search();
      
    }
  });
    


// Weather Forecast 7 days App
const currentTemp = document.getElementById('current__forecast__small');
const forecastItem = document.getElementById('weather__forecast');


const weather7Day = {
  apiKey: "7b069d76e3865c86d3513410c18a4226",
  fetchWeather: function(latitude, longitude) {
    fetch(
      "https://api.openweathermap.org/data/2.5/onecall?lat="
      + latitude
      + "&lon="
      + longitude
      + "&units=metric&exclude=hourly,minutely&appid="
      + this.apiKey
     )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function(data) {
      const { sunrise, sunset } = data.current;
      const { icon } = data.daily[0].weather[0];
      
      
      let weatherIcons = document.querySelectorAll('.icon__small');
        weatherIcons.forEach(function(item){
          item.src = `icons/${icon}.svg`
        });

      
      let everyOtherDay = '';
      data.daily.forEach((day, index) => {
        if (index == 0) {
          
          currentTemp.innerHTML = `          
          <div id='current__forecast__small' class="weather__forecast__item">
           <img src='icons/${day.weather[0].icon}.svg' alt="" class='icon icon__small'>
           <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
           <span class='divider'></span>
           <div class="temp small__temp">${Math.ceil(day.temp.day)}</div>
               <div class="min__max__wrapper">
                 <div class="small__min">${Math.round(day.temp.min)}</div>
                 <div class="small__max">${Math.round(day.temp.max)}</div>
              </div>
            <div class='daily__desc'>
              <div class='daily__humidity'>${day.humidity}%</div>
              <div class='daily__windspeed'>${day.wind_speed}km/H</div>
            </div>
          `
        } else {
                   
          everyOtherDay += `
          <div id='current__forecast__small' class="weather__forecast__item">
          <div class="weather__forecast__item">
            <img src='icons/${day.weather[0].icon}.svg' alt="" class='d3 icon__small'>
              <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <span class='divider'></span>
            <div class="third__temp small__temp">${Math.round(day.temp.day)}</div>
            <div class="min__max__wrapper">
              <div class="small__min">${Math.round(day.temp.min)}</div>
              <div class="small__max">${Math.round(day.temp.max)}</div>
            </div>
            <div class='daily__desc'>
              <div class='daily__humidity'>${day.humidity}%</div>
              <div class='daily__windspeed'>${day.wind_speed}km/H</div>
            </div>
        </div>
        </div>`
        
        
        }
      })
      

      
      document.querySelector('.sunrise').innerText = `Sunrise: ${window.moment(sunrise*1000).format('HH:mm a')}`;
      document.querySelector('.sunset').innerText = `Sunrise: ${window.moment(sunset*1000).format('HH:mm a')}`;

      // document.querySelector('.city').innerText = `Weather in ${timezone}`;
      // document.querySelector('.icon').src = `https://openweathermap.org/img/w/${icon}.png`
      // document.querySelector('.description').innerText = description;
      // document.querySelector('.temp').innerText = `${Math.round(temp)}°C`;
      // document.querySelector('.humidity').innerText = `Humidity: ${humidity}%`;
      // document.querySelector('.wind').innerText = `Wind Speed: ${speed}km/h`;
      // document.querySelector('.weather').classList.remove('loading');
      
      forecastItem.innerHTML = everyOtherDay;
    },

    search: function () {
      this.fetchWeather(document.querySelector('.search-box').value);
    },
    
};





// Geolocation

function getGeolocation () {
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(successCallback, errorCallback, {
      enableHighAccuracy: true,
      timeout: 5000
    })
  } else {
    console.log('Error: Not Supported');
  }
};

function successCallback(position) {
  const {latitude, longitude} = position.coords;
  let shortLat = Math.round(latitude * 100) / 100;
  let shortLong = Math.round(longitude * 100) / 100;
  console.log(shortLat);
  console.log(shortLong);

  weatherOriginal.fetchWeather(latitude, longitude);
  weather7Day.fetchWeather(latitude, longitude);
}

function errorCallback () {
  console.log('Error: Location not allowed. Weather cannot be determined by location. Please use the search bar or enable location services.');
 
}

// // Change background on button click

// document.querySelector('.shift-bg1').addEventListener('click', function() {
//   document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?cyberpunk")`;
//   return;
// })

// document.querySelector('.shift-bg2').addEventListener('click', function() {
//   document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?nature")`;
// })

// document.querySelector('.shift-bg3').addEventListener('click', function() {
//    document.body.style.backgroundImage = `url("https://source.unsplash.com/1600x900/?city")`;
// })


// // Drop down background changer

// document.querySelector('.dropbtn').addEventListener('click', function () {
//   let dropBtn = document.querySelector('.dropbtn');
  
//   if(dropBtn.classList) {
//     let bgDrop = document.querySelector('.change-bg');
//     let bgBtn1 = document.querySelector('.shift-bg1');
//     let bgBtn2 = document.querySelector('.shift-bg2');
//     let bgBtn3 = document.querySelector('.shift-bg3');
//     bgBtn1.classList.toggle('shift-hide');
//     bgBtn2.classList.toggle('shift-hide');
//     bgBtn3.classList.toggle('shift-hide');
//     bgDrop.classList.toggle('dropdown-bg');
//     dropBtn.classList.toggle('dropbtn-rotate');
//   }
//  }  
// );






// // Search Duckduckgo Directly.

// document.querySelector('.websr-btn').addEventListener('click', function () {
//   let onlineSearch = document.querySelector('.online-search');
//   let searchResult = onlineSearch.value;
//   window.open(`https://duckduckgo.com/?q=${searchResult}&t=hc&va=u&ia=web`, "_blank");
//   onlineSearch.value = '';
// })

// document.querySelector('.online-search').addEventListener('keyup', function (event) {
//   if (event.key == 'Enter') {
//   let onlineSearch = document.querySelector('.online-search');
//   let searchResult = onlineSearch.value;
//   window.open(`https://duckduckgo.com/?q=${searchResult}&t=hc&va=u&ia=web`, "_blank");
//   onlineSearch.value = '';
//   }
// })




// Dock buttons open in a new tab.


let dockContainer = document.querySelectorAll('.dock__btn');
dockContainer.forEach(dockContainer => dockContainer.addEventListener('click', function (e) {
    let item = e.currentTarget.id;
    window.open(`https://www.${item}.com`, '_blank');
}));



// // Run the app

getGeolocation();
currentTime();
// setBgGreeting();
// getName();


