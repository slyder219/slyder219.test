let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let submit = document.getElementById("button");
let clearButton = document.getElementById("clear");
let outputArea = document.getElementById("outputArea");

submit.addEventListener("click", pressed)
clearButton.addEventListener("click", clear)

function pressed(){
    let firstNameValue = firstName.value;
    let lastNmaeValue = lastName.value;
    let emailValue = email.value;
    firstName.value = "";
    firstName.placeholder = "";
    lastName.value = "";
    lastName.placeholder = "";
    email.value = "";
    email.placeholder = "";
    let temp = lastNmaeValue + ", " + firstNameValue + ", " + emailValue;
    pTag = document.createElement("p");
    pTag.textContent = temp;
    outputArea.insertAdjacentElement("beforeend", pTag);

}

function clear(){
    while (outputArea.firstChild){
        outputArea.removeChild(outputArea.firstChild);
    }
    
}


