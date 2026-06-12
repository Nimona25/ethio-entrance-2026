const questions = [
{
question: "1) What is the electron configuration of Sodium (Na)?",
options: ["2,8,1", "2,8,2", "2,7,2", "2,8,8"],
answer: "2,8,1"
},

{
question: "2) Which of the following is a strong acid?",
options: ["CH₃COOH", "HCl", "H₂CO₃", "NH₄OH"],
answer: "HCl"
},

{
question: "3) What is the oxidation number of sulfur in H₂SO₄?",
options: ["+4", "+6", "+2", "-2"],
answer: "+6"
},

{
question: "4) Which gas is produced when zinc reacts with hydrochloric acid?",
options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"],
answer: "Hydrogen"
},

{
question: "5) Which element has the highest electronegativity?",
options: ["Oxygen", "Fluorine", "Chlorine", "Nitrogen"],
answer: "Fluorine"
},

{
question: "6) What is the pH of a neutral solution at 25°C?",
options: ["0", "7", "14", "10"],
answer: "7"
},

{
question: "7) Which type of bond is formed by sharing electrons?",
options: ["Ionic Bond", "Metallic Bond", "Covalent Bond", "Hydrogen Bond"],
answer: "Covalent Bond"
},

{
question: "8) Which law states that mass is neither created nor destroyed?",
options: ["Boyle's Law", "Charles Law", "Law of Conservation of Mass", "Avogadro Law"],
answer: "Law of Conservation of Mass"
},

{
question: "9) What is the molar mass of H₂O?",
options: ["18 g/mol", "16 g/mol", "20 g/mol", "22 g/mol"],
answer: "18 g/mol"
},

{
question: "10) Which particle has no charge?",
options: ["Electron", "Proton", "Neutron", "Ion"],
answer: "Neutron"
},

{
question: "11) Which of the following is an alkali metal?",
options: ["Calcium", "Magnesium", "Sodium", "Aluminum"],
answer: "Sodium"
},

{
question: "12) What is the empirical formula of glucose (C₆H₁₂O₆)?",
options: ["CH₂O", "C₂H₄O₂", "C₃H₆O₃", "CHO"],
answer: "CH₂O"
},

{
question: "13) Which gas is responsible for the greenhouse effect?",
options: ["Hydrogen", "Carbon Dioxide", "Helium", "Argon"],
answer: "Carbon Dioxide"
},

{
question: "14) What is the oxidation number of oxygen in most compounds?",
options: ["+2", "-1", "-2", "+1"],
answer: "-2"
},

{
question: "15) Which process converts a solid directly to a gas?",
options: ["Condensation", "Sublimation", "Evaporation", "Fusion"],
answer: "Sublimation"
},

{
question: "16) Which of the following is a reducing agent?",
options: ["H₂", "O₂", "Cl₂", "Br₂"],
answer: "H₂"
},

{
question: "17) What is the main component of natural gas?",
options: ["Ethane", "Methane", "Propane", "Butane"],
answer: "Methane"
},

{
question: "18) Which of the following is an ester?",
options: ["CH₃COOH", "CH₃COOCH₃", "C₂H₅OH", "CH₃CHO"],
answer: "CH₃COOCH₃"
},

{
question: "19) Which catalyst is used in the Haber Process?",
options: ["Iron", "Copper", "Nickel", "Platinum"],
answer: "Iron"
},

{
question: "20) What volume does 1 mole of an ideal gas occupy at STP?",
options: ["11.2 L", "22.4 L", "44.8 L", "24 L"],
answer: "22.4 L"
},
{
question: "21) Which element has the atomic number 17?",
options: ["Fluorine", "Chlorine", "Bromine", "Iodine"],
answer: "Chlorine"
},

{
question: "22) Which of the following is an amphoteric oxide?",
options: ["Na₂O", "MgO", "Al₂O₃", "SO₂"],
answer: "Al₂O₃"
},

{
question: "23) What is the oxidation number of chromium in K₂Cr₂O₇?",
options: ["+3", "+4", "+6", "+7"],
answer: "+6"
},

{
question: "24) Which gas turns limewater milky?",
options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
answer: "Carbon Dioxide"
},

{
question: "25) What is the molecular formula of ethene?",
options: ["C₂H₄", "C₂H₆", "C₃H₆", "CH₄"],
answer: "C₂H₄"
},

{
question: "26) Which type of reaction is represented by A + B → AB?",
options: ["Decomposition", "Combination", "Displacement", "Neutralization"],
answer: "Combination"
},

{
question: "27) Which substance is used to dry ammonia gas?",
options: ["Concentrated H₂SO₄", "CaCl₂", "Quicklime (CaO)", "Water"],
answer: "Quicklime (CaO)"
},

{
question: "28) What is the hybridization of carbon in methane (CH₄)?",
options: ["sp", "sp²", "sp³", "dsp²"],
answer: "sp³"
},

{
question: "29) Which metal is extracted from bauxite?",
options: ["Iron", "Copper", "Aluminum", "Zinc"],
answer: "Aluminum"
},

{
question: "30) Which of the following is a saturated hydrocarbon?",
options: ["Ethene", "Ethyne", "Propene", "Methane"],
answer: "Methane"
},

{
question: "31) What is the pH range of acidic solutions?",
options: ["Greater than 7", "Equal to 7", "Less than 7", "Greater than 14"],
answer: "Less than 7"
},

{
question: "32) Which of the following is a non-polar molecule?",
options: ["H₂O", "NH₃", "CO₂", "HCl"],
answer: "CO₂"
},

{
question: "33) What is the oxidation state of nitrogen in NH₃?",
options: ["-3", "+3", "+5", "-5"],
answer: "-3"
},

{
question: "34) Which process is used to manufacture sulfuric acid industrially?",
options: ["Contact Process", "Haber Process", "Ostwald Process", "Hall Process"],
answer: "Contact Process"
},

{
question: "35) Which compound is commonly known as baking soda?",
options: ["Na₂CO₃", "NaHCO₃", "NaOH", "CaCO₃"],
answer: "NaHCO₃"
},

{
question: "36) Which gas is evolved during electrolysis of water at the cathode?",
options: ["Oxygen", "Hydrogen", "Nitrogen", "Chlorine"],
answer: "Hydrogen"
},

{
question: "37) What is the IUPAC name of CH₃CH₂OH?",
options: ["Methanol", "Ethanol", "Propanol", "Ethanal"],
answer: "Ethanol"
},

{
question: "38) Which of the following is a strong electrolyte?",
options: ["Sugar Solution", "Ethanol", "NaCl Solution", "Urea Solution"],
answer: "NaCl Solution"
},

{
question: "39) What is the shape of the NH₃ molecule?",
options: ["Linear", "Trigonal Planar", "Trigonal Pyramidal", "Tetrahedral"],
answer: "Trigonal Pyramidal"
},

{
question: "40) Which of the following metals is the most reactive?",
options: ["Copper", "Silver", "Potassium", "Gold"],
answer: "Potassium"
},
{
question: "41) How many moles are present in 44 g of CO₂?",
options: ["0.5 mol", "1 mol", "2 mol", "4 mol"],
answer: "1 mol"
},

{
question: "42) Which quantum number determines the shape of an orbital?",
options: ["Principal", "Azimuthal", "Magnetic", "Spin"],
answer: "Azimuthal"
},

{
question: "43) What is the oxidation number of manganese in KMnO₄?",
options: ["+4", "+5", "+6", "+7"],
answer: "+7"
},

{
question: "44) Which law explains the relationship between pressure and volume of a gas at constant temperature?",
options: ["Charles Law", "Boyle Law", "Avogadro Law", "Graham Law"],
answer: "Boyle Law"
},

{
question: "45) Which of the following is an aldehyde?",
options: ["CH₃COOH", "CH₃CHO", "CH₃OH", "CH₃COOCH₃"],
answer: "CH₃CHO"
},

{
question: "46) Which element has the highest ionization energy in Period 3?",
options: ["Na", "Mg", "Cl", "Ar"],
answer: "Ar"
},

{
question: "47) What mass of NaCl contains 1 mole of NaCl?",
options: ["58.5 g", "23 g", "35.5 g", "29.25 g"],
answer: "58.5 g"
},

{
question: "48) Which compound exhibits hydrogen bonding?",
options: ["CH₄", "H₂S", "NH₃", "CO₂"],
answer: "NH₃"
},

{
question: "49) Which gas is produced during the thermal decomposition of limestone?",
options: ["SO₂", "CO₂", "O₂", "H₂"],
answer: "CO₂"
},

{
question: "50) What is the oxidation state of sulfur in SO₂?",
options: ["+2", "+4", "+6", "-2"],
answer: "+4"
},

{
question: "51) Which of the following is an unsaturated hydrocarbon?",
options: ["Methane", "Ethane", "Propane", "Ethene"],
answer: "Ethene"
},

{
question: "52) Which catalyst is used in the Contact Process?",
options: ["Iron", "Nickel", "Vanadium(V) oxide", "Copper"],
answer: "Vanadium(V) oxide"
},

{
question: "53) What is the pH of a solution with [H⁺] = 10⁻³ mol/L?",
options: ["1", "2", "3", "4"],
answer: "3"
},

{
question: "54) Which of the following is a weak acid?",
options: ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"],
answer: "CH₃COOH"
},

{
question: "55) What is the empirical formula of benzene (C₆H₆)?",
options: ["CH", "CH₂", "C₂H₂", "C₃H₃"],
answer: "CH"
},

{
question: "56) Which metal reacts most vigorously with cold water?",
options: ["Mg", "Zn", "Na", "Cu"],
answer: "Na"
},

{
question: "57) Which of the following has tetrahedral geometry?",
options: ["NH₃", "CH₄", "CO₂", "BF₃"],
answer: "CH₄"
},

{
question: "58) What is the oxidation number of chlorine in KClO₃?",
options: ["+3", "+5", "+7", "-1"],
answer: "+5"
},

{
question: "59) Which process converts alkene into alkane?",
options: ["Hydration", "Hydrogenation", "Oxidation", "Polymerization"],
answer: "Hydrogenation"
},

{
question: "60) Which scientist proposed the modern periodic law?",
options: ["Dalton", "Bohr", "Mendeleev", "Moseley"],
answer: "Moseley"
},
{
question: "61) What volume of oxygen is required to completely burn 2 moles of methane?",
options: ["2 mol", "4 mol", "6 mol", "8 mol"],
answer: "4 mol"
},

{
question: "62) Which of the following has the strongest intermolecular forces?",
options: ["CH₄", "NH₃", "H₂O", "CO₂"],
answer: "H₂O"
},

{
question: "63) What is the oxidation number of phosphorus in H₃PO₄?",
options: ["+3", "+4", "+5", "+6"],
answer: "+5"
},

{
question: "64) Which of the following is an example of a condensation polymer?",
options: ["Polyethene", "PVC", "Nylon", "Polystyrene"],
answer: "Nylon"
},

{
question: "65) Which factor does NOT affect reaction rate?",
options: ["Temperature", "Catalyst", "Pressure", "Color of reactants"],
answer: "Color of reactants"
},

{
question: "66) Which orbital can hold a maximum of 10 electrons?",
options: ["s", "p", "d", "f"],
answer: "d"
},

{
question: "67) What mass of CaCO₃ is needed to produce 44 g of CO₂?",
options: ["50 g", "75 g", "100 g", "150 g"],
answer: "100 g"
},

{
question: "68) Which of the following is a ketone?",
options: ["CH₃CHO", "CH₃COCH₃", "CH₃OH", "CH₃COOH"],
answer: "CH₃COCH₃"
},

{
question: "69) Which element has the largest atomic radius?",
options: ["Li", "Na", "K", "Rb"],
answer: "Rb"
},

{
question: "70) What is the pH of a solution with [H⁺] = 10⁻⁵ mol/L?",
options: ["3", "4", "5", "6"],
answer: "5"
},

{
question: "71) Which of the following is a noble gas?",
options: ["Nitrogen", "Oxygen", "Neon", "Hydrogen"],
answer: "Neon"
},

{
question: "72) Which type of reaction absorbs heat from the surroundings?",
options: ["Exothermic", "Neutralization", "Endothermic", "Combustion"],
answer: "Endothermic"
},

{
question: "73) Which compound contains an ionic bond?",
options: ["H₂O", "CO₂", "NaCl", "CH₄"],
answer: "NaCl"
},

{
question: "74) What is the oxidation number of carbon in CO₂?",
options: ["+2", "+3", "+4", "-4"],
answer: "+4"
},

{
question: "75) Which gas is used in the Haber Process?",
options: ["O₂ and H₂", "N₂ and H₂", "N₂ and O₂", "H₂ and Cl₂"],
answer: "N₂ and H₂"
},

{
question: "76) Which of the following is a homologous series?",
options: ["Alcohols", "Mixtures", "Alloys", "Solutions"],
answer: "Alcohols"
},

{
question: "77) What is the molecular formula of propane?",
options: ["C₂H₆", "C₃H₈", "C₄H₁₀", "CH₄"],
answer: "C₃H₈"
},

{
question: "78) Which metal is protected from corrosion by galvanization?",
options: ["Copper", "Iron", "Silver", "Gold"],
answer: "Iron"
},

{
question: "79) Which of the following has the highest boiling point?",
options: ["CH₄", "NH₃", "H₂O", "CO₂"],
answer: "H₂O"
},

{
question: "80) What is the percentage of oxygen in H₂O by mass?",
options: ["88.9%", "80%", "75%", "50%"],
answer: "88.9%"
},
{
question: "81) What is the equilibrium constant expression for aA + bB ⇌ cC + dD?",
options: ["[A][B]/[C][D]", "[C]^c[D]^d/[A]^a[B]^b", "[A]^a[B]^b/[C]^c[D]^d", "[C][D]-[A][B]"],
answer: "[C]^c[D]^d/[A]^a[B]^b"
},

{
question: "82) Which factor does NOT affect chemical equilibrium?",
options: ["Temperature", "Pressure", "Concentration", "Catalyst"],
answer: "Catalyst"
},

{
question: "83) What is the oxidation number of nitrogen in HNO₃?",
options: ["+3", "+4", "+5", "+6"],
answer: "+5"
},

{
question: "84) Which electrode is the site of oxidation in an electrochemical cell?",
options: ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
answer: "Anode"
},

{
question: "85) What is the standard unit of enthalpy change?",
options: ["J", "kJ/mol", "mol/L", "atm"],
answer: "kJ/mol"
},

{
question: "86) Which compound is an aromatic hydrocarbon?",
options: ["Ethane", "Ethene", "Benzene", "Ethyne"],
answer: "Benzene"
},

{
question: "87) Which gas law relates volume and temperature at constant pressure?",
options: ["Boyle Law", "Charles Law", "Avogadro Law", "Dalton Law"],
answer: "Charles Law"
},

{
question: "88) What is the oxidation number of sulfur in SO₄²⁻?",
options: ["+4", "+5", "+6", "+7"],
answer: "+6"
},

{
question: "89) Which element is the strongest oxidizing agent among halogens?",
options: ["Cl", "Br", "I", "F"],
answer: "F"
},

{
question: "90) What is the pH of a 0.01 M HCl solution?",
options: ["1", "2", "3", "4"],
answer: "2"
},

{
question: "91) Which process converts alcohol into carboxylic acid?",
options: ["Reduction", "Hydrogenation", "Oxidation", "Polymerization"],
answer: "Oxidation"
},

{
question: "92) Which metal is commonly used as the cathode in dry cells?",
options: ["Iron", "Copper", "Zinc", "Carbon"],
answer: "Carbon"
},

{
question: "93) What is the oxidation number of chlorine in ClO₄⁻?",
options: ["+5", "+6", "+7", "+8"],
answer: "+7"
},

{
question: "94) Which compound is used in the manufacture of fertilizers in the Haber Process?",
options: ["NH₃", "H₂SO₄", "HNO₃", "NaOH"],
answer: "NH₃"
},

{
question: "95) Which of the following is a buffer solution?",
options: ["HCl + NaCl", "CH₃COOH + CH₃COONa", "NaOH + NaCl", "H₂SO₄ + Na₂SO₄"],
answer: "CH₃COOH + CH₃COONa"
},

{
question: "96) Which type of crystal is diamond?",
options: ["Metallic", "Ionic", "Molecular", "Covalent network"],
answer: "Covalent network"
},

{
question: "97) What volume will 2 moles of an ideal gas occupy at STP?",
options: ["11.2 L", "22.4 L", "44.8 L", "67.2 L"],
answer: "44.8 L"
},

{
question: "98) Which of the following undergoes addition reactions?",
options: ["Alkanes", "Alkenes", "Alcohols", "Carboxylic acids"],
answer: "Alkenes"
},

{
question: "99) Which substance has the highest electrical conductivity?",
options: ["Diamond", "Graphite", "Sulfur", "Iodine"],
answer: "Graphite"
},

{
question: "100) According to Le Chatelier's Principle, increasing pressure favors the side with:",
options: ["More gas molecules", "Fewer gas molecules", "Equal gas molecules", "No gas molecules"],
answer: "Fewer gas molecules"
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
