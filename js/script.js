window.onload = () => {
    let button = document.querySelector("#submit")

    button.addEventListener("click", calculateBMI);

    //to show result

    };

function calculateBMI() {

    let weight = parseInt(document.querySelector("#weight").value);

    let height = parseInt(document.querySelector("#height").value);

    let result = document.querySelector("#result")

    //to check validity

    if (weight === "" || isNaN(weight))
        result.innerHTML = "Invalid Weight!";

    else if (height === "" || isNaN(height))
        result.innerHTML = "Invalid Height!";

    //if both input is valid

    else {

    let bmi = (weight / ((height * height) / 10000)).toFixed(2);

    if (bmi < 18.5) result.innerHTML = 
    `Underweight <span>${bmi}</span>`;

    else if (bmi >= 18.5 && bmi < 24.9) result.innerHTML = 
    `Healthy Weight <span>${bmi}</span>`;

    else if (bmi >= 24.9 && bmi < 29.9) result.innerHTML = 
    `Overweight : <span>${bmi}</span>`;

    else result.innerHTML = 
    `obese : <span>${bmi}</span>`;

    }
}