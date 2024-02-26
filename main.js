const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

function change_animal(animal) {
  text.innerHTML = "Here's a picture of a " + animal + "."
  photo.src = "../images/" + animal + ".jpg"
}

for (const button of animal_buttons) {
  button.addEventListener("change", event => {
    change_animal(button.value)
  })
}