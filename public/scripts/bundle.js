"use strict";

var _hangman = _interopRequireDefault(require("./hangman"));

var _request = _interopRequireDefault(require("./request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const puzzelEl = document.querySelector("#puzzel");
const gussEl = document.querySelector("#gusses");
let game1;
window.addEventListener('keypress', function (e) {
  const guess = e.key;
  game1.makeguss(guess);
  render();
});

const render = () => {
  puzzelEl.textContent = game1.getpuzzel();
  gussEl.textContent = game1.statusmsg();
};

const startgame = async () => {
  const puzzle = await (0, _request.default)("2"); //console.log(puzzle)

  game1 = new _hangman.default(puzzle, "6");
  render();
};

document.querySelector("#reset").addEventListener('click', startgame);
startgame();