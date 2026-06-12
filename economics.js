const questions = [
{
question: "1) Economics is the study of:",
options: ["Weather conditions", "Scarce resources and human wants", "Political systems", "Natural resources only"],
answer: "Scarce resources and human wants"
},
{
question: "2) The basic economic problem arises because:",
options: ["Resources are unlimited", "Human wants are limited", "Resources are scarce but wants are unlimited", "Prices are high"],
answer: "Resources are scarce but wants are unlimited"
},
{
question: "3) Which of the following is a factor of production?",
options: ["Money", "Land", "Tax", "Inflation"],
answer: "Land"
},
{
question: "4) The reward for labor is called:",
options: ["Rent", "Interest", "Profit", "Wage"],
answer: "Wage"
},
{
question: "5) The reward for capital is called:",
options: ["Rent", "Interest", "Profit", "Salary"],
answer: "Interest"
},
{
question: "6) Opportunity cost refers to:",
options: ["The cost of production", "The next best alternative forgone", "The market price", "The fixed cost"],
answer: "The next best alternative forgone"
},
{
question: "7) A Production Possibility Curve (PPC) shows:",
options: ["Consumer income", "Maximum possible output combinations", "Market prices", "Government expenditure"],
answer: "Maximum possible output combinations"
},
{
question: "8) Which economic system relies mainly on market forces?",
options: ["Command economy", "Traditional economy", "Market economy", "Mixed economy"],
answer: "Market economy"
},
{
question: "9) Demand refers to:",
options: ["Need only", "Desire only", "Desire backed by ability to pay", "Supply of goods"],
answer: "Desire backed by ability to pay"
},
{
question: "10) According to the law of demand, when price increases:",
options: ["Demand increases", "Demand decreases", "Supply decreases", "Income increases"],
answer: "Demand decreases"
},
{
question: "11) Supply refers to:",
options: ["Goods consumers buy", "Quantity producers are willing and able to sell", "Government production", "Consumer demand"],
answer: "Quantity producers are willing and able to sell"
},
{
question: "12) Equilibrium price occurs when:",
options: ["Demand exceeds supply", "Supply exceeds demand", "Demand equals supply", "Prices are fixed"],
answer: "Demand equals supply"
},
{
question: "13) A shortage occurs when:",
options: ["Supply exceeds demand", "Demand exceeds supply", "Demand equals supply", "Prices fall"],
answer: "Demand exceeds supply"
},
{
question: "14) A surplus occurs when:",
options: ["Demand exceeds supply", "Demand equals supply", "Supply exceeds demand", "Prices rise"],
answer: "Supply exceeds demand"
},
{
question: "15) Price elasticity of demand measures:",
options: ["Change in supply", "Responsiveness of demand to price changes", "Income changes", "Production changes"],
answer: "Responsiveness of demand to price changes"
},
{
question: "16) Goods with many substitutes tend to have:",
options: ["Perfectly inelastic demand", "Elastic demand", "Unitary demand", "No demand"],
answer: "Elastic demand"
},
{
question: "17) Which market structure has many buyers and sellers?",
options: ["Monopoly", "Oligopoly", "Perfect competition", "Duopoly"],
answer: "Perfect competition"
},
{
question: "18) A monopoly is a market with:",
options: ["Many sellers", "Two sellers", "One seller", "No sellers"],
answer: "One seller"
},
{
question: "19) Gross Domestic Product (GDP) measures:",
options: ["Population growth", "Total value of final goods and services produced", "Government spending only", "Exports only"],
answer: "Total value of final goods and services produced"
},
{
question: "20) Inflation refers to:",
options: ["Fall in prices", "Rise in unemployment", "General rise in prices", "Increase in exports"],
answer: "General rise in prices"
},
{
question: "21) Which of the following is a macroeconomic issue?",
options: ["Price of a single product", "Consumer choice", "National income", "Firm production cost"],
answer: "National income"
},
{
question: "22) Unemployment refers to:",
options: ["People not willing to work", "People without jobs but actively seeking work", "Students in school", "Retired people"],
answer: "People without jobs but actively seeking work"
},
{
question: "23) Which type of unemployment occurs when workers' skills do not match job requirements?",
options: ["Frictional unemployment", "Structural unemployment", "Seasonal unemployment", "Cyclical unemployment"],
answer: "Structural unemployment"
},
{
question: "24) Inflation that is caused by increased production costs is called:",
options: ["Demand-pull inflation", "Cost-push inflation", "Hyperinflation", "Deflation"],
answer: "Cost-push inflation"
},
{
question: "25) A budget deficit occurs when:",
options: ["Revenue exceeds expenditure", "Expenditure exceeds revenue", "Exports exceed imports", "Savings exceed investment"],
answer: "Expenditure exceeds revenue"
},
{
question: "26) Money serves as a medium of exchange meaning:",
options: ["It stores value", "It is used to buy goods and services", "It measures weight", "It produces goods"],
answer: "It is used to buy goods and services"
},
{
question: "27) Which institution controls money supply in Ethiopia?",
options: ["Commercial banks", "Ministry of Finance", "National Bank of Ethiopia", "Stock exchange"],
answer: "National Bank of Ethiopia"
},
{
question: "28) Fiscal policy refers to:",
options: ["Bank interest rates", "Government spending and taxation", "Foreign trade rules", "Price control"],
answer: "Government spending and taxation"
},
{
question: "29) Monetary policy is mainly concerned with:",
options: ["Tax collection", "Money supply and interest rates", "Wages", "Exports"],
answer: "Money supply and interest rates"
},
{
question: "30) The main objective of economic development is to:",
options: ["Increase military power", "Improve living standards", "Increase imports", "Reduce population"],
answer: "Improve living standards"
},
{
question: "31) Which of the following is a developing country characteristic?",
options: ["High income per capita", "Low unemployment", "Low industrialization", "High savings rate"],
answer: "Low industrialization"
},
{
question: "32) Agriculture is important in Ethiopia because it:",
options: ["Is not important", "Employs a large population", "Is fully mechanized", "Is not linked to GDP"],
answer: "Employs a large population"
},
{
question: "33) Export means:",
options: ["Buying goods from abroad", "Selling goods to other countries", "Local trade", "Government spending"],
answer: "Selling goods to other countries"
},
{
question: "34) Import means:",
options: ["Selling goods abroad", "Buying goods from other countries", "Producing goods locally", "Taxing goods"],
answer: "Buying goods from other countries"
},
{
question: "35) Balance of trade refers to:",
options: ["Difference between government spending and revenue", "Difference between exports and imports", "Difference between savings and investment", "Inflation rate"],
answer: "Difference between exports and imports"
},
{
question: "36) If exports are greater than imports, the country has:",
options: ["Trade deficit", "Trade surplus", "Budget deficit", "Inflation"],
answer: "Trade surplus"
},
{
question: "37) Development economics mainly focuses on:",
options: ["Military growth", "Improving economic welfare in poor countries", "Stock markets", "Banking only"],
answer: "Improving economic welfare in poor countries"
},
{
question: "38) Which factor is most important for economic growth?",
options: ["Unemployment", "Investment in capital", "Inflation", "Imports"],
answer: "Investment in capital"
},
{
question: "39) Human capital refers to:",
options: ["Natural resources", "Money supply", "Skills and education of people", "Land ownership"],
answer: "Skills and education of people"
},
{
question: "40) Which of the following reduces economic growth?",
options: ["Education", "Investment", "Political instability", "Technology"],
answer: "Political instability"
},
{
question: "41) A progressive tax is one in which:",
options: ["Everyone pays the same amount", "Higher income earners pay a higher percentage", "Lower income earners pay more tax", "Only companies pay tax"],
answer: "Higher income earners pay a higher percentage"
},
{
question: "42) Which of the following is an example of indirect tax?",
options: ["Income tax", "Property tax", "Value Added Tax (VAT)", "Payroll tax"],
answer: "Value Added Tax (VAT)"
},
{
question: "43) Direct tax is paid:",
options: ["On goods and services", "Directly to government by individuals or firms", "Only on imports", "Only on exports"],
answer: "Directly to government by individuals or firms"
},
{
question: "44) The main function of a commercial bank is to:",
options: ["Print money", "Accept deposits and give loans", "Control inflation", "Set tax rates"],
answer: "Accept deposits and give loans"
},
{
question: "45) Interest is the price paid for:",
options: ["Land", "Labor", "Borrowed money", "Goods sold"],
answer: "Borrowed money"
},
{
question: "46) Inflation reduces the purchasing power of:",
options: ["Exports", "Money", "Labor", "Production"],
answer: "Money"
},
{
question: "47) Hyperinflation refers to:",
options: ["Very low inflation", "Moderate inflation", "Very high and uncontrollable inflation", "No inflation"],
answer: "Very high and uncontrollable inflation"
},
{
question: "48) The circular flow of income shows:",
options: ["Population growth", "Flow of goods and money between households and firms", "Government debt", "Trade balance"],
answer: "Flow of goods and money between households and firms"
},
{
question: "49) Investment in economics means:",
options: ["Buying clothes", "Purchasing capital goods for production", "Saving money at home", "Importing goods"],
answer: "Purchasing capital goods for production"
},
{
question: "50) Savings are:",
options: ["Money spent on goods", "Income not spent on consumption", "Government revenue", "Bank loans"],
answer: "Income not spent on consumption"
},
{
question: "51) Which of the following is a source of government revenue?",
options: ["Wages", "Taxes", "Profits", "Imports"],
answer: "Taxes"
},
{
question: "52) Public debt refers to:",
options: ["Money borrowed by individuals", "Money owed by government", "Bank savings", "Private investments"],
answer: "Money owed by government"
},
{
question: "53) Which organization is responsible for international trade rules?",
options: ["IMF", "World Bank", "WTO", "UNICEF"],
answer: "WTO"
},
{
question: "54) The IMF mainly helps countries with:",
options: ["Education", "Short-term financial stability and loans", "Military aid", "Agriculture only"],
answer: "Short-term financial stability and loans"
},
{
question: "55) Economic growth is measured by increase in:",
options: ["Population", "GDP", "Imports", "Unemployment"],
answer: "GDP"
},
{
question: "56) Economic development includes:",
options: ["Only income growth", "Improvement in living standards", "Only exports", "Only GDP increase"],
answer: "Improvement in living standards"
},
{
question: "57) Which of the following is a characteristic of a mixed economy?",
options: ["No government involvement", "Only private ownership", "Both private and public ownership", "No market system"],
answer: "Both private and public ownership"
},
{
question: "58) Price control is usually implemented by government to:",
options: ["Increase inflation", "Protect consumers from high prices", "Increase exports", "Reduce population"],
answer: "Protect consumers from high prices"
},
{
question: "59) Devaluation of currency means:",
options: ["Increase in currency value", "Decrease in currency value", "No change in value", "Printing money"],
answer: "Decrease in currency value"
},
{
question: "60) Which of the following is a benefit of international trade?",
options: ["Isolation", "Higher prices", "Access to wider markets", "Reduced production"],
answer: "Access to wider markets"
}, 
{
question: "61) Absolute advantage refers to:",
options: ["Ability to produce at higher cost", "Ability to produce more with same resources", "Ability to import goods", "Ability to control prices"],
answer: "Ability to produce more with same resources"
},
{
question: "62) Comparative advantage is based on:",
options: ["Lower opportunity cost", "Higher population", "More money", "Government control"],
answer: "Lower opportunity cost"
},
{
question: "63) Which of the following is a characteristic of perfect competition?",
options: ["Single seller", "Few sellers", "Many buyers and sellers", "Government monopoly"],
answer: "Many buyers and sellers"
},
{
question: "64) In a monopoly market, the firm is a:",
options: ["Price taker", "Price maker", "Consumer", "Importer"],
answer: "Price maker"
},
{
question: "65) Oligopoly is a market structure with:",
options: ["One seller", "Many sellers", "Few dominant firms", "No competition"],
answer: "Few dominant firms"
},
{
question: "66) Price discrimination occurs when a firm:",
options: ["Sells at same price to everyone", "Charges different prices for same product", "Reduces production", "Increases taxes"],
answer: "Charges different prices for same product"
},
{
question: "67) National income is:",
options: ["Total population", "Total value of goods and services produced in a country", "Government budget", "Imports only"],
answer: "Total value of goods and services produced in a country"
},
{
question: "68) Per capita income is calculated by dividing:",
options: ["GDP by population", "Exports by imports", "Savings by investment", "Tax by income"],
answer: "GDP by population"
},
{
question: "69) Which of the following is NOT a function of money?",
options: ["Medium of exchange", "Store of value", "Unit of account", "Production of goods"],
answer: "Production of goods"
},
{
question: "70) Barter system is:",
options: ["Use of money", "Exchange of goods for goods", "Banking system", "Credit system"],
answer: "Exchange of goods for goods"
},
{
question: "71) Inflation is measured using:",
options: ["GDP", "Consumer Price Index (CPI)", "Balance of trade", "Exchange rate"],
answer: "Consumer Price Index (CPI)"
},
{
question: "72) Deflation refers to:",
options: ["Increase in prices", "Decrease in prices", "Increase in population", "Increase in exports"],
answer: "Decrease in prices"
},
{
question: "73) Unemployment rate is calculated as:",
options: ["Employed / population", "Unemployed / labor force", "GDP / population", "Exports / imports"],
answer: "Unemployed / labor force"
},
{
question: "74) Structural unemployment is caused by:",
options: ["Season changes", "Skills mismatch and economic changes", "Vacation periods", "High wages"],
answer: "Skills mismatch and economic changes"
},
{
question: "75) Which of the following is a developing economy characteristic?",
options: ["High industrialization", "Low population growth", "Low income per capita", "High technology use"],
answer: "Low income per capita"
},
{
question: "76) Economic planning is mainly done by:",
options: ["Households", "Government", "Foreign firms", "Banks only"],
answer: "Government"
},
{
question: "77) A development plan aims to:",
options: ["Increase imports only", "Improve economic and social conditions", "Reduce education", "Increase unemployment"],
answer: "Improve economic and social conditions"
},
{
question: "78) Foreign direct investment (FDI) is:",
options: ["Money saved in banks", "Investment from foreign companies in a country", "Government tax", "Local borrowing"],
answer: "Investment from foreign companies in a country"
},
{
question: "79) Remittances are:",
options: ["Government taxes", "Money sent by migrants to home country", "Bank loans", "Exports earnings"],
answer: "Money sent by migrants to home country"
},
{
question: "80) One major problem facing Ethiopian economy is:",
options: ["High industrialization", "Agricultural dependence", "Excess exports", "Low population"],
answer: "Agricultural dependence"
},
{
question: "81) Which institution is responsible for preparing the national budget in Ethiopia?",
options: ["National Bank of Ethiopia", "Ministry of Finance", "Commercial banks", "Tax authority"],
answer: "Ministry of Finance"
},
{
question: "82) Which of the following is a major source of Ethiopia’s export earnings?",
options: ["Manufactured electronics", "Coffee", "Oil", "Automobiles"],
answer: "Coffee"
},
{
question: "83) Which sector employs the largest share of Ethiopia’s population?",
options: ["Industry", "Agriculture", "Services", "Banking"],
answer: "Agriculture"
},
{
question: "84) Structural transformation in an economy means:",
options: ["Increasing inflation", "Shift from agriculture to industry and services", "Reducing exports", "Increasing imports only"],
answer: "Shift from agriculture to industry and services"
},
{
question: "85) Which of the following is a benefit of industrialization?",
options: ["Higher unemployment", "Economic diversification", "Lower production", "Reduced exports"],
answer: "Economic diversification"
},
{
question: "86) Exchange rate refers to:",
options: ["Price of goods", "Price of one currency in terms of another", "Tax rate", "Inflation rate"],
answer: "Price of one currency in terms of another"
},
{
question: "87) Appreciation of currency means:",
options: ["Decrease in value", "Increase in value", "No change", "Printing money"],
answer: "Increase in value"
},
{
question: "88) Which of the following can cause inflation?",
options: ["Decrease in money supply", "Increase in money supply", "Decrease in demand", "Increase in imports only"],
answer: "Increase in money supply"
},
{
question: "89) A trade deficit occurs when:",
options: ["Exports exceed imports", "Imports exceed exports", "Savings exceed investment", "GDP increases"],
answer: "Imports exceed exports"
},
{
question: "90) A trade surplus occurs when:",
options: ["Imports exceed exports", "Exports exceed imports", "Inflation increases", "Population increases"],
answer: "Exports exceed imports"
},
{
question: "91) Economic diversification means:",
options: ["Relying on one product", "Producing many different goods and services", "Reducing production", "Increasing imports only"],
answer: "Producing many different goods and services"
},
{
question: "92) Which of the following improves productivity?",
options: ["Low education", "Technology and training", "High unemployment", "Low investment"],
answer: "Technology and training"
},
{
question: "93) Privatization means:",
options: ["Government ownership of firms", "Transfer of public assets to private ownership", "Increasing taxes", "Reducing trade"],
answer: "Transfer of public assets to private ownership"
},
{
question: "94) Subsidy is:",
options: ["Tax imposed on firms", "Financial support from government to reduce prices", "Import restriction", "Inflation control method"],
answer: "Financial support from government to reduce prices"
},
{
question: "95) Which of the following is NOT a factor of production?",
options: ["Land", "Labor", "Capital", "Inflation"],
answer: "Inflation"
},
{
question: "96) Human capital development is mainly achieved through:",
options: ["Taxation", "Education and training", "Imports", "Monopoly"],
answer: "Education and training"
},
{
question: "97) Economic growth without development means:",
options: ["Improved living standards", "Increase in GDP without better welfare", "No production", "Decrease in income"],
answer: "Increase in GDP without better welfare"
},
{
question: "98) Which of the following reduces poverty?",
options: ["Unemployment", "Economic growth and job creation", "Inflation", "Import dependency"],
answer: "Economic growth and job creation"
},
{
question: "99) Sustainable development means:",
options: ["Using all resources quickly", "Development without harming future generations", "Stopping production", "Increasing imports"],
answer: "Development without harming future generations"
},
{
question: "100) The main goal of economics is to:",
options: ["Increase poverty", "Allocate scarce resources efficiently", "Reduce trade", "Increase inflation"],
answer: "Allocate scarce resources efficiently"
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