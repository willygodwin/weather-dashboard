// SCRIPT FOR WEATHERBOARD
// TODO: Get website working and looking pretty
// TODO: Fix the dashboard so that it doesn't  show duplicates and so that it doesn't show fake searches
// TODO: Add autocomplete feature if you have time

const countries = {
AF	:	"Afghanistan",
AL	:	"Albania",
DZ	:	"Algeria",
AS	:	"American Samoa",
AD	:	"Andorra",
AO	:	"Angola",
AI	:	"Anguilla",
AQ	:	"Antarctica",
AG	:	"Antigua and Barbuda",
AR	:	"Argentina",
AM	:	"Armenia",
AW	:	"Aruba",
AU	:	"Australia",
AT	:	"Austria",
AZ	:	"Azerbaijan",
BS	:	"Bahamas (the)",
BH	:	"Bahrain",
BD	:	"Bangladesh",
BB	:	"Barbados",
BY	:	"Belarus",
BE	:	"Belgium",
BZ	:	"Belize",
BJ	:	"Benin",
BM	:	"Bermuda",
BT	:	"Bhutan",
BO	:	"Bolivia (Plurinational State of)",
BQ	:	"Bonaire, Sint Eustatius and Saba",
BA	:	"Bosnia and Herzegovina",
BW	:	"Botswana",
BV	:	"Bouvet Island",
BR	:	"Brazil",
IO	:	"British Indian Ocean Territory (the)",
BN	:	"Brunei Darussalam",
BG	:	"Bulgaria",
BF	:	"Burkina Faso",
BI	:	"Burundi",
CV	:	"Cabo Verde",
KH	:	"Cambodia",
CM	:	"Cameroon",
CA	:	"Canada",
KY	:	"Cayman Islands (the)",
CF	:	"Central African Republic (the)",
TD	:	"Chad",
CL	:	"Chile",
CN	:	"China",
CX	:	"Christmas Island",
CC	:	"Cocos (Keeling) Islands (the)",
CO	:	"Colombia",
KM	:	"Comoros (the)",
CD	:	"Congo (the Democratic Republic of the)",
CG	:	"Congo (the)",
CK	:	"Cook Islands (the)",
CR	:	"Costa Rica",
HR	:	"Croatia",
CU	:	"Cuba",
CW	:	"Curaçao",
CY	:	"Cyprus",
CZ	:	"Czechia",
CI	:	"Côte d'Ivoire",
DK	:	"Denmark",
DJ	:	"Djibouti",
DM	:	"Dominica",
DO	:	"Dominican Republic (the)",
EC	:	"Ecuador",
EG	:	"Egypt",
SV	:	"El Salvador",
GQ	:	"Equatorial Guinea",
ER	:	"Eritrea",
EE	:	"Estonia",
SZ	:	"Eswatini",
ET	:	"Ethiopia",
FK	:	"Falkland Islands (the) [Malvinas]",
FO	:	"Faroe Islands (the)",
FJ	:	"Fiji",
FI	:	"Finland",
FR	:	"France",
GF	:	"French Guiana",
PF	:	"French Polynesia",
TF	:	"French Southern Territories (the)",
GA	:	"Gabon",
GM	:	"Gambia (the)",
GE	:	"Georgia",
DE	:	"Germany",
GH	:	"Ghana",
GI	:	"Gibraltar",
GR	:	"Greece",
GL	:	"Greenland",
GD	:	"Grenada",
GP	:	"Guadeloupe",
GU	:	"Guam",
GT	:	"Guatemala",
GG	:	"Guernsey",
GN	:	"Guinea",
GW	:	"Guinea-Bissau",
GY	:	"Guyana",
HT	:	"Haiti",
HM	:	"Heard Island and McDonald Islands",
VA	:	"Holy See (the)",
HN	:	"Honduras",
HK	:	"Hong Kong",
HU	:	"Hungary",
IS	:	"Iceland",
IN	:	"India",
ID	:	"Indonesia",
IR	:	"Iran (Islamic Republic of)",
IQ	:	"Iraq",
IE	:	"Ireland",
IM	:	"Isle of Man",
IL	:	"Israel",
IT	:	"Italy",
JM	:	"Jamaica",
JP	:	"Japan",
JE	:	"Jersey",
JO	:	"Jordan",
KZ	:	"Kazakhstan",
KE	:	"Kenya",
KI	:	"Kiribati",
KP	:	"Korea (the Democratic People's Republic of)",
KR	:	"Korea (the Republic of)",
KW	:	"Kuwait",
KG	:	"Kyrgyzstan",
LA	:	"Lao People's Democratic Republic (the)",
LV	:	"Latvia",
LB	:	"Lebanon",
LS	:	"Lesotho",
LR	:	"Liberia",
LY	:	"Libya",
LI	:	"Liechtenstein",
LT	:	"Lithuania",
LU	:	"Luxembourg",
MO	:	"Macao",
MG	:	"Madagascar",
MW	:	"Malawi",
MY	:	"Malaysia",
MV	:	"Maldives",
ML	:	"Mali",
MT	:	"Malta",
MH	:	"Marshall Islands (the)",
MQ	:	"Martinique",
MR	:	"Mauritania",
MU	:	"Mauritius",
YT	:	"Mayotte",
MX	:	"Mexico",
FM	:	"Micronesia (Federated States of)",
MD	:	"Moldova (the Republic of)",
MC	:	"Monaco",
MN	:	"Mongolia",
ME	:	"Montenegro",
MS	:	"Montserrat",
MA	:	"Morocco",
MZ	:	"Mozambique",
MM	:	"Myanmar",
NA	:	"Namibia",
NR	:	"Nauru",
NP	:	"Nepal",
NL	:	"Netherlands (the)",
NC	:	"New Caledonia",
NZ	:	"New Zealand",
NI	:	"Nicaragua",
NE	:	"Niger (the)",
NG	:	"Nigeria",
NU	:	"Niue",
NF	:	"Norfolk Island",
MK	:	"North Macedonia",
MP	:	"Northern Mariana Islands (the)",
NO	:	"Norway",
OM	:	"Oman",
PK	:	"Pakistan",
PW	:	"Palau",
PS	:	"Palestine, State of",
PA	:	"Panama",
PG	:	"Papua New Guinea",
PY	:	"Paraguay",
PE	:	"Peru",
PH	:	"Philippines (the)",
PN	:	"Pitcairn",
PL	:	"Poland",
PT	:	"Portugal",
PR	:	"Puerto Rico",
QA	:	"Qatar",
RO	:	"Romania",
RU	:	"Russian Federation (the)",
RW	:	"Rwanda",
RE	:	"Réunion",
BL	:	"Saint Barthélemy",
SH	:	"Saint Helena, Ascension and Tristan da Cunha",
KN	:	"Saint Kitts and Nevis",
LC	:	"Saint Lucia",
MF	:	"Saint Martin (French part)",
PM	:	"Saint Pierre and Miquelon",
VC	:	"Saint Vincent and the Grenadines",
WS	:	"Samoa",
SM	:	"San Marino",
ST	:	"Sao Tome and Principe",
SA	:	"Saudi Arabia",
SN	:	"Senegal",
RS	:	"Serbia",
SC	:	"Seychelles",
SL	:	"Sierra Leone",
SG	:	"Singapore",
SX	:	"Sint Maarten (Dutch part)",
SK	:	"Slovakia",
SI	:	"Slovenia",
SB	:	"Solomon Islands",
SO	:	"Somalia",
ZA	:	"South Africa",
GS	:	"South Georgia and the South Sandwich Islands",
SS	:	"South Sudan",
ES	:	"Spain",
LK	:	"Sri Lanka",
SD	:	"Sudan (the)",
SR	:	"Suriname",
SJ	:	"Svalbard and Jan Mayen",
SE	:	"Sweden",
CH	:	"Switzerland",
SY	:	"Syrian Arab Republic (the)",
TW	:	"Taiwan (Province of China)",
TJ	:	"Tajikistan",
TZ	:	"Tanzania, the United Republic of",
TH	:	"Thailand",
TL	:	"Timor-Leste",
TG	:	"Togo",
TK	:	"Tokelau",
TO	:	"Tonga",
TT	:	"Trinidad and Tobago",
TN	:	"Tunisia",
TR	:	"Turkey",
TM	:	"Turkmenistan",
TC	:	"Turks and Caicos Islands (the)",
TV	:	"Tuvalu",
UG	:	"Uganda",
UA	:	"Ukraine",
AE	:	"United Arab Emirates (the)",
GB	:	"United Kingdom of Great Britain and Northern Ireland (the)",
UM	:	"United States Minor Outlying Islands (the)",
US	:	"United States of America (the)",
UY	:	"Uruguay",
UZ	:	"Uzbekistan",
VU	:	"Vanuatu",
VE	:	"Venezuela (Bolivarian Republic of)",
VN	:	"Viet Nam",
VG	:	"Virgin Islands (British)",
VI	:	"Virgin Islands (U.S.)",
WF	:	"Wallis and Futuna",
EH	:	"Western Sahara*",
YE	:	"Yemen",
ZM	:	"Zambia",
ZW	:	"Zimbabwe",
AX	:	"Åland Islands"
}


