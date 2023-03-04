import {domHelper, clearChildNodes} from './assistance/domHelper.js';
import 'animate.css';

const inputName = domHelper('input', {class: 'nameInput', type: 'text', required: true, placeholder: 'Please enter your name', autofocus: true}, ['Player 1']);
const playButton = domHelper('button', {class: 'playBtn'}, ['Start Game']);
const welcome = domHelper('p', {id: 'welcome'}, ['Welcome aboard!\n Let!\'s get started, shall we?']);
const form = domHelper('form', {class: 'animate__animated animate__zoomIn animate__delay'}, [welcome, inputName, playButton]);
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
