const questions = [
{
question: "1) Which organelle is known as the powerhouse of the cell?",
options: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi apparatus"],
answer: "Mitochondrion"
},
{
question: "2) What is the basic unit of life?",
options: ["Tissue", "Cell", "Organ", "Organism"],
answer: "Cell"
},
{
question: "3) Which molecule carries genetic information in living organisms?",
options: ["RNA", "Protein", "DNA", "Lipid"],
answer: "DNA"
},
{
question: "4) What is the process by which green plants make their own food?",
options: ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
answer: "Photosynthesis"
},
{
question: "5) Which pigment absorbs light energy for photosynthesis?",
options: ["Hemoglobin", "Chlorophyll", "Melanin", "Carotene"],
answer: "Chlorophyll"
},
{
question: "6) In which organelle does photosynthesis occur?",
options: ["Mitochondrion", "Nucleus", "Chloroplast", "Vacuole"],
answer: "Chloroplast"
},
{
question: "7) Which scientist is known as the father of genetics?",
options: ["Charles Darwin", "Gregor Mendel", "Louis Pasteur", "Watson"],
answer: "Gregor Mendel"
},
{
question: "8) What are the different forms of a gene called?",
options: ["Chromosomes", "Alleles", "Codons", "Nucleotides"],
answer: "Alleles"
},
{
question: "9) How many chromosomes are found in a normal human body cell?",
options: ["23", "44", "46", "48"],
answer: "46"
},
{
question: "10) Which blood group is known as the universal donor?",
options: ["A", "B", "AB", "O"],
answer: "O"
},
{
question: "11) Which blood group is known as the universal recipient?",
options: ["A", "B", "AB", "O"],
answer: "AB"
},
{
question: "12) What is the functional unit of the kidney?",
options: ["Neuron", "Nephron", "Alveolus", "Villus"],
answer: "Nephron"
},
{
question: "13) Which gas is released during photosynthesis?",
options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
answer: "Oxygen"
},
{
question: "14) Which gas is required for photosynthesis?",
options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
answer: "Carbon dioxide"
},
{
question: "15) The movement of water across a selectively permeable membrane is called:",
options: ["Diffusion", "Osmosis", "Active transport", "Transpiration"],
answer: "Osmosis"
},
{
question: "16) Which part of the cell controls all cellular activities?",
options: ["Cell membrane", "Cytoplasm", "Nucleus", "Ribosome"],
answer: "Nucleus"
},
{
question: "17) Which process produces gametes in animals?",
options: ["Mitosis", "Binary fission", "Meiosis", "Budding"],
answer: "Meiosis"
},
{
question: "18) What is the main function of red blood cells?",
options: ["Fight disease", "Clot blood", "Transport oxygen", "Digest food"],
answer: "Transport oxygen"
},
{
question: "19) Which theory explains how species change over time?",
options: ["Cell Theory", "Gene Theory", "Theory of Evolution", "Germ Theory"],
answer: "Theory of Evolution"
},
{
question: "20) Who proposed the theory of natural selection?",
options: ["Gregor Mendel", "Charles Darwin", "Robert Hooke", "Louis Pasteur"],
answer: "Charles Darwin"
},
{
question: "21) Which process produces two genetically identical daughter cells?",
options: ["Meiosis", "Fertilization", "Mitosis", "Mutation"],
answer: "Mitosis"
},
{
question: "22) During which phase of mitosis do chromosomes align at the equator?",
options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
answer: "Metaphase"
},
{
question: "23) What is the monomer unit of proteins?",
options: ["Fatty acids", "Monosaccharides", "Amino acids", "Nucleotides"],
answer: "Amino acids"
},
{
question: "24) Which biomolecule is the primary source of energy for cells?",
options: ["Proteins", "Lipids", "Carbohydrates", "Vitamins"],
answer: "Carbohydrates"
},
{
question: "25) What is the site of protein synthesis in a cell?",
options: ["Nucleus", "Ribosome", "Golgi apparatus", "Lysosome"],
answer: "Ribosome"
},
{
question: "26) Which enzyme in saliva begins the digestion of starch?",
options: ["Pepsin", "Lipase", "Amylase", "Trypsin"],
answer: "Amylase"
},
{
question: "27) The exchange of gases in the lungs occurs in the:",
options: ["Bronchi", "Trachea", "Alveoli", "Larynx"],
answer: "Alveoli"
},
{
question: "28) Which chamber of the heart pumps oxygenated blood to the body?",
options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
answer: "Left ventricle"
},
{
question: "29) Which blood vessels carry blood away from the heart?",
options: ["Veins", "Capillaries", "Arteries", "Venules"],
answer: "Arteries"
},
{
question: "30) Which hormone regulates blood glucose levels by lowering them?",
options: ["Adrenaline", "Insulin", "Glucagon", "Thyroxine"],
answer: "Insulin"
},
{
question: "31) What is the genetic makeup of an organism called?",
options: ["Phenotype", "Genotype", "Variation", "Mutation"],
answer: "Genotype"
},
{
question: "32) The observable characteristics of an organism are called:",
options: ["Genotype", "Phenotype", "Alleles", "Chromosomes"],
answer: "Phenotype"
},
{
question: "33) A dominant allele is expressed when:",
options: ["Two recessive alleles are present", "At least one dominant allele is present", "No allele is present", "Only recessive alleles are present"],
answer: "At least one dominant allele is present"
},
{
question: "34) What is a mutation?",
options: ["Cell division", "A change in DNA sequence", "Protein synthesis", "Fertilization"],
answer: "A change in DNA sequence"
},
{
question: "35) Which scientist developed the binomial system of naming organisms?",
options: ["Darwin", "Mendel", "Linnaeus", "Pasteur"],
answer: "Linnaeus"
},
{
question: "36) The scientific name of an organism consists of:",
options: ["Kingdom and phylum", "Class and order", "Genus and species", "Family and genus"],
answer: "Genus and species"
},
{
question: "37) Which ecological relationship benefits both organisms involved?",
options: ["Parasitism", "Predation", "Mutualism", "Competition"],
answer: "Mutualism"
},
{
question: "38) The role of decomposers in an ecosystem is to:",
options: ["Produce food", "Consume producers", "Break down dead organic matter", "Store energy"],
answer: "Break down dead organic matter"
},
{
question: "39) Which process returns carbon dioxide to the atmosphere?",
options: ["Photosynthesis", "Respiration", "Nitrogen fixation", "Transpiration"],
answer: "Respiration"
},
{
question: "40) The total number of individuals of the same species living in an area is called:",
options: ["Community", "Population", "Ecosystem", "Biome"],
answer: "Population"
},
{
question: "41) Which stage of meiosis results in the separation of homologous chromosomes?",
options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase II"],
answer: "Anaphase I"
},
{
question: "42) What is the probability of obtaining a recessive offspring from two heterozygous parents (Aa × Aa)?",
options: ["25%", "50%", "75%", "100%"],
answer: "25%"
},
{
question: "43) Which nitrogenous base is found in RNA but not in DNA?",
options: ["Thymine", "Adenine", "Uracil", "Guanine"],
answer: "Uracil"
},
{
question: "44) DNA replication occurs during which phase of the cell cycle?",
options: ["G1 phase", "S phase", "G2 phase", "M phase"],
answer: "S phase"
},
{
question: "45) Which process converts mRNA information into a protein?",
options: ["Replication", "Transcription", "Translation", "Mutation"],
answer: "Translation"
},
{
question: "46) Which organ produces bile?",
options: ["Pancreas", "Stomach", "Liver", "Gall bladder"],
answer: "Liver"
},
{
question: "47) What is the main function of bile?",
options: ["Digest proteins", "Digest carbohydrates", "Emulsify fats", "Digest nucleic acids"],
answer: "Emulsify fats"
},
{
question: "48) Which hormone stimulates ovulation in females?",
options: ["Insulin", "FSH", "LH", "Thyroxine"],
answer: "LH"
},
{
question: "49) Which hormone is responsible for the development of male secondary sexual characteristics?",
options: ["Estrogen", "Progesterone", "Testosterone", "Oxytocin"],
answer: "Testosterone"
},
{
question: "50) Which part of the brain controls balance and coordination?",
options: ["Cerebrum", "Medulla", "Hypothalamus", "Cerebellum"],
answer: "Cerebellum"
},
{
question: "51) Which blood cells are responsible for immunity and defense against disease?",
options: ["Red blood cells", "Platelets", "White blood cells", "Plasma cells"],
answer: "White blood cells"
},
{
question: "52) Which component of blood is responsible for clotting?",
options: ["Plasma", "Platelets", "Red blood cells", "White blood cells"],
answer: "Platelets"
},
{
question: "53) The loss of water vapor from plant leaves is known as:",
options: ["Respiration", "Photosynthesis", "Transpiration", "Diffusion"],
answer: "Transpiration"
},
{
question: "54) Which tissue transports water and minerals in plants?",
options: ["Phloem", "Xylem", "Cambium", "Epidermis"],
answer: "Xylem"
},
{
question: "55) Which tissue transports manufactured food in plants?",
options: ["Xylem", "Phloem", "Cortex", "Meristem"],
answer: "Phloem"
},
{
question: "56) Which scientist proposed the theory of evolution by natural selection?",
options: ["Gregor Mendel", "Charles Darwin", "Robert Hooke", "Louis Pasteur"],
answer: "Charles Darwin"
},
{
question: "57) Structures that have similar origins but different functions are called:",
options: ["Analogous structures", "Homologous structures", "Vestigial organs", "Mutations"],
answer: "Homologous structures"
},
{
question: "58) Which process introduces new genetic variation into a population?",
options: ["Mutation", "Mitosis", "Binary fission", "Cloning"],
answer: "Mutation"
},
{
question: "59) Biotechnology involving the insertion of genes into another organism is called:",
options: ["Selective breeding", "Genetic engineering", "Natural selection", "Hybridization"],
answer: "Genetic engineering"
},
{
question: "60) Which microorganism is commonly used in bread making?",
options: ["Bacteria", "Virus", "Yeast", "Protozoa"],
answer: "Yeast"
},
{
question: "61) Which type of microorganism causes malaria?",
options: ["Bacterium", "Virus", "Protozoan", "Fungus"],
answer: "Protozoan"
},
{
question: "62) What is the scientific name of the parasite that causes malaria?",
options: ["Trypanosoma", "Plasmodium", "Entamoeba", "Giardia"],
answer: "Plasmodium"
},
{
question: "63) Which insect transmits malaria to humans?",
options: ["Housefly", "Tsetse fly", "Female Anopheles mosquito", "Bee"],
answer: "Female Anopheles mosquito"
},
{
question: "64) HIV primarily attacks which type of cells in the human body?",
options: ["Red blood cells", "Platelets", "White blood cells", "Nerve cells"],
answer: "White blood cells"
},
{
question: "65) Which disease is caused by a deficiency of insulin?",
options: ["Hypertension", "Diabetes Mellitus", "Anemia", "Goiter"],
answer: "Diabetes Mellitus"
},
{
question: "66) Which mineral is essential for the formation of hemoglobin?",
options: ["Calcium", "Iron", "Iodine", "Phosphorus"],
answer: "Iron"
},
{
question: "67) A deficiency of iodine may lead to:",
options: ["Scurvy", "Rickets", "Goiter", "Anemia"],
answer: "Goiter"
},
{
question: "68) Which vitamin is produced in the skin when exposed to sunlight?",
options: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
answer: "Vitamin D"
},
{
question: "69) Which vitamin deficiency causes scurvy?",
options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
answer: "Vitamin C"
},
{
question: "70) Which vitamin deficiency causes rickets in children?",
options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
answer: "Vitamin D"
},
{
question: "71) Which ecological pyramid is always upright?",
options: ["Pyramid of Numbers", "Pyramid of Biomass", "Pyramid of Energy", "All of the above"],
answer: "Pyramid of Energy"
},
{
question: "72) Organisms that make their own food are called:",
options: ["Consumers", "Decomposers", "Autotrophs", "Parasites"],
answer: "Autotrophs"
},
{
question: "73) Animals that feed directly on producers are known as:",
options: ["Primary consumers", "Secondary consumers", "Tertiary consumers", "Decomposers"],
answer: "Primary consumers"
},
{
question: "74) The process by which atmospheric nitrogen is converted into usable compounds is called:",
options: ["Photosynthesis", "Nitrogen fixation", "Respiration", "Transpiration"],
answer: "Nitrogen fixation"
},
{
question: "75) Which bacteria are commonly associated with nitrogen fixation in leguminous plants?",
options: ["Lactobacillus", "Rhizobium", "Salmonella", "Vibrio"],
answer: "Rhizobium"
},
{
question: "76) The variety of living organisms in an ecosystem is called:",
options: ["Population", "Biodiversity", "Community", "Biomass"],
answer: "Biodiversity"
},
{
question: "77) Which process can lead to the formation of new species?",
options: ["Adaptation", "Speciation", "Respiration", "Digestion"],
answer: "Speciation"
},
{
question: "78) The remains or traces of ancient organisms preserved in rocks are called:",
options: ["Artifacts", "Mutations", "Fossils", "Alleles"],
answer: "Fossils"
},
{
question: "79) Which evidence strongly supports the theory of evolution?",
options: ["Photosynthesis", "Fossil records", "Respiration", "Digestion"],
answer: "Fossil records"
},
{
question: "80) The ability of an organism to survive and reproduce in its environment is called:",
options: ["Fitness", "Mutation", "Variation", "Inheritance"],
answer: "Fitness"
},
{
question: "81) Which scientist discovered the structure of DNA together with Francis Crick?",
options: ["Charles Darwin", "Gregor Mendel", "James Watson", "Louis Pasteur"],
answer: "James Watson"
},
{
question: "82) DNA is composed of repeating units called:",
options: ["Amino acids", "Nucleotides", "Fatty acids", "Monosaccharides"],
answer: "Nucleotides"
},
{
question: "83) Which nitrogenous base pairs with adenine in DNA?",
options: ["Guanine", "Cytosine", "Uracil", "Thymine"],
answer: "Thymine"
},
{
question: "84) Which nitrogenous base pairs with cytosine in DNA?",
options: ["Adenine", "Thymine", "Guanine", "Uracil"],
answer: "Guanine"
},
{
question: "85) A person with genotype 'aa' is described as:",
options: ["Homozygous dominant", "Heterozygous", "Homozygous recessive", "Codominant"],
answer: "Homozygous recessive"
},
{
question: "86) Which blood group genotype produces blood group O?",
options: ["IAIA", "IAi", "IBIB", "ii"],
answer: "ii"
},
{
question: "87) What is the expected phenotypic ratio of a monohybrid cross between two heterozygous parents?",
options: ["1:1", "3:1", "1:2:1", "9:3:3:1"],
answer: "3:1"
},
{
question: "88) Which process produces genetically diverse gametes?",
options: ["Mitosis", "Binary fission", "Meiosis", "Budding"],
answer: "Meiosis"
},
{
question: "89) Which stage of meiosis involves crossing over?",
options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"],
answer: "Prophase I"
},
{
question: "90) Which organ secretes insulin?",
options: ["Liver", "Pancreas", "Kidney", "Stomach"],
answer: "Pancreas"
},
{
question: "91) Which hormone increases blood glucose levels?",
options: ["Insulin", "Glucagon", "Estrogen", "Progesterone"],
answer: "Glucagon"
},
{
question: "92) Which part of the nephron is mainly responsible for filtration of blood?",
options: ["Loop of Henle", "Collecting duct", "Glomerulus", "Distal tubule"],
answer: "Glomerulus"
},
{
question: "93) Which component of blood transports dissolved substances such as nutrients and hormones?",
options: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
answer: "Plasma"
},
{
question: "94) Which plant hormone promotes cell elongation and growth?",
options: ["Auxin", "Ethylene", "Abscisic acid", "Cytokinin"],
answer: "Auxin"
},
{
question: "95) Which plant hormone is associated with fruit ripening?",
options: ["Auxin", "Gibberellin", "Ethylene", "Cytokinin"],
answer: "Ethylene"
},
{
question: "96) Which biome is characterized by very low rainfall and sparse vegetation?",
options: ["Tropical rainforest", "Grassland", "Desert", "Tundra"],
answer: "Desert"
},
{
question: "97) The transfer of energy from one trophic level to another occurs through:",
options: ["Food chains", "Nitrogen fixation", "Photosynthesis", "Osmosis"],
answer: "Food chains"
},
{
question: "98) Which human activity is the greatest threat to biodiversity worldwide?",
options: ["Habitat destruction", "Exercise", "Irrigation", "Pollination"],
answer: "Habitat destruction"
},
{
question: "99) The use of living organisms to produce useful products is known as:",
options: ["Ecology", "Biotechnology", "Taxonomy", "Evolution"],
answer: "Biotechnology"
},
{
question: "100) Which branch of biology deals with the classification of organisms?",
options: ["Ecology", "Genetics", "Taxonomy", "Physiology"],
answer: "Taxonomy"
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