let StoredCities = JSON.parse(localStorage.getItem("StoredCities"));

if (StoredCities !== null) {
    recentSearch = StoredCities;
  } else {
    // initialise array to store cities only requried on first ever creation
    recentSearch = []; 
    
  }

// This is our API key. Add your own API key between the ""
let APIKey = "9d4c4c68cb8d17944cab0103a9ce0311";

// Boolean to keep track of whether search is successful or not
let isGreatSuccess = false; 


// TODO1: Fetch API key and input from search bar (Optional try make autocomplete search)

function fetchCountry(obj, value){
    
    return Object.keys(obj).find(key => obj[key] === value);
}

function checkExisting(value){
    let i = 0;
    while(!isGreatSuccess && i < 8){
        if (value === recentSearch[i]){
            isGreatSuccess = true;
        }
        else{
            isGreatSuccess = false; 
        }
        i++;
    console.log(isGreatSuccess)
    }
}

function populateToday(city, country){
        let URL = "";

        console.log(fetchCountry(countries, country))

        // Here we construct our URL
        if (country === ""){
            URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;
        }
        if (country.length === 2){
            console.log(country)
            URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + country +  "&appid=" + APIKey;
        }
        else {
            console.log(country)
            URL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "," + fetchCountry(countries, country) + "&appid=" + APIKey;

        }
           

    // We then created an AJAX call
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response) {
        console.log(URL);
        console.log(response);
        
        
        //   let Kelvin = parseInt(response.main.temp);
        let celsius =  convertToCelsius(response.main.temp) //Math.round(Kelvin - 273.15)
        console.log(celsius);
        
            
            $(".current-city").text("")
        // Create City Name Div
        let cityElDiv = $("<h4>")

        //Getting current date from unix timestamp using moment.js
        let date = moment.unix(response.dt).format("DD/MM/YYYY");
        cityElDiv.text(response.name +", " + response.sys.country + " (" + date + ")"); 
        
        // Create weather Icon 
        let iconurl = "http://openweathermap.org/img/w/" + response.weather[0].icon + ".png"
        iconWeather = $("<img>");
        iconWeather.attr("src", iconurl);

        //Append to card headers
        $(cityElDiv).append(iconWeather);
        $(".current-city").append(cityElDiv);

        //Clear card body
        $(".current-weather").text("")
        
        //Create Temp div
        let tempDiv = $("<div>");
        tempDiv.text("Temperature: " + celsius + " " + String.fromCharCode(176) + "C");
        tempDiv.append($("<br>"));
        
        //Create Humidity div
        let humDiv = $("<div>");
        humDiv.text("Humidity: " + response.main.humidity + " %" );
        humDiv.append($("<br>"));
        
        //Create Wind Div 
        let windDiv =  $("<div>");
        windDiv.text("Wind: " + response.wind.speed + " m/s");
        windDiv.append($("<br>"));

        //Append to card body
        $(".current-weather").append(tempDiv);
        $(".current-weather").append(humDiv);
        $(".current-weather").append(windDiv);
        populateUV(response.coord.lat, response.coord.lon);

        // isGreatSuccess = true; 
        // console.log(isGreatSuccess);
      
    });

    $.ajax({
        url: URL,
        method: "GET"
    }).catch(function(error) { 
        console.log(error)

        $(".current-city").text("")
        // Create City Name Div
        let cityElDiv = $("<h4>")
        cityElDiv.text("City not found");
        $(".current-city").append(cityElDiv);
            
        // isGreatSuccess = false;
        // console.log(isGreatSuccess);
    
      
    });
}

