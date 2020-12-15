// SCRIPT FOR WEATHERBOARD

    // This is our API key. Add your own API key between the ""
    var APIKey = "9d4c4c68cb8d17944cab0103a9ce0311";

    // Here we are building the URL we need to query the database
    var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=Bujumbura,Burundi&appid=" + APIKey;

    
    $("#add-city").on("click", function(event) { 
        
        event.preventDefault();

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
      let fah = (Kelvin - 273.15) * 1.8 + 32;
      console.log(fah);

      let cityEl = document.querySelector(".city")
      let tempEl = document.querySelector(".temp")
      let humidityEl = document.querySelector(".humidity")
      let windEl = document.querySelector(".wind")

      cityEl.textContent = "City: " + response.name;
      tempEl.textContent = "Temp: " + fah;
      humidityEl.textContent = "Humidity: " + response.main.humidity;
      windEl.textContent = "Wind: " + response.wind.speed;

      // Create CODE HERE to Log the queryURL
      // Create CODE HERE to log the resulting object
      // Create CODE HERE to calculate the temperature (converted from Kelvin)
      // Create CODE HERE to transfer content to HTML
      // Hint: To convert from Kelvin to Fahrenheit: F = (K - 273.15) * 1.80 + 32
      // Create CODE HERE to dump the temperature content into HTML

    });

    $.ajax({
      url: queryURL,
      method: "GET"
    }).catch(function(error) { 
      let cityEl = document.querySelector(".city")
      cityEl.textContent = "City not found"
      
    });

  });