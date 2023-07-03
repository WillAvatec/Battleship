import { domHelper, clearChildNodes } from "./assistance/domHelper.js";

const inputName = domHelper(
  "input",
  {
    class: "nameInput p-2 rounded-sm text-purple-500",
    type: "text",
    required: true,
    placeholder: "Please enter your name",
    autofocus: true,
  },
  ["Player 1"]
);
const playButton = domHelper(
  "button",
  {
    class:
      "playBtn text-white bg-purple-800 p-3 py-1.5 rounded-xl hover:scale-105 hover:bg-purple-900 hover:shadow-xl transition-all",
  },
  ["Start Game"]
);

const welcome = domHelper(
  "p",
  { class: "text-xl align-middle leading-8 h-9 uppercase", id: "welcome" },
  ["Welcome aboard!"]
);

const welcomeDiv = domHelper("div", { class: "flex align-center" }, [welcome]);

const form = domHelper(
  "form",
  {
    class:
      "animate-fade-in p-5 w-11/12 mx-auto my-auto justify-items-center rounded-xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white max-w-screen-sm",
  },
  [welcomeDiv, inputName, playButton]
);

const modalDiv = domHelper(
  "div",
  {
    style:
      "background-image: url('https://w0.peakpx.com/wallpaper/427/48/HD-wallpaper-purple-haze-world-reflects-water-alien.jpg');",
    class:
      "modal bg-no-repeat bg-cover min-w-full min-h-full flex justify-center content-center",
  },
  [form]
);

// Now here's the eventListener Logic
// - Prevent reloading window;
// - Call data.js, passing the name in the input
// - Save the data created in a variable
const body = document.querySelector("body");

export default function (callback) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    /* form.classList.remove('animate__zoomIn');
		form.classList.add('animate__fadeOutDown');
		form.addEventListener('animationend', () => {
			modalDiv.remove();
			callback(inputName.value);
		}); */
    modalDiv.remove();
    callback(inputName.value);
  });
  body.appendChild(modalDiv);
}
