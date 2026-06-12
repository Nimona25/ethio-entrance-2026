const questions = [
{
question: "1) Which mountain is the highest peak in Ethiopia?",
options: ["Mount Batu", "Mount Ras Dashen", "Mount Choke", "Mount Zuqualla"],
answer: "Mount Ras Dashen"
},

{
question: "2) The Great Rift Valley of Ethiopia was formed mainly by:",
options: ["Volcanic activity", "Glaciation", "River erosion", "Wind deposition"],
answer: "Volcanic activity"
},

{
question: "3) Which river is the longest river in Ethiopia?",
options: ["Awash", "Baro", "Abay (Blue Nile)", "Tekeze"],
answer: "Abay (Blue Nile)"
},

{
question: "4) Ethiopia is located in which part of Africa?",
options: ["West Africa", "East Africa", "North Africa", "Southern Africa"],
answer: "East Africa"
},

{
question: "5) Which region of Ethiopia receives the highest annual rainfall?",
options: ["Afar", "Somali", "Southwestern Ethiopia", "Tigray"],
answer: "Southwestern Ethiopia"
},

{
question: "6) What is the main source of energy used in rural Ethiopia?",
options: ["Coal", "Natural Gas", "Biomass", "Nuclear Energy"],
answer: "Biomass"
},

{
question: "7) Which climatic zone is characterized by temperatures above 27°C?",
options: ["Wurch", "Dega", "Woina Dega", "Kolla"],
answer: "Kolla"
},

{
question: "8) Which soil type is most suitable for agriculture in Ethiopia?",
options: ["Sandy Soil", "Alluvial Soil", "Rocky Soil", "Saline Soil"],
answer: "Alluvial Soil"
},

{
question: "9) What is the capital city of Ethiopia?",
options: ["Dire Dawa", "Mekelle", "Addis Ababa", "Hawassa"],
answer: "Addis Ababa"
},

{
question: "10) Which Ethiopian lake is the largest by surface area?",
options: ["Lake Tana", "Lake Ziway", "Lake Abaya", "Lake Chamo"],
answer: "Lake Tana"
},

{
question: "11) Population density refers to:",
options: ["Birth rate", "Death rate", "People per unit area", "Migration rate"],
answer: "People per unit area"
},

{
question: "12) Which economic activity employs the largest proportion of Ethiopians?",
options: ["Industry", "Mining", "Agriculture", "Tourism"],
answer: "Agriculture"
},

{
question: "13) Which of the following is a renewable resource?",
options: ["Coal", "Petroleum", "Solar Energy", "Natural Gas"],
answer: "Solar Energy"
},

{
question: "14) Soil erosion in Ethiopia is mainly caused by:",
options: ["Deforestation", "Industrialization", "Urbanization", "Mining"],
answer: "Deforestation"
},

{
question: "15) Which transportation system carries the largest volume of freight in Ethiopia?",
options: ["Air Transport", "Road Transport", "Water Transport", "Pipeline"],
answer: "Road Transport"
},

{
question: "16) Which region of Ethiopia is known for extensive pastoralism?",
options: ["Afar", "Amhara", "Sidama", "South West Ethiopia"],
answer: "Afar"
},

{
question: "17) Urbanization means:",
options: ["Increase in farming", "Growth of towns and cities", "Decrease in population", "Expansion of forests"],
answer: "Growth of towns and cities"
},

{
question: "18) Which Ethiopian river flows into Lake Turkana?",
options: ["Awash", "Omo", "Abay", "Baro"],
answer: "Omo"
},

{
question: "19) What is the major greenhouse gas responsible for global warming?",
options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
answer: "Carbon Dioxide"
},

{
question: "20) Which of the following is an example of a cash crop in Ethiopia?",
options: ["Teff", "Maize", "Coffee", "Sorghum"],
answer: "Coffee"
},
{
question: "21) Which of the following regions has the lowest population density in Ethiopia?",
options: ["Amhara", "Oromia", "Afar", "SNNP"],
answer: "Afar"
},

{
question: "22) The source of the Blue Nile River is:",
options: ["Lake Abaya", "Lake Tana", "Lake Chamo", "Lake Ziway"],
answer: "Lake Tana"
},

{
question: "23) Which type of rainfall is common in the highlands of Ethiopia?",
options: ["Cyclonic Rainfall", "Relief Rainfall", "Frontal Rainfall", "Artificial Rainfall"],
answer: "Relief Rainfall"
},

{
question: "24) Which sector converts raw materials into finished products?",
options: ["Primary Sector", "Secondary Sector", "Tertiary Sector", "Quaternary Sector"],
answer: "Secondary Sector"
},

{
question: "25) Which Ethiopian city is known as the 'Charter City'?",
options: ["Hawassa", "Adama", "Dire Dawa", "Bahir Dar"],
answer: "Dire Dawa"
},

{
question: "26) Which of the following is a sedimentary rock?",
options: ["Granite", "Basalt", "Sandstone", "Marble"],
answer: "Sandstone"
},

{
question: "27) Which of the following factors most influences climate?",
options: ["Altitude", "Religion", "Language", "Culture"],
answer: "Altitude"
},

{
question: "28) The movement of people from rural areas to urban areas is called:",
options: ["Immigration", "Urban Migration", "Rural-Urban Migration", "Emigration"],
answer: "Rural-Urban Migration"
},

{
question: "29) Which Ethiopian region has the largest area?",
options: ["Amhara", "Oromia", "Somali", "Afar"],
answer: "Oromia"
},

{
question: "30) The process by which fertile land becomes desert is called:",
options: ["Urbanization", "Desertification", "Industrialization", "Afforestation"],
answer: "Desertification"
},

{
question: "31) Which natural resource is most important for hydroelectric power generation?",
options: ["Wind", "Water", "Coal", "Petroleum"],
answer: "Water"
},

{
question: "32) The Grand Ethiopian Renaissance Dam is constructed on which river?",
options: ["Awash", "Omo", "Abay (Blue Nile)", "Baro"],
answer: "Abay (Blue Nile)"
},

{
question: "33) Which of the following is a non-renewable resource?",
options: ["Forest", "Solar Energy", "Petroleum", "Wind Energy"],
answer: "Petroleum"
},

{
question: "34) The hottest climatic zone in Ethiopia is:",
options: ["Dega", "Wurch", "Kolla", "Woina Dega"],
answer: "Kolla"
},

{
question: "35) Which type of farming is mainly practiced in the Ethiopian highlands?",
options: ["Pastoral Farming", "Mixed Farming", "Fishing", "Commercial Ranching"],
answer: "Mixed Farming"
},

{
question: "36) What is the approximate absolute location of Ethiopia?",
options: ["3°N–15°N and 33°E–48°E", "10°S–20°S and 20°E–30°E", "5°N–25°N and 50°E–60°E", "15°N–30°N and 20°E–40°E"],
answer: "3°N–15°N and 33°E–48°E"
},

{
question: "37) Which of the following lakes is NOT found in the Rift Valley?",
options: ["Lake Ziway", "Lake Langano", "Lake Tana", "Lake Abaya"],
answer: "Lake Tana"
},

{
question: "38) Which type of map shows elevation using contour lines?",
options: ["Political Map", "Road Map", "Topographic Map", "Climate Map"],
answer: "Topographic Map"
},

{
question: "39) Which of the following is a major export product of Ethiopia?",
options: ["Coal", "Coffee", "Iron Ore", "Natural Gas"],
answer: "Coffee"
},

{
question: "40) Which environmental problem results from excessive cutting of trees?",
options: ["Afforestation", "Deforestation", "Irrigation", "Urbanization"],
answer: "Deforestation"
},
{
question: "41) What is the primary cause of seasons on Earth?",
options: ["Earth's distance from the Sun", "Earth's rotation", "Earth's axial tilt", "Ocean currents"],
answer: "Earth's axial tilt"
},

{
question: "42) Which line of latitude passes through Ethiopia?",
options: ["Equator", "Tropic of Cancer", "Prime Meridian", "Arctic Circle"],
answer: "Equator"
},

{
question: "43) What is the scale of a map that shows a large area with less detail?",
options: ["Large-scale map", "Small-scale map", "Topographic map", "Relief map"],
answer: "Small-scale map"
},

{
question: "44) Which of the following is an example of internal migration?",
options: ["Ethiopian moving to Kenya", "Ethiopian moving from Gondar to Addis Ababa", "Sudanese moving to Ethiopia", "Kenyan moving to Uganda"],
answer: "Ethiopian moving from Gondar to Addis Ababa"
},

{
question: "45) Which type of unemployment is common among seasonal agricultural workers?",
options: ["Structural", "Seasonal", "Technological", "Cyclical"],
answer: "Seasonal"
},

{
question: "46) Which of the following is a major cause of soil degradation in Ethiopia?",
options: ["Afforestation", "Overgrazing", "Irrigation", "Urban Planning"],
answer: "Overgrazing"
},

{
question: "47) Which ocean influences the climate of East Africa?",
options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
answer: "Indian Ocean"
},

{
question: "48) Which Ethiopian city is known for its industrial parks?",
options: ["Adama", "Bahir Dar", "Hawassa", "Axum"],
answer: "Hawassa"
},

{
question: "49) Which type of resource can be replenished naturally?",
options: ["Coal", "Petroleum", "Natural Gas", "Forest"],
answer: "Forest"
},

{
question: "50) What is the main purpose of contour lines on a map?",
options: ["Show roads", "Show population", "Show elevation", "Show climate"],
answer: "Show elevation"
},

{
question: "51) Which river basin covers the largest area in Ethiopia?",
options: ["Awash Basin", "Abay Basin", "Wabi Shebelle Basin", "Omo Basin"],
answer: "Abay Basin"
},

{
question: "52) Which type of rainfall occurs when moist air rises over mountains?",
options: ["Convectional", "Relief", "Cyclonic", "Artificial"],
answer: "Relief"
},

{
question: "53) Which Ethiopian region is most affected by recurrent drought?",
options: ["Amhara", "Somali", "Benishangul-Gumuz", "Gambella"],
answer: "Somali"
},

{
question: "54) Which economic activity belongs to the tertiary sector?",
options: ["Farming", "Mining", "Manufacturing", "Banking"],
answer: "Banking"
},

{
question: "55) Which factor mainly determines population distribution?",
options: ["Climate", "Language", "Religion", "Tradition"],
answer: "Climate"
},

{
question: "56) Which type of farming mainly aims at producing for market sale?",
options: ["Subsistence Farming", "Commercial Farming", "Mixed Farming", "Pastoral Farming"],
answer: "Commercial Farming"
},

{
question: "57) What is the main environmental benefit of forests?",
options: ["Increase erosion", "Reduce biodiversity", "Protect soil and water", "Increase flooding"],
answer: "Protect soil and water"
},

{
question: "58) Which of the following is a volcanic mountain in Ethiopia?",
options: ["Ras Dashen", "Mount Zuqualla", "Mount Choke", "Mount Guna"],
answer: "Mount Zuqualla"
},

{
question: "59) Which Ethiopian lake is the source of the Blue Nile?",
options: ["Lake Chamo", "Lake Abaya", "Lake Tana", "Lake Langano"],
answer: "Lake Tana"
},

{
question: "60) Sustainable development means:",
options: [
"Using resources without considering future generations",
"Development that meets present needs without harming future generations",
"Only economic growth",
"Only environmental protection"
],
answer: "Development that meets present needs without harming future generations"
},
{
question: "61) Which region of Ethiopia shares the longest international border?",
options: ["Afar", "Somali", "Oromia", "Amhara"],
answer: "Somali"
},

{
question: "62) Which neighboring country lies directly south of Ethiopia?",
options: ["Sudan", "Eritrea", "Kenya", "Djibouti"],
answer: "Kenya"
},

{
question: "63) What is the primary function of a watershed?",
options: ["Store minerals", "Separate drainage basins", "Create deserts", "Reduce rainfall"],
answer: "Separate drainage basins"
},

{
question: "64) Which of the following is a major environmental challenge in Ethiopia?",
options: ["Tsunamis", "Volcanic eruptions", "Land degradation", "Earthquakes"],
answer: "Land degradation"
},

{
question: "65) Which factor contributes most to rapid urban growth in Ethiopia?",
options: ["Rural-urban migration", "Volcanic activity", "Deforestation", "Mining"],
answer: "Rural-urban migration"
},

{
question: "66) What is the main objective of irrigation?",
options: ["Increase soil erosion", "Supply water to crops", "Reduce population growth", "Increase urbanization"],
answer: "Supply water to crops"
},

{
question: "67) Which Ethiopian city is known as the political capital of Africa?",
options: ["Adama", "Addis Ababa", "Dire Dawa", "Hawassa"],
answer: "Addis Ababa"
},

{
question: "68) Which of the following is an example of a plateau?",
options: ["Great Rift Valley", "Ethiopian Highlands", "Danakil Depression", "Lake Tana"],
answer: "Ethiopian Highlands"
},

{
question: "69) Which type of graph is most suitable for showing population growth over time?",
options: ["Pie Chart", "Line Graph", "Bar Graph", "Pictogram"],
answer: "Line Graph"
},

{
question: "70) Which Ethiopian depression is one of the hottest places on Earth?",
options: ["Ogaden Basin", "Danakil Depression", "Abay Gorge", "Chew Bahir"],
answer: "Danakil Depression"
},

{
question: "71) Which resource is essential for hydroelectric power generation?",
options: ["Coal", "Petroleum", "Flowing Water", "Natural Gas"],
answer: "Flowing Water"
},

{
question: "72) Which economic sector includes transportation and communication services?",
options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
answer: "Tertiary"
},

{
question: "73) Which factor most affects the amount of rainfall received in Ethiopia?",
options: ["Altitude", "Language", "Culture", "Population"],
answer: "Altitude"
},

{
question: "74) What is the major purpose of afforestation?",
options: ["Increase soil erosion", "Expand deserts", "Plant trees to restore forests", "Increase urbanization"],
answer: "Plant trees to restore forests"
},

{
question: "75) Which Ethiopian river does NOT drain into another country?",
options: ["Awash", "Abay", "Baro", "Tekeze"],
answer: "Awash"
},

{
question: "76) Which type of agriculture involves raising livestock and growing crops together?",
options: ["Mixed Farming", "Shifting Cultivation", "Plantation Farming", "Pastoralism"],
answer: "Mixed Farming"
},

{
question: "77) Which region is famous for coffee production in Ethiopia?",
options: ["Afar", "Somali", "Oromia", "Tigray"],
answer: "Oromia"
},

{
question: "78) What is the main cause of global climate change?",
options: ["Natural vegetation", "Greenhouse gas emissions", "River erosion", "Plate tectonics"],
answer: "Greenhouse gas emissions"
},

{
question: "79) Which transport mode is fastest for long-distance travel?",
options: ["Road", "Railway", "Air", "Water"],
answer: "Air"
},

{
question: "80) Which organization is headquartered in Addis Ababa?",
options: ["NATO", "African Union", "European Union", "ASEAN"],
answer: "African Union"
},
{
question: "81) Which of the following best explains why temperatures decrease with increasing altitude?",
options: ["Lower air pressure at higher elevations", "Greater distance from the Sun", "Higher humidity", "More vegetation"],
answer: "Lower air pressure at higher elevations"
},

{
question: "82) Which Ethiopian region contains most of the Danakil Depression?",
options: ["Somali", "Afar", "Amhara", "Oromia"],
answer: "Afar"
},

{
question: "83) What is the main advantage of renewable resources?",
options: ["They are cheaper than all other resources", "They can be naturally replenished", "They never affect the environment", "They produce unlimited energy"],
answer: "They can be naturally replenished"
},

{
question: "84) Which of the following is a major cause of rural-urban migration?",
options: ["Search for employment", "Decrease in education", "Decrease in transportation", "Lower urban wages"],
answer: "Search for employment"
},

{
question: "85) Which river basin is important for irrigation and hydroelectric projects in southeastern Ethiopia?",
options: ["Abay Basin", "Awash Basin", "Wabi Shebelle Basin", "Tekeze Basin"],
answer: "Wabi Shebelle Basin"
},

{
question: "86) Which type of map is most useful for showing population distribution?",
options: ["Political Map", "Population Density Map", "Relief Map", "Road Map"],
answer: "Population Density Map"
},

{
question: "87) Which of the following contributes most to deforestation in Ethiopia?",
options: ["Expansion of agriculture", "Hydroelectric dams", "Air transport", "Mining only"],
answer: "Expansion of agriculture"
},

{
question: "88) Which climatic zone of Ethiopia is generally found above 3200 meters?",
options: ["Kolla", "Woina Dega", "Dega", "Wurch"],
answer: "Wurch"
},

{
question: "89) What is the primary purpose of conservation programs?",
options: ["Increase resource waste", "Protect natural resources", "Expand deserts", "Reduce biodiversity"],
answer: "Protect natural resources"
},

{
question: "90) Which sector of the economy is concerned with information and research services?",
options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
answer: "Quaternary"
},

{
question: "91) Ethiopia's location in the Horn of Africa gives it importance mainly because of:",
options: ["Its access to the Arctic Ocean", "Its strategic position near international trade routes", "Its location near Europe", "Its tropical forests"],
answer: "Its strategic position near international trade routes"
},

{
question: "92) Which of the following is an effect of rapid population growth?",
options: ["Reduced pressure on resources", "Increased demand for services", "Decreased unemployment", "Reduced urbanization"],
answer: "Increased demand for services"
},

{
question: "93) Which Ethiopian lake is known for being the largest lake in Ethiopia?",
options: ["Lake Abaya", "Lake Chamo", "Lake Tana", "Lake Langano"],
answer: "Lake Tana"
},

{
question: "94) Which of the following best describes sustainable agriculture?",
options: ["Farming without concern for future generations", "Using practices that maintain productivity and protect resources", "Using only machines", "Growing a single crop continuously"],
answer: "Using practices that maintain productivity and protect resources"
},

{
question: "95) Which factor most influences settlement patterns in Ethiopia?",
options: ["Availability of water", "Language", "Religion", "Political parties"],
answer: "Availability of water"
},

{
question: "96) Which of the following is a major challenge facing Ethiopian cities?",
options: ["Overpopulation", "Lack of rainfall everywhere", "Volcanic eruptions", "Glaciation"],
answer: "Overpopulation"
},

{
question: "97) GIS stands for:",
options: ["Geographical Information System", "Global Information Service", "Geological Inspection Survey", "Geographic Internet Source"],
answer: "Geographical Information System"
},

{
question: "98) Remote sensing is mainly used to:",
options: ["Measure rainfall directly by hand", "Collect information about Earth's surface from a distance", "Transport goods", "Predict earthquakes exactly"],
answer: "Collect information about Earth's surface from a distance"
},

{
question: "99) Which of the following best explains the importance of the GERD?",
options: ["Tourism only", "Hydroelectric power generation and economic development", "Mining activities", "Urban expansion"],
answer: "Hydroelectric power generation and economic development"
},

{
question: "100) Geography is best defined as the study of:",
options: [
"The stars and planets only",
"The relationship between people and their environment",
"Animals only",
"Historical events only"
],
answer: "The relationship between people and their environment"
},
];
let currentQuestion = 0;
let score = 0;
// Load Question
function loadQuestion() {

   let qn = document.getElementById("question-number");
if(qn){
    qn.innerHTML =
    "Question " + (currentQuestion + 1) +
    " of " + questions.length;
}
    document.getElementById("question").innerHTML =
        questions[currentQuestion].question;

    let optionsHTML = "";

    questions[currentQuestion].options.forEach(option => {

        optionsHTML += `
        <div class="option">
            <label>
                <input type="radio" name="answer" value="${option}">
                ${option}
            </label>
        </div>
        `;

    });

    document.getElementById("options").innerHTML = optionsHTML;

    document.getElementById("progress-bar").style.width =
        ((currentQuestion + 1) / questions.length * 100) + "%";
}

// Next Question
function nextQuestion() {

    let selected =
        document.querySelector('input[name="answer"]:checked');

    if (selected) {

        if (selected.value === questions[currentQuestion].answer) {
            score++;
        }

    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;
        loadQuestion();

    } else {

        localStorage.setItem("score", score);
        localStorage.setItem("total", questions.length);

        window.location.href = "result.html";
    }
}

// Previous Question
function previousQuestion() {

    if (currentQuestion > 0) {

        currentQuestion--;
        loadQuestion();

    }
}

// Timer
let timeLeft = 120 * 60;

function startTimer() {

    let timer = setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        document.getElementById("time").innerHTML =
            "Time Left: " +
            String(minutes).padStart(2, '0') +
            ":" +
            String(seconds).padStart(2, '0');

        timeLeft--;

        if (timeLeft < 0) {

            clearInterval(timer);

            localStorage.setItem("score", score);
            localStorage.setItem("total", questions.length);

            window.location.href = "result.html";
        }

    }, 1000);

}

loadQuestion();
startTimer();