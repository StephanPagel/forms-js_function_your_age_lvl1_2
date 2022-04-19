console.log("it works");

let inputYear = document.getElementById('input_year');
let output = document.getElementById('form_output');

function age() {
    console.log("function works");
    console.log(inputYear.value);
    output.innerHTML = 2022 - inputYear.value;
}