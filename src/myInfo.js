import guessColorGameReact from "./Images/guess-color-game-react.png";
import hangmanGameReact from "./Images/hangman-game-react.png";
import lightsOutGameReact from "./Images/lights-out-game-react.png";
import minesweeperGameReact from "./Images/minesweeper-game-react.png";
import multiplicationTablesExerciseReact from "./Images/multiplication-tables-exercise-react.png";
import tttGameReact from "./Images/ttt-game-react.png";
import yahtzeeGameReact from "./Images/yahtzee-game-react.png";
import birdIdentification from "./Images/birdIdentification.png";
import fruitNinja from "./Images/fruit-ninja.png";
import _2048 from "./Images/2048.png";
import hidden from "./Images/hidden.png";
import { v4 as uuidv4 } from "uuid";
const myApps = [
	{
		key: uuidv4(),
		previewImageSrc: hangmanGameReact,
		title: "Hangman Game.",
		link: "https://thepmsquare.github.io/hangman-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: guessColorGameReact,
		title: "Guess Color Game.",
		link: "https://thepmsquare.github.io/guess-color-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: lightsOutGameReact,
		title: "Lights Out Game.",
		link: "https://thepmsquare.github.io/lights-out-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: minesweeperGameReact,
		title: "Minesweeper Game.",
		link: "https://thepmsquare.github.io/minesweeper-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: multiplicationTablesExerciseReact,
		title: "Multiplication Tables Exercise.",
		link: "https://thepmsquare.github.io/multiplication-tables-exercise-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: tttGameReact,
		title: "Tic Tac Toe Game.",
		link: "https://thepmsquare.github.io/ttt-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: yahtzeeGameReact,
		title: "Yahtzee Game.",
		link: "https://thepmsquare.github.io/yahtzee-game-react/",
	},
	{
		key: uuidv4(),
		previewImageSrc: birdIdentification,
		title: "Bird Identification Project.",
		link: "https://thepmsquare.github.io/bird-identification",
	},
	{
		key: uuidv4(),
		previewImageSrc: fruitNinja,
		title: "Fruit Ninja Clone (PC only).",
		link: "https://github.com/thepmsquare/fruit-ninja",
	},
	{
		key: uuidv4(),
		previewImageSrc: _2048,
		title: "2048 Game Clone.",
		link: "https://thepmsquare.github.io/2048/",
	},
	{
		key: uuidv4(),
		previewImageSrc: hidden,
		title: "hidden (wrapper for hidden-api).",
		link: "https://thepmsquare.github.io/hidden/",
	},
	{
		key: uuidv4(),
		previewImageSrc: hidden,
		title: "hidden-api (steganography api).",
		link: "https://hiddenapi.herokuapp.com/docs",
	},
];
const myAppsSorted = myApps.sort((a, b) => a.title.localeCompare(b.title));
const myCurrentEmail = "thepmsquare@gmail.com";
const myGithubUsername = "thepmsquare";
// Export sorted array by title.
export { myAppsSorted as myApps, myCurrentEmail, myGithubUsername };
