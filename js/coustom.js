const myButton = document.querySelector('.div3'); 

function Answer__generator() {
    let value = document.querySelector('.div2').value;
    const outputDiv = document.getElementById('output');
    
    if (value > 18) {
        outputDiv.innerHTML = "you are an adult";
    } else {
        outputDiv.innerHTML = "you are not an adult";
    }
}

myButton.addEventListener('click', Answer__generator);