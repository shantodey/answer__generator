const myButton = document.querySelector('.div3'); 
function Answer__generator() {
    let value = document.querySelector('.div2').value;
    const outputDiv = document.getElementById('output');   
    if (value > 18) {
        outputDiv.innerHTML = "You are an adult";
    } else {
        outputDiv.innerHTML = "You are not an adult";
    }
}
myButton.addEventListener('click', Answer__generator);