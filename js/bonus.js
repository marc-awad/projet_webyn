//Bonus 1

//Echanger le bloc 1 et le bloc 2
// let mainElement = document.querySelector("main");

// let divsInMain = mainElement.getElementsByTagName("div");

// let secondDiv = divsInMain[1];
// let thirdDiv = divsInMain[2];

// if (secondDiv && thirdDiv) {
//   mainElement.insertBefore(thirdDiv, secondDiv);
// }

//Bonus 2

lastButton = document.getElementsByTagName("button")[5];
const input = document.createElement("input");
input.type = "text";
input.classList.add("form-control", "mt-3");
input.placeholder = "Put your email right here";
input.style.textAlign = "center";

const parentDiv = lastButton.closest(".d-grid");
const grandParentDiv = parentDiv.parentElement;

// Ajouter l'input juste après les deux premiers boutons
grandParentDiv.appendChild(input);

function handleClick() {
  alert("Email entered : " + input.value);
}

firstButton = document.getElementsByTagName("button")[4];
firstButton.addEventListener("click", handleClick);
lastButton.addEventListener("click", handleClick);
