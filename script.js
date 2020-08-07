const deck = document.querySelector('.deck');
const truck = document.querySelector('.truck');
const wheels = document.querySelector('.wheels');
const grip = document.querySelector('.grip');
let deckImg = "";
let truckImg = "";
let wheelsImg = "";
let gripImg = "";
let decksArr = {
	name: ["deck1" , "deck2", "deck3"],
	img: ["zdj/blat/1.png" , "zdj/blat/2.png", "zdj/blat/3.png"]
}
let trucksArr = {
	name: ["truck1", "truck2", "truck3"],
	img: ["zdj/truck/1.png", "zdj/truck/2.png", "zdj/truck/3.png"]
}
let wheelsArr = {
	name: ["wheels1", "wheels2", "wheels3"],
	img: ["zdj/kolka/1.png", "zdj/kolka/2.png", "zdj/kolka/3.png"]
}
let gripArr = {
	name: ["grip1", "grip2", "grip3"],
	img: ["zdj/grip/1.png", "zdj/grip/2.png", "zdj/grip/3.png"]
}
function createDeckElement() {
	const deckPanel = document.querySelector('.selectDeck');
	decksArr.img.map((deck, index) => {
		const createDeck = document.createElement('img')
		createDeck.src = deck;
		createDeck.classList.add("deskSelect");
		createDeck.dataset.deck = index + 1;
		deckPanel.appendChild(createDeck)
	})
}
createDeckElement();
//Download desk elements
const deckBtn = [...document.querySelectorAll('.selectDeck .deskSelect')];
const truckBtn = [...document.querySelectorAll('.selectTruck .truckSelect')];
const wheelsBtn = [...document.querySelectorAll('.selectWheels .wheelsSelect')];
const gripsBtn = [...document.querySelectorAll('.selectGrip .gripSelect')];

const selectDeck = function () {
	let deckValue = this.dataset.deck;
	deckImg = `${deckValue}.png`;
	deck.src = "zdj/blat/" + deckImg;
}
const selectTruck = function () {
	let truckValue = this.dataset.deck;
	truckImg = `${truckValue}.png`;
	truck.src = "zdj/truck_kreator/" + truckImg;
}
const selectWheels = function () {
	let wheelsValue = this.dataset.deck;
	wheelsImg = `${wheelsValue}.png`;
	wheels.src = "zdj/kolka_kreator/" + wheelsImg;
}
const selectGrip = function () {
	let gripValue = this.dataset.deck;
	gripImg = `${gripValue}.png`;
	grip.src = "zdj/grip/" + gripImg;
}

deckBtn.forEach(button=> {
	button.addEventListener('click', selectDeck)
})
truckBtn.forEach(button => {
	button.addEventListener('click', selectTruck)
})
wheelsBtn.forEach(button => {
	button.addEventListener('click', selectWheels)
})
gripsBtn.forEach(button => {
	button.addEventListener('click', selectGrip)
})