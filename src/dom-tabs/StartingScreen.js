import domHelper from './assistance/domHelper.js';

const inputName = domHelper('input', {class: 'nameInput', type: 'text', placeholder: 'Please enter your name'}, ['Player 1']);
const playButton = domHelper('button', {class: 'playBtn'}, ['Start Game']);
const form = domHelper('form', {}, [inputName, playButton]);
const title = domHelper('h1', {id: 'title'}, ['BattleShip']);
// This is what is going to be presented first
const modalDiv = domHelper('div', {class: 'modal'}, [title, form]);

// Now here's the eventListener Logic
// - Prevent reloading window;
// - Call data.js, passing the name in the input
// - Save the data created in a variable

export default function ({parentNode, callback, storeDataIn}) {
	playButton.addEventListener('click', e => {
		e.preventDefault();
		storeDataIn = callback(inputName.value);
	});
	parentNode.appendChild(modalDiv);
}
