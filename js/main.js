// Feedback
// 1. Priviligé les querySelector
// 2. Vérification des éléments avant de les implémenter
// 3. Utilisation de insertAdjacentHTML ou insertBefore

//// Basic changes
//Logo
const webSiteImage = document.getElementsByTagName("img")[0]
webSiteImage.src =
  "https://www.webyn.ai/user/themes/webyn/images/logo/logo-webyn.webp"
webSiteImage.style.width = "fit-content"

//Title Text
const titleElement = document.getElementsByTagName("h1")[1]
titleElement.innerHTML =
  "Generate<span style='color : #0ea5e9;'> more revenue </span>with your website!"

//Description Text
const textElement = document.getElementsByTagName("p")[0]
const descriptionText =
  "97% of your trafic does not convert. Webyn automatically generates improvements on your website to maximise your conversions. \n100% No-Code."
textElement.innerText = descriptionText

//Buttons
const leftButton = document.getElementsByTagName("button")[4]
const rightButton = document.getElementsByTagName("button")[5]

leftButton.innerHTML = "Book a demo"
rightButton.innerHTML = "Analyse my Website →"

leftButton.style.borderRadius = "30px"
leftButton.style.backgroundColor = "#0ea5e9"
rightButton.style.borderRadius = "30px"

////Bonus changes
//Bonus 1 : Swaping blocs
const mainElement = document.querySelector("main")
const divsInMain = mainElement.querySelectorAll("main > div")
const secondBlocs = divsInMain[2]
const thirdBlocs = divsInMain[4]
const tmp = secondBlocs.outerHTML
secondBlocs.outerHTML = thirdBlocs.outerHTML
thirdBlocs.outerHTML = tmp

//Bonus 2 : Adding email input
//Creating input
const input = document.createElement("input")
input.type = "email"
input.classList.add("form-control", "mt-3", "text-center")
input.placeholder = "Put your email right here"

//Adding input to the grandparentdiv
const parentDiv = rightButton.closest(".d-grid")
const grandParentDiv = parentDiv.parentElement
grandParentDiv.appendChild(input)

//Regex verifying mail
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const handleClick = () => {
  emailRegex.test(input.value)
    ? alert("Email entered : " + input.value)
    : alert("Email incorrecte.")
}

leftButton.addEventListener("click", handleClick)
rightButton.addEventListener("click", handleClick)

//Bonus 3 : Form popup
document.body.insertAdjacentHTML(
  "beforeend",
  `
    <div class="modal fade" id="popupModal" tabindex="-1">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Subscribe to newsletter</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form id="popupForm">
              <div class="mb-3">
                <label for="name" class="form-label">Name:</label>
                <input type="text" id="name" class="form-control" required>
              </div>
              <div class="mb-3">
                <label for="email" class="form-label">Email:</label>
                <input type="email" id="email" class="form-control" required>
              </div>
              <button type="submit" class="btn btn-primary w-100">Submit</button>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary w-100" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
    `
)

const showPopup = () =>
  new bootstrap.Modal(document.getElementById("popupModal")).show()

document.getElementById("popupForm").addEventListener("submit", (event) => {
  event.preventDefault()
  bootstrap.Modal.getInstance(document.getElementById("popupModal")).hide()
})

setTimeout(showPopup, 10000)