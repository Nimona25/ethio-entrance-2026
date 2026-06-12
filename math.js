const questions = [
{
question: "1)If f(x) = 2x + 3, then f(2) equals:",
options: ["5", "7", "9", "11"],
answer: "7"
},
{
question: "2)Solve: 3x - 5 = 10",
options: ["3", "5", "7", "15"],
answer: "5"
},
{
question: " 3) If x² = 49, then x =",
options: ["7 only", "-7 only", "±7", "0"],
answer: "±7"
},
{
question: "4)The sum of interior angles of a triangle is:",
options: ["90°", "180°", "270°", "360°"],
answer: "180°"
},
{
question: "5) The slope of a line passing through (1,2) and (3,6) is:",
options: ["1", "2", "3", "4"],
answer: "2"
},
{
question: "6) The derivative of x² is:",
options: ["x", "2x", "x²", "2"],
answer: "2x"
},
{
question: "7)If sin θ = 1/2, then θ =",
options: ["30°", "45°", "60°", "90°"],
answer: "30°"
},
{
question: "8)The value of cos 0° is:",
options: ["0", "1", "-1", "1/2"],
answer: "1"
},
{
question: "9) If A = {1,2,3} and B = {3,4}, then A ∩ B is:",
options: ["{1,2}", "{3}", "{4}", "{}"],
answer: "{3}"
},
{
question: "10)The probability of getting head in a fair coin is:",
options: ["0", "1/2", "1", "2"],
answer: "1/2"
},
{
question: "11) The quadratic formula is:",
options: [
"x = -b ± √(b²-4ac) / 2a",
"x = b² - 4ac",
"x = a + b",
"x = 2a + b"
],
answer: "x = -b ± √(b²-4ac) / 2a"
},
{
question: " 12)The graph of y = x² is a:",
options: ["Straight line", "Circle", "Parabola", "Triangle"],
answer: "Parabola"
},
{
question: " 13) The limit of (x → 0) sinx/x is:",
options: ["0", "1", "∞", "-1"],
answer: "1"
},
{
question: "14) The distance formula between (x1,y1) and (x2,y2) is:",
options: [
"√((x2-x1)+(y2-y1))",
"√((x2-x1)²+(y2-y1)²)",
"(x2-x1)+(y2-y1)",
"(x1+x2)/(y1+y2)"
],
answer: "√((x2-x1)²+(y2-y1)²)"
},
{
question: "15) The area of a circle is:",
options: ["πr²", "2πr", "πd", "r²"],
answer: "πr²"
},
{
question: " 16)The value of tan 45° is:",
options: ["0", "1", "√3", "2"],
answer: "1"
},
{
question: "17) If log₁₀(100) =",
options: ["1", "2", "3", "10"],
answer: "2"
},
{
question: "18) A function is one-to-one if:",
options: [
"Different inputs give same output",
"Same input gives many outputs",
"Each input has a unique output",
"It is not defined"
],
answer: "Each input has a unique output"
},
{
question: " 19)The sum of first n natural numbers is:",
options: ["n²", "n(n+1)/2", "2n", "n/2"],
answer: "n(n+1)/2"
},
{
question: "20) A vector has:",
options: ["Only magnitude", "Only direction", "Both magnitude and direction", "No direction"],
answer: "Both magnitude and direction"
},
{
question: "21) If f(x) = x² + 3x, then f'(x) equals:",
options: ["x + 3", "2x + 3", "x² + 3", "2x"],
answer: "2x + 3"
},
{
question: " 22)The integral of 2x is:",
options: ["x² + C", "2x² + C", "x + C", "x²"],
answer: "x² + C"
},
{
question: " 23)If sin²θ + cos²θ equals:",
options: ["0", "1", "2", "sinθ"],
answer: "1"
},
{
question: " 24)The value of cos 90° is:",
options: ["1", "0", "-1", "undefined"],
answer: "0"
},
{
question: " 25)If A = {1,2,3,4} and B = {3,4,5}, then A ∪ B is:",
options: ["{1,2,3,4,5}", "{3,4}", "{1,2}", "{}"],
answer: "{1,2,3,4,5}"
},
{
question: "26)The derivative of a constant is:",
options: ["1", "0", "constant", "x"],
answer: "0"
},
{
question: "27)The midpoint of (2,4) and (6,8) is:",
options: ["(4,6)", "(3,5)", "(8,12)", "(1,2)"],
answer: "(4,6)"
},
{
question: " 28)The equation of a straight line is generally:",
options: ["y = ax²", "y = mx + c", "y = x³", "y = a/x"],
answer: "y = mx + c"
},
{
question: "29)The value of log₁₀(1) is:",
options: ["1", "0", "10", "-1"],
answer: "0"
},
{
question: " 30)If P(A) = 0.3 and P(B) = 0.5 (independent), then P(A∩B) is:",
options: ["0.8", "0.15", "0.3", "0.5"],
answer: "0.15"
},
{
question: " 31)The sum of angles in a straight line is:",
options: ["90°", "180°", "270°", "360°"],
answer: "180°"
},
{
question: "32) The value of tan 0° is:",
options: ["0", "1", "∞", "-1"],
answer: "0"
},
{
question: " 33)If x² - 5x + 6 = 0, then x equals:",
options: ["1 and 6", "2 and 3", "3 and 4", "5 and 6"],
answer: "2 and 3"
},
{
question: "34)The discriminant of ax² + bx + c = 0 is:",
options: ["b² - 4ac", "a² + b²", "2ab", "c² - b"],
answer: "b² - 4ac"
},
{
question: "35) If a function is increasing, its derivative is:",
options: ["Negative", "Zero", "Positive", "Undefined"],
answer: "Positive"
},
{
question: " 36)The square root of 144 is:",
options: ["10", "11", "12", "13"],
answer: "12"
},
{
question: "37) The value of 5! (5 factorial) is:",
options: ["25", "60", "120", "150"],
answer: "120"
},
{
question: "38) The number of permutations of n objects is:",
options: ["n²", "n!", "2n", "n+1"],
answer: "n!"
},
{
question: "39)The graph of y = sin x is called:",
options: ["Linear graph", "Parabolic graph", "Sine curve", "Exponential graph"],
answer: "Sine curve"
},
{
question: " 40)The function y = e^x is called:",
options: ["Linear function", "Quadratic function", "Exponential function", "Logarithmic function"],
answer: "Exponential function"
},
{
question: "41) The derivative of sin x is:",
options: ["cos x", "-cos x", "sin x", "-sin x"],
answer: "cos x"
},
{
question: "42)The derivative of cos x is:",
options: ["sin x", "-sin x", "cos x", "-cos x"],
answer: "-sin x"
},
{
question: " 43)The integral of 1/x is:",
options: ["x", "1/x²", "ln|x| + C", "e^x"],
answer: "ln|x| + C"
},
{
question: " 44)If f(x) = 3x², then f'(2) equals:",
options: ["6", "12", "18", "24"],
answer: "12"
},
{
question: "45) The value of sin 30° is:",
options: ["1", "1/2", "√3/2", "0"],
answer: "1/2"
},
{
question: "46)The value of cos 60° is:",
options: ["1/2", "√3/2", "0", "1"],
answer: "1/2"
},
{
question: " 47)The identity sin²x + cos²x equals:",
options: ["0", "1", "2", "sin x"],
answer: "1"
},
{
question: " 48)If vector a = (3,4), its magnitude is:",
options: ["5", "6", "7", "8"],
answer: "5"
},
{
question: " 49)The dot product of two perpendicular vectors is:",
options: ["1", "0", "-1", "Undefined"],
answer: "0"
},
{
question: "50)The probability of impossible event is:",
options: ["1", "0", "1/2", "Infinity"],
answer: "0"
},
{
question: " 51)If two events are independent, then:",
options: [
"P(A∩B) = P(A) + P(B)",
"P(A∩B) = P(A) × P(B)",
"P(A∪B) = 0",
"P(A) = P(B)"
],
answer: "P(A∩B) = P(A) × P(B)"
},
{
question: "52) The sum of an arithmetic progression is:",
options: ["n²", "n/2 (a + l)", "a² + b²", "an"],
answer: "n/2 (a + l)"
},
{
question: "53) The nth term of an arithmetic sequence is:",
options: ["a + nr", "a + (n-1)d", "an²", "a/r"],
answer: "a + (n-1)d"
},
{
question: "54)The limit of 1/x as x → ∞ is:",
options: ["∞", "1", "0", "-1"],
answer: "0"
},
{
question: " 55)A function is continuous if:",
options: [
"It has jumps",
"It is defined everywhere",
"It has no breaks or gaps",
"It has only one value"
],
answer: "It has no breaks or gaps"
},
{
question: "56) The inverse of sin x is:",
options: ["cos⁻¹x", "tan⁻¹x", "sin⁻¹x", "cot⁻¹x"],
answer: "sin⁻¹x"
},
{
question: " 57)If log a + log b =",
options: ["log(a + b)", "log(ab)", "log(a/b)", "a + b"],
answer: "log(ab)"
},
{
question: " 58)If log a - log b =",
options: ["log(a - b)", "log(a/b)", "log(ab)", "a/b"],
answer: "log(a/b)"
},
{
question: "59) The sum of interior angles of a quadrilateral is:",
options: ["180°", "270°", "360°", "540°"],
answer: "360°"
},
{
question: "60) The equation of a circle is:",
options: [
"(x - a)² + (y - b)² = r²",
"y = mx + c",
"x² + y² = 0",
"y = x²"
],
answer: "(x - a)² + (y - b)² = r²"
},
{
question: "61) The integral of x^n (where n ≠ -1) is:",
options: ["x^(n+1)/(n+1) + C", "nx^(n-1)", "ln x + C", "1/x"],
answer: "x^(n+1)/(n+1) + C"
},
{
question: "62) The definite integral represents:",
options: ["Slope", "Area under curve", "Derivative", "Limit only"],
answer: "Area under curve"
},
{
question: "63)The derivative of x³ is:",
options: ["x²", "2x", "3x²", "3x"],
answer: "3x²"
},
{
question: " 64)If f(x) = x² - 4x, then f'(x) is:",
options: ["2x - 4", "x - 4", "2x + 4", "x² - 4"],
answer: "2x - 4"
},
{
question: " 65)The value of tan 60° is:",
options: ["1", "√2", "√3", "0"],
answer: "√3"
},
{
question: "66)The identity 1 + tan²x equals:",
options: ["sin²x", "cos²x", "sec²x", "cot²x"],
answer: "sec²x"
},
{
question: " 67)The identity 1 + cot²x equals:",
options: ["sin²x", "cos²x", "csc²x", "tan²x"],
answer: "csc²x"
},
{
question: " 68)The dot product of vectors gives:",
options: ["A scalar", "A vector", "A matrix", "A function"],
answer: "A scalar"
},
{
question: " 69)If vectors are perpendicular, their dot product is:",
options: ["1", "-1", "0", "Undefined"],
answer: "0"
},
{
question: "70)The magnitude of vector (6,8) is:",
options: ["10", "12", "14", "8"],
answer: "10"
},
{
question: " 71)Conditional probability is written as:",
options: ["P(A ∪ B)", "P(A ∩ B)", "P(A|B)", "P(A + B)"],
answer: "P(A|B)"
},
{
question: " 72)If P(A|B) means:",
options: [
"Probability of A given B",
"Probability of B given A",
"Sum of A and B",
"Difference of A and B"
],
answer: "Probability of A given B"
},
{
question: "73)The sum of infinite geometric series (|r| < 1) is:",
options: ["a(1 - r)", "a/(1 - r)", "a(1 + r)", "ar²"],
answer: "a/(1 - r)"
},
{
question: " 74)If r = 1 in geometric series, the sum is:",
options: ["0", "1", "Infinite", "Undefined"],
answer: "Infinite"
},
{
question: "75)The derivative of e^x is:",
options: ["0", "x", "e^x", "1"],
answer: "e^x"
},
{
question: "76) The integral of e^x is:",
options: ["x e^x", "e^x + C", "1/e^x", "ln x"],
answer: "e^x + C"
},
{
question: " 77)A stationary point occurs when:",
options: ["f(x) = 0", "f'(x) = 0", "f''(x) = 0", "x = 0"],
answer: "f'(x) = 0"
},
{
question: "78) Maximum or minimum points are found using:",
options: ["First derivative test", "Addition rule", "Pythagoras theorem", "Factorization only"],
answer: "First derivative test"
},
{
question: "79) The area of a triangle using coordinates is given by:",
options: [
"1/2 base × height",
"1/2 |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|",
"a² + b²",
"πr²"
],
answer: "1/2 |x1(y2 - y3) + x2(y3 - y1) + x3(y1 - y2)|"
},
{
question: "80)If two lines are parallel, their slopes are:",
options: ["Equal", "Negative reciprocals", "Zero", "Undefined"],
answer: "Equal"
},
{
question: " 81)The second derivative of a function gives:",
options: ["Slope", "Area", "Concavity", "Probability"],
answer: "Concavity"
},
{
question: "82)If f''(x) > 0, the function is:",
options: ["Decreasing", "Increasing", "Concave up", "Constant"],
answer: "Concave up"
},
{
question: " 83)If f''(x) < 0, the function is:",
options: ["Concave down", "Increasing", "Linear", "Zero"],
answer: "Concave down"
},
{
question: " 84)The maximum value of sin x is:",
options: ["0", "1", "-1", "2"],
answer: "1"
},
{
question: "85) The minimum value of cos x is:",
options: ["0", "1", "-1", "2"],
answer: "-1"
},
{
question: " 86)The range of sin x is:",
options: ["0 to 1", "-1 to 1", "-∞ to ∞", "1 to 2"],
answer: "-1 to 1"
},
{
question: "87)The equation dy/dx = 0 represents:",
options: ["Maximum or minimum point", "Linear function", "Area under curve", "Probability"],
answer: "Maximum or minimum point"
},
{
question: " 88)The product of a matrix with its inverse is:",
options: ["0", "1", "Identity matrix", "Transpose"],
answer: "Identity matrix"
},
{
question: " 89)If A × B = 0 (for non-zero vectors), then A and B are:",
options: ["Parallel", "Perpendicular", "Equal", "Opposite"],
answer: "Perpendicular"
},
{
question: "90) The scalar triple product gives:",
options: ["Area", "Volume", "Length", "Angle"],
answer: "Volume"
},
{
question: " 91)The condition for two lines to be perpendicular is:",
options: ["m1 = m2", "m1 × m2 = -1", "m1 + m2 = 0", "m1 = 0"],
answer: "m1 × m2 = -1"
},
{
question: "92) If a function is increasing, then:",
options: ["f'(x) > 0", "f'(x) < 0", "f(x) = 0", "f''(x) < 0"],
answer: "f'(x) > 0"
},
{
question: "93) If a function is decreasing, then:",
options: ["f'(x) > 0", "f'(x) < 0", "f(x) > 0", "f''(x) > 0"],
answer: "f'(x) < 0"
},
{
question: "94) The solution set of an equation is:",
options: ["All possible values", "Values that satisfy the equation", "Only integers", "Only positive numbers"],
answer: "Values that satisfy the equation"
},
{
question: "95) If a system of equations has no solution, it is:",
options: ["Consistent", "Inconsistent", "Dependent", "Independent"],
answer: "Inconsistent"
},
{
question: "96) If a system has infinitely many solutions, it is:",
options: ["Inconsistent", "Independent", "Dependent", "Impossible"],
answer: "Dependent"
},
{
question: " 97)The derivative of a constant function is:",
options: ["1", "0", "Constant", "x"],
answer: "0"
},
{
question: "98)The integral represents:",
options: ["Slope", "Area under curve", "Derivative", "Limit"],
answer: "Area under curve"
},
{
question: " 99)The limit of a function at a point represents:",
options: ["Exact value always", "Approaching value", "Derivative only", "Area only"],
answer: "Approaching value"
},
{
question: "100) Mathematics mainly studies:",
options: ["Living things", "Numbers, patterns, and relationships", "Chemicals", "Machines"],
answer: "Numbers, patterns, and relationships"
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
