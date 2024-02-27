const animal_buttons = document.getElementsByName("animal-button")
const text = document.querySelector("#text")
const photo = document.querySelector("#photo")

for (const button of animal_buttons) {
    button.addEventListener("click", function() {
        text.innerHTML = "Here is a picture of a " + button.value
        photo.src = "images/" + button.value + ".jpg"
    })
}