//TODO2: Populate the UV index from other API
function populateUV(lat, lon) {

    let URL = "http://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;

    $.ajax({
        url: URL,
        method: "GET"
      }).then(function(response) {
        console.log(URL);
        console.log(response);
        console.log(response.value)

        //Create UV Div 
        let uvDiv =  $("<div>");
        uvDiv.text("UV Index: " + response.value);

        $(".current-weather").append(uvDiv);

        // isGreatSuccess = true;
        // console.log(isGreatSuccess);
        
      });

    $.ajax({
        url: URL,
        method: "GET"
    }).catch(function(error) { 
        console.log(error);
        
        // isGreatSuccess = false;
        // console.log(isGreatSuccess);
    });
}

// TODO3: Function to Populate 5 day forecast
function populateForecast(city, country = "noval") {
    let URL = "";

    console.log(fetchCountry(countries, country))

    // Here we construct our URL
    if (country === "noval"){
        URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=" + APIKey;
    }
    if (country.length === 2){
        console.log(country)
        URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + country +  "&appid=" + APIKey;
    }
    else {
        console.log(country)
        URL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "," + fetchCountry(countries, country) + "&appid=" + APIKey;

    }

    // We then created an AJAX call
    $.ajax({
        url: URL,
        method: "GET"
    }).then(function(response) {
        console.log(URL);
        console.log(response);
    
        
        clearForecast($(".forecast"))

        let index = 0
    

        for (let i = 0; i < 5 ; i ++){
            let colDiv = $("<div>"); 
            colDiv.addClass("col-md-2");

            let cardDiv = $("<div>");
            cardDiv.addClass("card fiveFore")

            let cardBodyDiv = $("<div>");
            cardBodyDiv.addClass("card-body"); 

            // Add Dates 
            let dateDiv = $("<div>");
            let date = moment.unix(response.list[index].dt).format("DD/MM/YYYY")
            dateDiv.text(date); //response.list[index].dt_txt
            
            //Add Weather icons
            let iconDiv = $("<div>");
            let iconWeather = $("<img>");
            let iconurl = "http://openweathermap.org/img/w/" + response.list[index].weather[0].icon + ".png"
            iconWeather.attr('src', iconurl);
            iconWeather.attr("alt", "Weather Icon")
            iconDiv.append(iconWeather)

            //Add temperature
            let tempDiv = $("<div>");
            let celsius = convertToCelsius(response.list[index].main.temp)
            tempDiv.text("Temperature: " + celsius + String.fromCharCode(176) + "C");

            //Add Humidity
            let humDiv = $("<div>");
            humDiv.text("Humidity: " + response.list[index].main.humidity + " %");


            console.log(response.list[index].weather[0].icon)

            //Append divs to card body
            cardBodyDiv.append(dateDiv);
            cardBodyDiv.append(iconDiv);
            cardBodyDiv.append(tempDiv);
            cardBodyDiv.append(humDiv);
            
            cardDiv.append(cardBodyDiv);
            colDiv.append(cardDiv);
            $(".forecast").append(colDiv);
            
            index = index + 8;

        }
        // isGreatSuccess = true; 
        // console.log(isGreatSuccess);
    });

    $.ajax({
        url: URL,
        method: "GET"
    }).catch(function(error) { 
        console.log(error)
        
        // isGreatSuccess = false;
        // console.log(isGreatSuccess);
    });
}

