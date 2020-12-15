// SCRIPT FOR WEATHERBOARD
// TODO: Get website working and looking pretty
// TODO: Add country search box
// TODO: Add autocomplete feature if you have time

    // This is our API key. Add your own API key between the ""
    let APIKey = "9d4c4c68cb8d17944cab0103a9ce0311";

    // Here we are building the URL we need to query the database
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

    console.log(queryURL)

    
    $(".fa").on("click", function(event) { 
        event.preventDefault();
        populateToday();

    });

    $('#city-input').keydown( function( event ) {
        if ( event.which === 13 ) {
            // Do something
            // Disable sending the related form
            event.preventDefault();
            populateToday();
            console.log("hi");
            return false;
            

        }
    });

// TODO1: Fetch API key and input from search bar (Optional try make autocomplete search)

function populateToday(){
        // Here we grab the text from the input box
        var city = $("#city-input").val();

        // Here we construct our URL
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
    
    // We then created an AJAX call
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      console.log(queryURL);
      console.log(response);
      
      
      let Kelvin = parseInt(response.main.temp);
      let celsius = Math.round(Kelvin - 273.15)
      console.log(celsius);

      let cityEl = document.querySelector("#current-city")
      let tempEl = document.querySelector("#temp")
      let humidityEl = document.querySelector("#humidity")
      let windEl = document.querySelector("#wind")

      cityEl.textContent = "City: " + response.name;
      tempEl.textContent = "Temp: " + celsius + " degrees celsius";
      humidityEl.textContent = "Humidity: " + response.main.humidity ;
      windEl.textContent = "Wind: " + response.wind.speed;



    });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).catch(function(error) { 
      let cityEl = document.querySelector(".city")
      cityEl.textContent = "City not found"
      
    });
}

// TODO2: Function to Populate 5 day forecast and todays weather
function populate5day() {

}

// TODO3: Save latest search to list of recent searches
function updateHistory() {

}
    const where = encodeURIComponent(JSON.stringify({
        "name": "Sydney"
    }));

    $.ajax({
    url: 'https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&keys=name,country&where='+ where,
    method: "GET",
    beforeSend: function(xhr){
        xhr.setRequestHeader('X-Parse-Application-Id', '5bEnaOWskOiyQn1FGo4RFbJdXd92GYLBTViFxtrf');
        xhr.setRequestHeader('X-Parse-REST-API-Key', 'Brf9VPmNDu9QTwhU7F8sIhz3W4xCC8XreI8DR9cU');
    }
    }).then(function(response){
        console.log(response);
    });

