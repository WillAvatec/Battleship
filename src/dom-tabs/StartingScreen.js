import {domHelper, clearChildNodes} from './assistance/domHelper.js';

const inputName = domHelper('input', {class: 'nameInput', type: 'text', placeholder: 'Please enter your name', autofocus: true}, ['Player 1']);
const playButton = domHelper('button', {class: 'playBtn'}, ['Start Game']);
const form = domHelper('form', {}, [inputName, playButton]);
// Const title = domHelper('h1', {id: 'title'}, ['BattleShip']);
// This is what is going to be presented first
const modalDiv = domHelper('div', {class: 'modal'}, [form]);

// Now here's the eventListener Logic
// - Prevent reloading window;
// - Call data.js, passing the name in the input
// - Save the data created in a variable
const body = document.querySelector('body');

export default function (callback) {
	form.addEventListener('submit', e => {
		console.log('submitted');
		e.preventDefault();
		callback(inputName.value);
		clearChildNodes(modalDiv);
	});
	body.appendChild(modalDiv);
}
