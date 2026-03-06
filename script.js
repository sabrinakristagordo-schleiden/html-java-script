// Function to calculate BMI
function calculateBMI(){

    // Get input values
    let weight = document.getElementById("weight").value;
    let height = document.getElementById("height").value;

    // Convert height to meters
    height = height / 100;

    // BMI formula
    let bmi = weight / (height * height);

    // Round BMI
    bmi = bmi.toFixed(2);

    // Show BMI result
    document.getElementById("result").innerHTML = "Your BMI is: " + bmi;

    // BMI categories
    let category = "";

    if(bmi < 18.5){
        category = "Underweight";
    }
    else if(bmi >= 18.5 && bmi < 24.9){
        category = "Normal Weight";
    }
    else if(bmi >= 25 && bmi < 29.9){
        category = "Overweight";
    }
    else{
        category = "Obese";
    }

    // Show category
    document.getElementById("category").innerHTML = "Category: " + category;
}