//Function to clear forecast HTML Elements prior to populating
function clearForecast(input) {
    return input.text('')
}

//Function to convert Kelvin to Celsius
function convertToCelsius(temp) {
    return Math.round(parseInt(temp) - 273.15);
}


// TODO4: Save latest search to list of recent searches
function updateHistory(city, country) {

    console.log("country: " + country);

    let newCity; 

    if (country === "undefined"){
        newCity = city;
    }
    if (country.length === 2){
       newCity = city + ", " + country;
    }
    else {   
        newCity = city // + ", " + fetchCountry(countries, country);
    }

    checkExisting(newCity);

    console.log(isGreatSuccess);
    console.log(newCity);
    
    if(!isGreatSuccess){
    
        recentSearch.unshift(newCity)
        //Clear content of recent searches
        $(".recent-search1").text("")
        $(".recent-search2").text("")

        //Populate first 4 
        for (let i = 0 ; i < 8 ; i ++){
            let button = $("<button>");
            button.attr("type", "button");
            button.attr("onclick", "this.blur();");
            button.addClass("btn btn-secondary");
            button.text(recentSearch[i]);

            if (i < 4){
                $(".recent-search1").append(button);
            }
            else {
                $(".recent-search2").append(button);
            }
        }

        localStorage.setItem("StoredCities", JSON.stringify(recentSearch));
    }
    else {    
    }
    isGreatSuccess = false;
}

