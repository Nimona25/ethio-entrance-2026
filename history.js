const questions = [
{
question: "1) Who is regarded as the founder of the Zagwe Dynasty?",
options: ["Yekuno Amlak", "Mara Takla Haymanot", "Ezana", "Naod"],
answer: "Mara Takla Haymanot"
},
{
question: "2) Which king of Aksum introduced Christianity as the state religion?",
options: ["Kaleb", "Ezana", "Zoskales", "Gebre Meskel"],
answer: "Ezana"
},
{
question: "3) The Battle of Adwa was fought in which year?",
options: ["1889", "1896", "1905", "1935"],
answer: "1896"
},
{
question: "4) Who was the Ethiopian emperor during the Battle of Adwa?",
options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie I"],
answer: "Menelik II"
},
{
question: "5) The rock-hewn churches of Lalibela were constructed during the reign of:",
options: ["King Lalibela", "Yekuno Amlak", "Amda Seyon", "Susenyos"],
answer: "King Lalibela"
},
{
question: "6) Which dynasty replaced the Zagwe Dynasty?",
options: ["Solomonic Dynasty", "Aksumite Dynasty", "Gondarine Dynasty", "Adal Dynasty"],
answer: "Solomonic Dynasty"
},
{
question: "7) Who led the Muslim forces in the sixteenth-century war against the Christian kingdom?",
options: ["Ahmed Gragn", "Nur ibn Mujahid", "Menelik II", "Ras Alula"],
answer: "Ahmed Gragn"
},
{
question: "8) The Portuguese assisted Ethiopia during the war against:",
options: ["Italy", "Sudan", "Ahmed Gragn", "Egypt"],
answer: "Ahmed Gragn"
},
{
question: "9) Which emperor attempted to modernize Ethiopia and built a strong central government?",
options: ["Tewodros II", "Menelik II", "Iyasu V", "Yohannes IV"],
answer: "Tewodros II"
},
{
question: "10) Who defeated the Egyptians at the Battle of Gundet in 1875?",
options: ["Menelik II", "Tewodros II", "Yohannes IV", "Haile Selassie"],
answer: "Yohannes IV"
},

{
question: "11) The capital city Addis Ababa was founded by:",
options: ["Haile Selassie I", "Tewodros II", "Menelik II", "Yohannes IV"],
answer: "Menelik II"
},
{
question: "12) Which treaty led to disagreement between Ethiopia and Italy and eventually the Battle of Adwa?",
options: ["Treaty of Paris", "Treaty of Wuchale", "Treaty of Versailles", "Treaty of London"],
answer: "Treaty of Wuchale"
},
{
question: "13) Italy occupied Ethiopia between:",
options: ["1936-1941", "1896-1901", "1941-1945", "1914-1918"],
answer: "1936-1941"
},
{
question: "14) Who became emperor again after the defeat of Italian occupation in 1941?",
options: ["Lij Iyasu", "Tewodros II", "Haile Selassie I", "Menelik II"],
answer: "Haile Selassie I"
},
{
question: "15) The Organization of African Unity (OAU) was established in Addis Ababa in:",
options: ["1955", "1963", "1974", "1991"],
answer: "1963"
},
{
question: "16) The Ethiopian Revolution that ended the monarchy occurred in:",
options: ["1963", "1974", "1987", "1991"],
answer: "1974"
},
{
question: "17) What was the name of the military government that ruled Ethiopia after 1974?",
options: ["EPRDF", "Derg", "TPLF", "ANDM"],
answer: "Derg"
},
{
question: "18) The federal system currently used in Ethiopia was officially introduced in:",
options: ["1974", "1987", "1995", "2005"],
answer: "1995"
},
{
question: "19) Which ancient kingdom is considered one of the earliest civilizations in Ethiopia?",
options: ["Aksum", "Gondar", "Shewa", "Harar"],
answer: "Aksum"
},
{
question: "20) Who was the emperor of Ethiopia when the Italian invasion began in 1935?",
options: ["Menelik II", "Haile Selassie I", "Yohannes IV", "Tewodros II"],
answer: "Haile Selassie I"
},
{
question: "21) Which battle marked the final defeat of Ahmed Gragn in 1543?",
options: ["Battle of Adwa", "Battle of Wayna Daga", "Battle of Gundet", "Battle of Metemma"],
answer: "Battle of Wayna Daga"
},
{
question: "22) Who founded the Solomonic Dynasty in 1270?",
options: ["Amda Seyon", "Yekuno Amlak", "Zara Yaqob", "Lalibela"],
answer: "Yekuno Amlak"
},
{
question: "23) Which Ethiopian emperor is known for expanding the empire significantly during the 14th century?",
options: ["Amda Seyon", "Tewodros II", "Susenyos", "Iyasu I"],
answer: "Amda Seyon"
},
{
question: "24) Who introduced Catholicism as the state religion for a short period in Ethiopia?",
options: ["Zara Yaqob", "Susenyos", "Menelik II", "Yohannes IV"],
answer: "Susenyos"
},
{
question: "25) Which emperor restored Orthodox Christianity after the reign of Susenyos?",
options: ["Fasilides", "Tewodros II", "Menelik II", "Naod"],
answer: "Fasilides"
},
{
question: "26) Who founded the city of Gondar as a permanent capital?",
options: ["Fasilides", "Yohannes IV", "Amda Seyon", "Lalibela"],
answer: "Fasilides"
},
{
question: "27) The 'Era of Princes' (Zemene Mesafint) was characterized by:",
options: ["Strong central government", "Foreign occupation", "Regional political fragmentation", "Industrialization"],
answer: "Regional political fragmentation"
},
{
question: "28) Approximately when did the Zemene Mesafint occur?",
options: ["1270-1527", "1769-1855", "1889-1913", "1936-1941"],
answer: "1769-1855"
},
{
question: "29) Who ended the Zemene Mesafint and reunified Ethiopia?",
options: ["Menelik II", "Haile Selassie", "Tewodros II", "Yohannes IV"],
answer: "Tewodros II"
},
{
question: "30) Which emperor committed suicide at Maqdala in 1868?",
options: ["Tewodros II", "Yohannes IV", "Menelik II", "Iyasu V"],
answer: "Tewodros II"
},
{
question: "31) The British expedition to Maqdala was led by:",
options: ["General Napier", "Lord Cromer", "General Allenby", "Lord Kitchener"],
answer: "General Napier"
},
{
question: "32) Which Ethiopian ruler modernized the country by introducing railways and telegraphs?",
options: ["Yohannes IV", "Menelik II", "Tewodros II", "Zara Yaqob"],
answer: "Menelik II"
},
{
question: "33) The Ethio-Djibouti railway was constructed primarily during the reign of:",
options: ["Haile Selassie I", "Menelik II", "Tewodros II", "Fasilides"],
answer: "Menelik II"
},
{
question: "34) Which battle resulted in the death of Emperor Yohannes IV?",
options: ["Metemma", "Adwa", "Wayna Daga", "Gundet"],
answer: "Metemma"
},
{
question: "35) Who succeeded Yohannes IV as Emperor of Ethiopia?",
options: ["Lij Iyasu", "Menelik II", "Tewodros II", "Haile Selassie I"],
answer: "Menelik II"
},
{
question: "36) The League of Nations failed to stop which event involving Ethiopia?",
options: ["Battle of Adwa", "Italian invasion of 1935", "Ethiopian Revolution", "Federal restructuring"],
answer: "Italian invasion of 1935"
},
{
question: "37) Which Ethiopian leader appealed to the League of Nations in 1936?",
options: ["Menelik II", "Haile Selassie I", "Mengistu Haile Mariam", "Ras Alula"],
answer: "Haile Selassie I"
},
{
question: "38) The federation between Eritrea and Ethiopia was established in:",
options: ["1952", "1941", "1962", "1974"],
answer: "1952"
},
{
question: "39) Eritrea was formally annexed by Ethiopia in:",
options: ["1952", "1962", "1974", "1993"],
answer: "1962"
},
{
question: "40) Which organization led the armed struggle for Eritrean independence?",
options: ["EPRDF", "ELF/EPLF", "Derg", "OAU"],
answer: "ELF/EPLF"
},
{
question: "41) Which emperor issued the first written constitution of Ethiopia in 1931?",
options: ["Menelik II", "Haile Selassie I", "Tewodros II", "Yohannes IV"],
answer: "Haile Selassie I"
},
{
question: "42) Which year was the revised Ethiopian constitution promulgated?",
options: ["1931", "1955", "1963", "1974"],
answer: "1955"
},
{
question: "43) Which university was the first university established in Ethiopia?",
options: ["Haramaya University", "Addis Ababa University", "Bahir Dar University", "Jimma University"],
answer: "Addis Ababa University"
},
{
question: "44) The student movement of the 1960s is best remembered for raising which question?",
options: ["Land to the Tiller", "Education for All", "Industrialization First", "Nationalization"],
answer: "Land to the Tiller"
},
{
question: "45) Which event directly contributed to the downfall of the imperial regime in 1974?",
options: ["The Battle of Adwa", "The Wollo Famine", "The Italian Occupation", "The Ethio-Eritrean War"],
answer: "The Wollo Famine"
},
{
question: "46) What was the name of the land reform proclamation issued by the Derg in 1975?",
options: ["Land to the Tiller", "Public Ownership of Rural Lands", "Agricultural Reform Act", "National Land Policy"],
answer: "Public Ownership of Rural Lands"
},
{
question: "47) Which leader became the dominant figure of the Derg government?",
options: ["Atnafu Abate", "Mengistu Haile Mariam", "Tafari Benti", "Aman Andom"],
answer: "Mengistu Haile Mariam"
},
{
question: "48) The Red Terror campaign took place mainly during which period?",
options: ["1976-1978", "1960-1962", "1989-1991", "1935-1941"],
answer: "1976-1978"
},
{
question: "49) Which political organization overthrew the Derg government in 1991?",
options: ["EPLF", "OLF", "EPRDF", "ELF"],
answer: "EPRDF"
},
{
question: "50) In which year did Eritrea officially gain independence after a referendum?",
options: ["1991", "1993", "1995", "1998"],
answer: "1993"
},
{
question: "51) Which Ethiopian region was most affected by the famine of 1984-1985?",
options: ["Hararghe", "Wollo and Tigray", "Sidama", "Gambella"],
answer: "Wollo and Tigray"
},
{
question: "52) Which organization replaced the OAU in 2002?",
options: ["African Union", "COMESA", "IGAD", "ECOWAS"],
answer: "African Union"
},
{
question: "53) The headquarters of the African Union is located in:",
options: ["Nairobi", "Addis Ababa", "Cairo", "Johannesburg"],
answer: "Addis Ababa"
},
{
question: "54) Which emperor was known for his strong diplomatic relations with European countries before the Battle of Adwa?",
options: ["Menelik II", "Tewodros II", "Yohannes IV", "Haile Selassie I"],
answer: "Menelik II"
},
{
question: "55) Who was the wife of Emperor Menelik II and played a major role in Ethiopian politics?",
options: ["Empress Zewditu", "Empress Taytu", "Menen Asfaw", "Seble Wongel"],
answer: "Empress Taytu"
},
{
question: "56) Which Ethiopian empress opposed Italian expansion and supported resistance before Adwa?",
options: ["Empress Taytu", "Empress Zewditu", "Menen Asfaw", "Romanework"],
answer: "Empress Taytu"
},
{
question: "57) Who became the first female ruler (Empress) of Ethiopia in the 20th century?",
options: ["Taytu Betul", "Zewditu", "Menen Asfaw", "Romanework"],
answer: "Zewditu"
},
{
question: "58) Ras Tafari Makonnen later became:",
options: ["Menelik II", "Haile Selassie I", "Yohannes IV", "Mengistu Haile Mariam"],
answer: "Haile Selassie I"
},
{
question: "59) Which Ethiopian emperor was deposed in 1974?",
options: ["Menelik II", "Haile Selassie I", "Lij Iyasu", "Zewditu"],
answer: "Haile Selassie I"
},
{
question: "60) The 1995 Ethiopian Constitution established Ethiopia as a:",
options: ["Unitary State", "Federal Democratic Republic", "Constitutional Monarchy", "Military State"],
answer: "Federal Democratic Republic"
},
{
question: "61) Which ancient Ethiopian kingdom became famous for its trade with the Roman Empire?",
options: ["Adal", "Aksum", "Damot", "Shewa"],
answer: "Aksum"
},
{
question: "62) The port of Adulis was important because it served as:",
options: ["A military base", "A religious center", "A major trading port", "A royal residence"],
answer: "A major trading port"
},
{
question: "63) Which language was commonly used in inscriptions of the Aksumite Kingdom?",
options: ["Amharic", "Arabic", "Ge'ez", "Oromo"],
answer: "Ge'ez"
},
{
question: "64) King Kaleb is best known for his military expedition to:",
options: ["Egypt", "Yemen", "Sudan", "India"],
answer: "Yemen"
},
{
question: "65) Which factor contributed most to the decline of the Aksumite Kingdom?",
options: ["Population growth", "Environmental degradation and decline in trade", "Industrialization", "European colonization"],
answer: "Environmental degradation and decline in trade"
},
{
question: "66) The Muslim Sultanate that frequently competed with the Christian Kingdom was:",
options: ["Aksum", "Adal", "Damot", "Gojjam"],
answer: "Adal"
},
{
question: "67) Who was the famous Ethiopian emperor known for his religious writings and reforms during the 15th century?",
options: ["Zara Yaqob", "Susenyos", "Tewodros II", "Fasilides"],
answer: "Zara Yaqob"
},
{
question: "68) Which Portuguese commander assisted Ethiopia against Ahmed Gragn?",
options: ["Christopher da Gama", "Vasco da Gama", "Alfonso de Albuquerque", "Bartholomew Dias"],
answer: "Christopher da Gama"
},
{
question: "69) The Gondarine Period is particularly known for the development of:",
options: ["Rock-hewn churches", "Castles and palaces", "Railways", "Universities"],
answer: "Castles and palaces"
},
{
question: "70) Which city became the center of political and cultural life during the Gondarine Period?",
options: ["Harar", "Lalibela", "Gondar", "Aksum"],
answer: "Gondar"
},
{
question: "71) Which European country colonized Eritrea in the late nineteenth century?",
options: ["Britain", "France", "Italy", "Portugal"],
answer: "Italy"
},
{
question: "72) Which African country successfully resisted European colonization during the Scramble for Africa?",
options: ["Kenya", "Nigeria", "Ethiopia", "Algeria"],
answer: "Ethiopia"
},
{
question: "73) The Berlin Conference of 1884-1885 was mainly concerned with:",
options: ["African independence", "Division of Africa among European powers", "World War I", "Formation of the OAU"],
answer: "Division of Africa among European powers"
},
{
question: "74) Which Ethiopian victory became a symbol of African resistance against colonialism?",
options: ["Battle of Gundet", "Battle of Metemma", "Battle of Adwa", "Battle of Maqdala"],
answer: "Battle of Adwa"
},
{
question: "75) Pan-Africanism primarily aimed to:",
options: ["Promote colonial rule", "Unite African peoples and states", "Expand European trade", "Create military alliances in Europe"],
answer: "Unite African peoples and states"
},
{
question: "76) Who is widely regarded as a leading advocate of Pan-Africanism?",
options: ["Kwame Nkrumah", "Benito Mussolini", "Otto von Bismarck", "Winston Churchill"],
answer: "Kwame Nkrumah"
},
{
question: "77) Which country was the first in sub-Saharan Africa to gain independence from colonial rule in 1957?",
options: ["Kenya", "Ghana", "Nigeria", "Uganda"],
answer: "Ghana"
},
{
question: "78) Apartheid was a policy of racial segregation practiced in:",
options: ["Zimbabwe", "South Africa", "Namibia", "Angola"],
answer: "South Africa"
},
{
question: "79) Nelson Mandela became the first democratically elected president of South Africa in:",
options: ["1989", "1994", "1999", "2004"],
answer: "1994"
},
{
question: "80) The formation of the Organization of African Unity (OAU) in 1963 aimed mainly to:",
options: ["Promote African unity and cooperation", "Expand colonial territories", "Create a single African currency", "Control world trade"],
answer: "Promote African unity and cooperation"
},
{
question: "81) Which Ethiopian emperor signed the Treaty of Wuchale with Italy in 1889?",
options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie I"],
answer: "Menelik II"
},
{
question: "82) The disagreement over which article of the Treaty of Wuchale led to the Battle of Adwa?",
options: ["Article 5", "Article 10", "Article 17", "Article 20"],
answer: "Article 17"
},
{
question: "83) Which Italian leader ordered the invasion of Ethiopia in 1935?",
options: ["Victor Emmanuel III", "Benito Mussolini", "Giuseppe Garibaldi", "Camillo Cavour"],
answer: "Benito Mussolini"
},
{
question: "84) The Walwal Incident of 1934 was a conflict between Ethiopia and:",
options: ["Britain", "France", "Italy", "Egypt"],
answer: "Italy"
},
{
question: "85) Which Ethiopian patriot leader became famous for resisting the Italian occupation?",
options: ["Abebe Bikila", "Belay Zeleke", "Haile Gebrselassie", "Taddese Birru"],
answer: "Belay Zeleke"
},
{
question: "86) Which Ethiopian Empress played a significant role in the victory at Adwa?",
options: ["Menen Asfaw", "Zewditu", "Taytu Betul", "Seble Wongel"],
answer: "Taytu Betul"
},
{
question: "87) Which event marked the end of Italian occupation in Ethiopia?",
options: ["Battle of Adwa", "Restoration of Haile Selassie in 1941", "Treaty of Wuchale", "Formation of OAU"],
answer: "Restoration of Haile Selassie in 1941"
},
{
question: "88) Which Ethiopian government introduced villagization and resettlement programs in the 1980s?",
options: ["Imperial Government", "EPRDF", "Derg", "Transitional Government"],
answer: "Derg"
},
{
question: "89) Which year did the Derg officially collapse?",
options: ["1987", "1991", "1993", "1995"],
answer: "1991"
},
{
question: "90) Which city hosted the founding conference of the Organization of African Unity (OAU)?",
options: ["Accra", "Nairobi", "Addis Ababa", "Lagos"],
answer: "Addis Ababa"
},
{
question: "91) Which Ethiopian ruler is credited with ending the Zemene Mesafint (Era of Princes)?",
options: ["Yohannes IV", "Menelik II", "Tewodros II", "Haile Selassie I"],
answer: "Tewodros II"
},
{
question: "92) What was the primary objective of Emperor Tewodros II's reforms?",
options: ["Expand colonial territories", "Strengthen central authority and modernize Ethiopia", "Promote Catholicism", "Establish a federal system"],
answer: "Strengthen central authority and modernize Ethiopia"
},
{
question: "93) Which Ethiopian emperor defeated Egyptian forces at both Gundet and Gura?",
options: ["Tewodros II", "Yohannes IV", "Menelik II", "Lij Iyasu"],
answer: "Yohannes IV"
},
{
question: "94) Which battle is considered the greatest victory against colonialism in African history?",
options: ["Battle of Metemma", "Battle of Gundet", "Battle of Adwa", "Battle of Wayna Daga"],
answer: "Battle of Adwa"
},
{
question: "95) The African Union (AU) was officially launched in which year?",
options: ["1999", "2000", "2002", "2005"],
answer: "2002"
},
{
question: "96) Which organization succeeded the Organization of African Unity (OAU)?",
options: ["COMESA", "IGAD", "African Union", "ECOWAS"],
answer: "African Union"
},
{
question: "97) Which Ethiopian constitution officially established ethnic federalism?",
options: ["1931 Constitution", "1955 Constitution", "1987 Constitution", "1995 Constitution"],
answer: "1995 Constitution"
},
{
question: "98) Which Ethiopian region was the center of the ancient Aksumite Kingdom?",
options: ["Oromia", "Amhara", "Tigray", "Afar"],
answer: "Tigray"
},
{
question: "99) Which Ethiopian city is famous for its rock-hewn churches and is a UNESCO World Heritage Site?",
options: ["Gondar", "Harar", "Aksum", "Lalibela"],
answer: "Lalibela"
},
{
question: "100) Why is the Battle of Adwa considered a turning point in African history?",
options: [
"It ended World War I",
"It led to the formation of the OAU",
"It preserved Ethiopia's independence and inspired anti-colonial movements",
"It established the federal system in Ethiopia"
],
answer: "It preserved Ethiopia's independence and inspired anti-colonial movements"
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

