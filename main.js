/** @format */

const form = document.getElementById("choiceForm")
const btns = document.querySelectorAll(".btn--rating")
const choice = document.querySelector(".chosenRating")
const states = document.querySelectorAll(".states")

btns.forEach((btn, index) => {
	btn.addEventListener("click", () => {
		btns.forEach((i) => {
			i.classList.remove("btn--active")
		})
		btn.classList.add("btn--active")
	})
})

form.addEventListener("submit", (e) => {
	e.preventDefault()
	const value = form["choice"].value
	choice.innerHTML = value
	states.forEach((i) => {
		i.classList.toggle("hidden")
	})
	console.log(value)
	console.log("working")
})
