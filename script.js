//fetching countries
fetch("https://restcountries.com/v2/all")
  .then((res) => res.json())
  .then((data) => initialize(data))
  .catch((err) => console.log("Error:", err));

function initialize(countriesData) {
  countries = countriesData;

  // creating container
  container = document.createElement("div");
  container.className = "container";
  container.id = "container";

  // creating row
  row = document.createElement("div");
  row.className = "row bg-secondary px-2 py-3";
  row.id = "row";

  for (i = 0; i < countries.length; i++) {
    let weatherName;
    let weatherTemp;
    
    // weather fetching
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${countries[i].name}&appid=6e3f057296300570ebb45831f51418ea`)
      .then((res) => res.json())
      .then((data) => getWeather(data))
      .catch((err) => console.log("Error:", err));

    function getWeather(weather) {
      console.log(weather);
      weatherName = weather.name;
      weatherTemp = weather.main.temp;
    }

    //creating elements
    col = document.createElement("div");
    card = document.createElement("div");
    cardHeader = document.createElement("div");
    h6 = document.createElement("h6");
    cardBody = document.createElement("div");
    flag = document.createElement("img");
    capital = document.createElement("p");
    region = document.createElement("p");
    code = document.createElement("p");
    latlng = document.createElement("p");
    button = document.createElement("button");
    h1= document.createElement("h1");

    //creating className
    col.className = "col-lg-4 col-md-6 col-sm-12 text-center text-white py-3";
    card.className = "card";
    cardHeader.className = "card-header bg-dark";
    h6.className = "h6 mt-2";
    cardBody.className = "card-body";
    flag.className = "flag pb-3 mt-2";
    capital.className = "capital";
    region.className = "region";
    code.className = "code";
    latlng.className = "latlng";
    button.className = "btn btn-primary mb-5";
    h1.className = "text-center";

    //creating id
    col.id = "col";
    card.id = "card";
    cardHeader.id = "card-header";
    h6.id = "h6";
    cardBody.id = "card-body";
    flag.id = "flag";
    capital.id = "capital";
    region.id = "region";
    code.id = "code";
    latlng.id = "latlng";
    button.id = "btn";
    h1.id = "title";

    //adding details
    h6.innerHTML = countries[i].name;
    flag.src = countries[i].flag;
    capital.innerHTML = "Capital: " + countries[i].capital;
    region.innerHTML = "Region: " + countries[i].region;
    code.innerHTML = "Code: " + countries[i].alpha3Code;
    latlng.innerHTML = "Lat,Lng: " + countries[i].latlng;

    //flag style
    flag.style = "height:150px; width:250px;";

    //button function
    button.onclick = function () {
      alert("The current weather of " + weatherName + " is " + weatherTemp);
    };
    button.innerHTML = "Click for Weather";

    // appending the elements
    document.body.append(container);
    container.appendChild(h1);
    container.appendChild(row);
    row.appendChild(col);
    col.appendChild(card);
    card.appendChild(cardHeader);
    cardHeader.appendChild(h6);
    card.appendChild(cardBody);
    cardBody.appendChild(flag);
    cardBody.appendChild(capital);
    cardBody.appendChild(region);
    cardBody.appendChild(code);
    cardBody.appendChild(latlng);
    cardBody.appendChild(button);
  }
}
