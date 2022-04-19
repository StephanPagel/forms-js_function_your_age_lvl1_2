let inputYear = document.getElementById('input_year');
let output = document.getElementById('form_output');

function age() {
    output.innerHTML = 2022 - inputYear.value;
}