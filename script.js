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
	img: ["src/deck/1.png", "src/deck/2.png", "src/deck/3.png"]
}
let trucksArr = {
	name: ["truck1", "truck2", "truck3"],
	img: ["src/truck/1.png", "src/truck/2.png", "src/truck/3.png"]
}
let wheelsArr = {
	name: ["wheels1", "wheels2", "wheels3"],
	img: ["src/wheels/1.png", "src/wheels/2.png", "src/wheels/3.png"]
}
let gripArr = {
	name: ["grip1", "grip2", "grip3"],
	img: ["src/grip/1.png", "src/grip/2.png", "src/grip/3.png"]
}

const createDeckElement = (arr, select, nameSelect) => {
	const  panel = document.querySelector(select);
	arr.img.map((item, index) => {
		const createElement = document.createElement('img')
		createElement.src = item;
		createElement.classList.add(nameSelect);
		createElement.classList.add("selectProduct");
		createElement.dataset.number = index + 1;
		panel.appendChild(createElement)
	})
}
createDeckElement(decksArr, '.selectDeck', "deskSelect");
createDeckElement(trucksArr, '.selectTruck', "truckSelect");
createDeckElement(wheelsArr, '.selectWheels', "wheelsSelect");
createDeckElement(gripArr, '.selectGrip', "gripSelect");

//Download desk elements
const deckBtn = [...document.querySelectorAll('.selectDeck .deskSelect')];
const truckBtn = [...document.querySelectorAll('.selectTruck .truckSelect')];
const wheelsBtn = [...document.querySelectorAll('.selectWheels .wheelsSelect')];
const gripsBtn = [...document.querySelectorAll('.selectGrip .gripSelect')];

const selectDeck = function () {
	let deckValue = this.dataset.number;
	deckImg = `${deckValue}.png`;
	deck.src = "src/deck/" + deckImg;
}
const selectTruck = function () {
	let truckValue = this.dataset.number;
	truckImg = `${truckValue}.png`;
	truck.src = "src/truck_creator/" + truckImg;
}
const selectWheels = function () {
	let wheelsValue = this.dataset.number;
	wheelsImg = `${wheelsValue}.png`;
	wheels.src = "src/wheels_creator/" + wheelsImg;
}
const selectGrip = function () {
	let gripValue = this.dataset.number;
	gripImg = `${gripValue}.png`;
	grip.src = "src/grip/" + gripImg;
}

deckBtn.forEach(button => {
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