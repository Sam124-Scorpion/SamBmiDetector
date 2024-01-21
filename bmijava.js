
function mainfunc() {
    let weight = document.getElementById('weight1').value

    let height = document.getElementById('height1').value

    let bmi = ((weight * 703) / (height * height));
    console.log(bmi);

    document.getElementById('heading').innerHTML = "your BMI is ";
    document.getElementById('bmi-output').innerHTML = bmi.toFixed(1);

    if (bmi >= 24.09) {
        document.getElementById('messege').innerHTML = "you are overweighted !! go to gym";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        document.getElementById('messege').innerHTML = "your BMI is perfect ";
    }
    else if(weight==0 && height==0){
        document.getElementById('messege').innerHTML = alert("you doesn't have enter your physical info");
    }
    else {
        document.getElementById('messege').innerHTML = "your BMI is too low";
    }

    // return bmi;
}

function clearNow() {
    window.location.reload()
}