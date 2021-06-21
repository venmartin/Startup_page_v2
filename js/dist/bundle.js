(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

// Preload stop transitions

window.addEventListener('load', function () {
  document.body.classList.remove('preload');
})

// Loader for page on start

$.fakeLoader({
  timeToHide: 1500,
  bgColor: "#376fad",
  spinner: "spinner3"
});


// Weather Modal

$("#weather__modal").animatedModal({
  color: '#a2a2a2',
  animatedIn: 'fadeInUp',
  animatedOut: 'fadeOutUp',
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

// Show / Hide Weather and Time

document.querySelector(".show__weather").addEventListener('click', function () {
  let weatherContent = document.querySelector(".weather-content");
  weatherContent.classList.toggle('weather-content__hide');
});

document.querySelector(".show__time").addEventListener('click', function () {
  let timeContent = document.querySelector('.card-time');
  timeContent.classList.toggle('card-time__hide');
});


// Customization Menu Show or Hide

document.querySelector('.customize-menu__btn').addEventListener('click', function () {
  let customDrop = document.querySelector('.customize-menu__btn');

  if (customDrop.classList) {
    let customBox = document.querySelector('.customize__wrapper');
    let customBtn = document.querySelector('.customize-menu__svg');
    let visibleChange = document.getElementsByClassName('custom__hide__menu');
    for (var i = 0; i < visibleChange.length; i++) {
      visibleChange[i].classList.toggle('custom__open');
    }

    customBox.classList.toggle('customize__wrapper-open');
    customBtn.classList.toggle('customize__svg-rotate')
  }
});


// Move Clock top right

document.querySelector('.time__pos__top').addEventListener('click', function () {
  let timeBlock = document.querySelector('.time-container');
  timeBlock.classList.add('clock__pos__top');
});

document.querySelector('.time__pos__bottom').addEventListener('click', function () {
  let timeBlock = document.querySelector('.time-container');
  timeBlock.classList.remove('clock__pos__top');
});


// Change Clock Size


document.querySelector('.time__size__small').addEventListener('click', function () {
  let defaultTime = document.querySelector('.time__size');
  let defaultAmPm = document.querySelector('.ampm__size');
  let defaultDate = document.querySelector('.date');
  defaultTime.classList.add('small__time');
  defaultAmPm.classList.add('small__ampm');
  defaultTime.classList.remove('large__time');
  defaultAmPm.classList.remove('large__ampm');
  defaultDate.classList.remove('large__date');
});

document.querySelector('.time__size__medium').addEventListener('click', function () {
  let defaultTime = document.querySelector('.time__size');
  let defaultAmPm = document.querySelector('.ampm__size');
  let defaultDate = document.querySelector('.date');
  defaultTime.classList.remove('small__time');
  defaultAmPm.classList.remove('small__ampm');
  defaultTime.classList.remove('large__time');
  defaultAmPm.classList.remove('large__ampm');
  defaultDate.classList.remove('large__date');
});

document.querySelector('.time__size__large').addEventListener('click', function () {
  let defaultTime = document.querySelector('.time__size');
  let defaultAmPm = document.querySelector('.ampm__size');
  let defaultDate = document.querySelector('.date');
  defaultTime.classList.remove('small__time');
  defaultTime.classList.add('large__time');
  defaultAmPm.classList.add('large__ampm');
  defaultDate.classList.add('large__date');

});


// Show Shortcut Menu and Dock Buttons

document.querySelector('.shortcut__menu').addEventListener('click', function () {
  let menuDrop = document.querySelector('.shortcut__menu');

  if (menuDrop.classList) {
    let shortcutBox = document.querySelector('.shortcut-container');
    let menuBtn = document.querySelector('.shortcut-menu__btn')
    let dockBtns = document.getElementsByClassName('dock__btn');
    let slideMenu = document.querySelector('.menu__drop');
    for (var i = 0; i < dockBtns.length; i++) {
      dockBtns[i].classList.toggle('dock__btn__grow');

    }
    shortcutBox.classList.toggle('shortcut-container__open');
    menuBtn.classList.toggle('shortcut-menu__btn-rotate');
    slideMenu.classList.toggle('menu__slide');
    
  }
})


//  Show hide Shorcuts Nav Menu

document.querySelector('.shortcut-show-hide').addEventListener('click', function(){ 
  let dockMenu = document.querySelector('.menu__container');
  dockMenu.classList.toggle('hide__shortcuts');
})




// DOM Elements for time

const time = document.getElementById('time');
const ampmTime = document.getElementById('ampm');

// // Option for AM or PM

const showAMorPM = true;

// 24 Hour Time

let is24Hour = false;
const time12Hour = document.querySelector('.time12');
const time24Hour = document.querySelector('.time24');

// // This is to display the current time.

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ["January","February","March","April","May","June","July",
"August","September","October","November","December"];
const dateElement = document.querySelector('.date__today');
const dateElSmall = document.querySelector('.date');


function currentTime() {
  let today = new Date(),
      month = today.getMonth(),
      day = today.getDay(),
      date = today.getDate(),
      hour = today.getHours(),
      mins = today.getMinutes();


  dateElement.innerHTML = days[day] + ', ' + date + ' ' + months[month];
  dateElSmall.innerHTML = days[day] + ', ' + date + ' ' + months[month];

//    // This will set AM or PM

   const amPm = hour >= 12 ? 'PM' : 'AM';

//    // 12hr format
   

//    // Output the time

  if(is24Hour) {
   time.innerHTML = `${hour}<span>:</span>${addZero(mins)}`;
   ampmTime.innerHTML = ``
   setTimeout(currentTime, 1000);
  
  } else {
    hour = hour % 12 || 12;
    time.innerHTML = `${hour}<span>:</span>${addZero(mins)}`;
   ampmTime.innerHTML = `${showAMorPM ? amPm : ''}`;
   setTimeout(currentTime, 1000);
  }

}

// Change 12 or 24 hour 

let changeTime = function() {
  is24Hour = !is24Hour;
};

document.querySelector('.timeChange').addEventListener('click', function(){ 
  changeTime();
})


// // Function to add zero's to the minutes and seconds in single digits.

function addZero(num) {
  return (parseInt(num, 10) < 10 ? '0' : '') + num;
}



/*

Search Selector

*/

let ddg = document.querySelector('.duckduckgo');
let google = document.querySelector('.google');
let bing = document.querySelector('.bing');


function switchSearch (event) {
  let onlineSearchBtn = document.querySelector('.websr-btn');
  let onlineSearchBar = document.getElementById('search__bar');
  if (event.target == ddg) {
    changeSearch("DuckDuckGo");
    
        // Search Bar Change

        onlineSearchBar.classList.add('ddg-search-bar');
        onlineSearchBar.classList.remove('google-search-bar');
        onlineSearchBar.classList.remove('bing-search-bar');
        

        // Search Button Change-bar
        onlineSearchBtn.classList.add('ddg-search');
        onlineSearchBtn.classList.remove('google-search');
        onlineSearchBtn.classList.remove('bing-search');
    console.log("ddg")
  }
  if (event.target == google) {
    changeSearch("Google");

        // Search Bar Change

        onlineSearchBar.classList.remove('ddg-search-bar');
        onlineSearchBar.classList.add('google-search-bar');
        onlineSearchBar.classList.remove('bing-search-bar');
        
    
        // Search Button Change
        onlineSearchBtn.classList.remove('ddg-search');
        onlineSearchBtn.classList.add('google-search');
        onlineSearchBtn.classList.remove('bing-search');
    console.log("google")
  }
  if (event.target == bing) {
    changeSearch("Bing");

        // Search Bar Change

        onlineSearchBar.classList.remove('ddg-search-bar');
        onlineSearchBar.classList.remove('google-search-bar');
        onlineSearchBar.classList.add('bing-search-bar');
        
    
        // Search Button Change
        onlineSearchBtn.classList.remove('ddg-search');
        onlineSearchBtn.classList.remove('google-search');
        onlineSearchBtn.classList.add('bing-search');
    console.log("bing")
  }
}
  
// Event Listeners for Search Bar

document.addEventListener('click', switchSearch);
document.querySelector('.online-search').addEventListener('keyup', function (event) {
  let onlineSearch = document.querySelector('.online-search');
  let ddgSearch = document.querySelector('.ddg-search-bar');
  let googleSearch = document.querySelector('.google-search-bar');
  let bingSearch = document.querySelector('.bing-search-bar');
  let searchResult = onlineSearch.value;

  if (event.key == 'Enter' && ddgSearch) {

    window.open(`https://duckduckgo.com/?q=${searchResult}&t=hc&va=u&ia=web`, "_blank");
    onlineSearch.value = '';
    }
  
  if (event.key == 'Enter' && googleSearch) {
      window.open(`https://www.google.com/search?q=${searchResult}`, "_blank");
      onlineSearch.value = '';
    }
    
  if (event.key == 'Enter' && bingSearch) {
      window.open(`https://www.bing.com/search?q=${searchResult}`, "_blank");
      onlineSearch.value = '';

  }
});



document.querySelector('.websr-btn').addEventListener('click', function (event) {
  let onlineSearch = document.querySelector('.online-search');
  let ddgSearch = document.querySelector('.ddg-search');
  let googleSearch = document.querySelector('.google-search');
  let bingSearch = document.querySelector('.bing-search');
  let searchResult = onlineSearch.value;
  if (event.target && ddgSearch) {
    
    window.open(`https://duckduckgo.com/?q=${searchResult}&t=hc&va=u&ia=web`, "_blank");
    onlineSearch.value = '';
    }
  
  if (event.target && googleSearch) {
      window.open(`https://www.google.com/search?q=${searchResult}`, "_blank");
      onlineSearch.value = '';
    }
    
  if (event.target && bingSearch) {
      window.open(`https://www.bing.com/search?q=${searchResult}`, "_blank");
      onlineSearch.value = '';

  }
});

// Change the search location

function changeSearch (engine) {
  let searchBar = document.querySelector('.online-search')
  searchBar.setAttribute('placeholder', `You are about to search on ${engine}!`);

};


// News Modal
const articleItem = document.getElementById('article__box');
const regionNamesInEnglish = new Intl.DisplayNames(['en'], { type: 'region' });


// GNews api key: 293f39fcb569341a2bf2234ee89c344e


newsArticles = {
  apiKey: "293f39fcb569341a2bf2234ee89c344e",
  fetchNews: function() {
    fetch("https://gnews.io/api/v4/top-headlines?"
      + "token="
      + this.apiKey
      + "&lang=en"
      + "&country="
      + "au,us,gb"
      + "&topic=breaking-news,world,sports,business,technology"
      
  )
  .then(response => response.json())
  .then((data) => 
  this.displayNews(data));
  // console.log(data));
  
  
  
    },
  
  
    displayNews: function (data) {
      // const { articles } = data;
      // const { summary, country, link, language, media, title, topic} = data.articles[0];

  
      let createArticle = ``;
      data.articles.forEach((article, index) => {
        if (index == 0) {
  
        } else {
          createArticle += `
          <div id="article__box">
            <div class="article__items">
            <div class="news__media__img"><img src='${article.image}' alt="" class='media__img'></div>
            <div class="news__title">${article.title}</div>
            <div class="news__summary">${article.description}</div>
            <div class="news__info">
              
              <div class="original__source">${article.source.name}</div>
              <div class="original__link"><a href="${article.url}" target="_blank" rel="noopener no-referrer">Source</a></div>
            </div>
            </div>
        </div>
          `
          // <div class="news__topic">${article.topic.toUpperCase()} News</div>
          // <div class="news__country">Country: ${regionNamesInEnglish.of(article.country)}</div>
    } 
    
  }
  )
    articleItem.innerHTML = createArticle;
  },
};

// let newsArticles = {

//   fetchNews: function() {
//     fetch("https://newscatcher.p.rapidapi.com/v1/latest_headlines?topic=world&lang=en&country="
//       // + "AU"
//       + "&media=True", {
//       "method": "GET",
//       "headers": {
//         "x-rapidapi-key": "fcca3bccfemshc5d447449233745p17d6dcjsndda59961c6e2",
//         "x-rapidapi-host": "newscatcher.p.rapidapi.com"
//       }
//     })
//   .then(response => response.json())
//   // .catch(err => {
//   // 	console.error(err);
//   // })
//   .then((data) => this.displayNews(data));
  
  
//     },
  
  
//     displayNews: function (data) {
//       // const { articles } = data;
//       // const { summary, country, link, language, media, title, topic} = data.articles[0];

  
//       let createArticle = ``;
//       data.articles.forEach((article, index) => {
//         if (index == 0) {
  
//         } else {
//           createArticle += `
//           <div id="article__box">
//             <div class="article__items">
//             <div class="news__media__img"><img src='${article.media}' alt="" class='media__img'></div>
//             <div class="news__title">${article.title}</div>
//             <div class="news__summary">${article.summary}</div>
//             <div class="news__info">
//               <div class="news__topic">${article.topic.toUpperCase()} News</div>
//               <div class="news__country">Country: ${regionNamesInEnglish.of(article.country)}</div>
//               <div class="original__source">${article.rights}</div>
//               <div class="original__link"><a href="${article.link}" target="_blank" rel="noopener no-referrer">Source</a></div>
//             </div>
//             </div>
//         </div>
//           `
//     } 
    
//   })
//     articleItem.innerHTML = createArticle;
//   },
// };

  articleItem.addEventListener('click', newsArticles.fetchNews());
  $('#news-tab').click(function(event) {
    $(this).modal({
      fadeDuration: 500
    });
    return false;
  });


/*

Weather App

*/

const weatherModalBg = document.querySelector('.modal__bg__img');

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

      
      weatherModalBg.style.backgroundImage = `url('img/${icon}.jpg')`;
      
      
      document.querySelector('.city').innerText = `${name}, ${country}`;
      document.querySelector('.description').innerText = description;
      let weatherTemp = document.querySelectorAll('.temp');
        weatherTemp.forEach(function(item){
          item.innerText = `${Math.round(temp)}°C`;
        });
      document.querySelector('.humidity').innerHTML = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
	c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
	s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
	c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
	S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
	c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
	C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
	s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
	c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
	c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
	c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
	 M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
	c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
	c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
	c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
	c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
	l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
	"></path></svg>
       | ${humidity}%`;
      document.querySelector('.wind').innerHTML = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><g><path fill="none" d="M0 0h24v24H0z"></path><path d="M10.5 17H4v-2h6.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 10.5 17zM5 11h13.5a3.5 3.5 0 1 1-3.278 4.73l1.873-.703A1.5 1.5 0 1 0 18.5 13H5a3 3 0 0 1 0-6h8.5a1.5 1.5 0 1 0-1.405-2.027l-1.873-.702A3.501 3.501 0 0 1 17 5.5 3.5 3.5 0 0 1 13.5 9H5a1 1 0 1 0 0 2z"></path></g></svg>
      | ${speed}km/h`;
      weather7Day.fetchWeather(lat.toFixed(2), lon.toFixed(2));
    },
    search: function () {
      this.fetchWeatherSearch(document.querySelector('.search-box').value);
      
    },
};

document
  .querySelector('.searchbtn')
  .addEventListener('click', function () {
    let emptyBox = document.querySelector('input');
      emptyBox.innerHTML = '';
      weatherOriginal.search();
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
          
          // currentTemp.innerHTML = `          
          // <div id='current__forecast__small' class="weather__forecast__item">
          //  <img src='icons/${day.weather[0].icon}.svg' alt="" class='icon icon__small'>
          //  <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
          //  <span class='divider'></span>
          //  <div class="temp small__temp">${Math.round(day.temp.day)}</div>
          //      <div class="min__max__wrapper">
          //        <div class="small__min">${Math.round(day.temp.min)}</div>
          //        <div class="small__max">${Math.round(day.temp.max)}</div>
          //     </div>
          //   <div class='daily__desc'>
          //     <div class='daily__humidity'>${day.humidity}%</div>
          //     <div class='daily__windspeed'>${day.wind_speed}km/H</div>
          //   </div>
          // `


        } else {
                   
          everyOtherDay += `
          <div id='weather__forecast'>
          <div class="weather__forecast__item">
               <div class="day">${window.moment(day.dt*1000).format('ddd')}</div>
                <span class='divider'></span>
            <div class="third__temp small__temp"><img src='icons/${day.weather[0].icon}.svg' alt="" class='d3 icon__small'>
            <span class="small__vert__divider"></span>
              <div class="temp__small__current">${Math.round(day.temp.day)}°</div>
              </div>
            <div class="min__max__wrapper">
              <div class="small__max">
              <svg class="maxarrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 3.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V4a.5.5 0 01.5-.5z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M7.646 2.646a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8 3.707 5.354 6.354a.5.5 0 11-.708-.708l3-3z" clip-rule="evenodd"></path></svg>
              <span class="small__vert__divider"></span>
              <div class="temp__small__max">${Math.round(day.temp.max)}°</div>
              </div>
              <div class="small__min">
              <svg class="minarrow" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.646 9.646a.5.5 0 01.708 0L8 12.293l2.646-2.647a.5.5 0 01.708.708l-3 3a.5.5 0 01-.708 0l-3-3a.5.5 0 010-.708z" clip-rule="evenodd"></path><path fill-rule="evenodd" d="M8 2.5a.5.5 0 01.5.5v9a.5.5 0 01-1 0V3a.5.5 0 01.5-.5z" clip-rule="evenodd"></path></svg>
              <span class="small__vert__divider"></span>
              <div class="temp__small__min">${Math.round(day.temp.min)}°</div>
              </div>
            </div>
            <div class='daily__desc'>
              <div class='daily__humidity'>
              <svg stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 30 30" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.56,17.19c0-0.88,0.24-1.89,0.72-3.03s1.1-2.25,1.86-3.31c1.56-2.06,2.92-3.62,4.06-4.67l0.75-0.72
	c0.25,0.26,0.53,0.5,0.83,0.72c0.41,0.42,1.04,1.11,1.88,2.09s1.57,1.85,2.17,2.65c0.71,1.01,1.32,2.1,1.81,3.25
	s0.74,2.16,0.74,3.03c0,1-0.19,1.95-0.58,2.86c-0.39,0.91-0.91,1.7-1.57,2.36c-0.66,0.66-1.45,1.19-2.37,1.58
	c-0.92,0.39-1.89,0.59-2.91,0.59c-1,0-1.95-0.19-2.86-0.57c-0.91-0.38-1.7-0.89-2.36-1.55c-0.66-0.65-1.19-1.44-1.58-2.35
	S7.56,18.23,7.56,17.19z M9.82,14.26c0,0.83,0.17,1.49,0.52,1.99c0.35,0.49,0.88,0.74,1.59,0.74c0.72,0,1.25-0.25,1.61-0.74
	c0.35-0.49,0.53-1.15,0.54-1.99c-0.01-0.84-0.19-1.5-0.54-2c-0.35-0.49-0.89-0.74-1.61-0.74c-0.71,0-1.24,0.25-1.59,0.74
	C9.99,12.76,9.82,13.42,9.82,14.26z M11.39,14.26c0-0.15,0-0.27,0-0.35s0.01-0.19,0.02-0.33c0.01-0.14,0.02-0.25,0.05-0.32
	s0.05-0.16,0.09-0.24c0.04-0.08,0.09-0.15,0.15-0.18c0.07-0.04,0.14-0.06,0.23-0.06c0.14,0,0.25,0.04,0.33,0.12s0.14,0.21,0.17,0.38
	c0.03,0.18,0.05,0.32,0.06,0.45s0.01,0.3,0.01,0.52c0,0.23,0,0.4-0.01,0.52c-0.01,0.12-0.03,0.27-0.06,0.45
	c-0.03,0.17-0.09,0.3-0.17,0.38s-0.19,0.12-0.33,0.12c-0.09,0-0.16-0.02-0.23-0.06c-0.07-0.04-0.12-0.1-0.15-0.18
	c-0.04-0.08-0.07-0.17-0.09-0.24c-0.02-0.08-0.04-0.19-0.05-0.32c-0.01-0.14-0.02-0.25-0.02-0.32S11.39,14.41,11.39,14.26z
	 M11.98,22.01h1.32l4.99-10.74h-1.35L11.98,22.01z M16.28,19.02c0.01,0.84,0.2,1.5,0.55,2c0.35,0.49,0.89,0.74,1.6,0.74
	c0.72,0,1.25-0.25,1.6-0.74c0.35-0.49,0.52-1.16,0.53-2c-0.01-0.84-0.18-1.5-0.53-1.99c-0.35-0.49-0.88-0.74-1.6-0.74
	c-0.71,0-1.25,0.25-1.6,0.74C16.47,17.52,16.29,18.18,16.28,19.02z M17.85,19.02c0-0.23,0-0.4,0.01-0.52
	c0.01-0.12,0.03-0.27,0.06-0.45s0.09-0.3,0.17-0.38s0.19-0.12,0.33-0.12c0.09,0,0.17,0.02,0.24,0.06c0.07,0.04,0.12,0.1,0.16,0.19
	c0.04,0.09,0.07,0.17,0.1,0.24s0.04,0.18,0.05,0.32l0.01,0.32l0,0.34c0,0.16,0,0.28,0,0.35l-0.01,0.32l-0.05,0.32l-0.1,0.24
	l-0.16,0.19l-0.24,0.06c-0.14,0-0.25-0.04-0.33-0.12s-0.14-0.21-0.17-0.38c-0.03-0.18-0.05-0.33-0.06-0.45S17.85,19.25,17.85,19.02z
	"></path></svg>
              ${day.humidity}%</div>
              <div class='daily__windspeed'>
              <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path></svg>
              ${day.wind_speed}km/h</div>
            </div>
        </div>
        </div>`
        
        
        }
      })

      document.querySelector('.sunrise').innerHTML = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M256 32l-64 80h32v64h64v-64h32l-64-80zm-9 187v80h18v-80h-18zm-63.992 53.602l-16.631 6.886 15.309 36.955 16.628-6.886-15.306-36.955zm145.984 0l-15.306 36.955 16.628 6.886 15.309-36.955-16.63-6.886zM77.795 284.068l-12.727 12.727 56.569 56.568 12.726-12.726-56.568-56.569zm356.41 0l-56.568 56.569 12.726 12.726 56.569-56.568-12.727-12.727zM256 337.994a118.919 118.919 0 0 0-59.5 15.95c-34.215 19.754-56.177 55.048-59.129 94.056H374.63c-2.952-39.008-24.914-74.302-59.129-94.057a118.919 118.919 0 0 0-59.5-15.949zM66.488 387.377l-6.886 16.63 36.955 15.307 6.886-16.628-36.955-15.309zm379.024 0l-36.955 15.309 6.886 16.628 36.955-15.306-6.886-16.631zM24 466v18h464v-18H24z"></path></svg>
       | ${window.moment(sunrise*1000).format('HH:mm a')}`;
      document.querySelector('.sunset').innerHTML = `
      <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M247 27v80h18V27h-18zm-63.992 53.602l-16.631 6.886 15.309 36.955 16.628-6.886-15.306-36.955zm145.984 0l-15.306 36.955 16.628 6.886 15.309-36.955-16.63-6.886zM77.795 92.068l-12.727 12.727 56.569 56.568 12.726-12.726-56.568-56.569zm356.41 0l-56.568 56.569 12.726 12.726 56.569-56.568-12.727-12.727zM256 145.994a118.919 118.919 0 0 0-59.5 15.95c-34.215 19.754-56.177 55.048-59.129 94.056H374.63c-2.952-39.008-24.914-74.302-59.129-94.057a118.919 118.919 0 0 0-59.5-15.949zM66.488 195.377l-6.886 16.63 36.955 15.307 6.886-16.628-36.955-15.31zm379.024 0l-36.955 15.309 6.886 16.628 36.955-15.306-6.886-16.631zM24 274v18h464v-18H24zm200 62v64h-32l64 80 64-80h-32v-64h-64z"></path></svg>
      | ${window.moment(sunset*1000).format('HH:mm a')}`;
 
      forecastItem.innerHTML = everyOtherDay;
    },

    search: function () {
      this.fetchWeather(document.querySelector('.search-box').value);
    },
    
};


// Carousel Glider.js

window.addEventListener('load', function(){
  new Glider(document.querySelector('.glider'), {
    slidesToShow: 3,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots',
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    }
  })});




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




document.querySelector('.location__btn').addEventListener('click', getGeolocation);

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
  $('#location-modal').modal({
    fadeDuration: 500,
    fadeDelay: 0.50
  });
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


// Dock buttons open in a new tab.


let dockContainer = document.querySelectorAll('.dock__btn');
dockContainer.forEach(dockContainer => dockContainer.addEventListener('click', function (e) {
    let item = e.currentTarget.id;
    window.open(`https://www.${item}.com`, '_blank');
}));

// // Run the app

getGeolocation();
currentTime();



},{}]},{},[1]);