console.log(recentSearch)
// All the interactive elements being coded below

// populateToday(recentSearch[0], "");
// populateForecast(recentSearch[0], "");


$(".recent-search1").on("click", function(event) { 
    event.preventDefault();

    populateToday(event.target.textContent, "");
    populateForecast(event.target.textContent, "");

});

$(".recent-search2").on("click", function(event) { 
    event.preventDefault();

    populateToday(event.target.textContent, "");
    populateForecast(event.target.textContent, "");

});

    
$(".fa").on("click", function(event) { 
    event.preventDefault();
    let city = $("#city-input").val();
    let country = $("#country-input").val();
    populateToday(city, country);
    populateForecast(city, country);
    
    updateHistory(city, country);

});

$('#city-input').keydown( function( event ) {
    if ( event.which === 13 ) {
        // Do something
        // Disable sending the related form
        event.preventDefault();
        let city = $("#city-input").val();
        let country = $("#country-input").val();
        populateToday(city, country);
        populateForecast(city, country);
        
        updateHistory(city, country)

        return false;
        
    }
});

$('#country-input').keydown( function( event ) {
    if ( event.which === 13 ) {
        // Do something
        // Disable sending the related form
        event.preventDefault();
        let city = $("#city-input").val();
        let country = $("#country-input").val();
        populateToday(city, country);
        populateForecast(city, country);
        updateHistory(city, country)

        return false;
        

    }
});


    // const where = encodeURIComponent(JSON.stringify({
    //     "name": "Sydney"
    // }));

    // $.ajax({
    // url: 'https://parseapi.back4app.com/classes/Continentscountriescities_City?limit=10&keys=name,country&where='+ where,
    // method: "GET",
    // beforeSend: function(xhr){
    //     xhr.setRequestHeader('X-Parse-Application-Id', '5bEnaOWskOiyQn1FGo4RFbJdXd92GYLBTViFxtrf');
    //     xhr.setRequestHeader('X-Parse-REST-API-Key', 'Brf9VPmNDu9QTwhU7F8sIhz3W4xCC8XreI8DR9cU');
    // }
    // }).then(function(response){
    //     console.log(response);
    // });

