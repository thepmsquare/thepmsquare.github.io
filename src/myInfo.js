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
import gungeet from "./Images/gungeet.png";
import { v4 as uuidv4 } from "uuid";
const myApps = [
  {
    key: uuidv4(),
    ariaLabel: "Info about hangman-game-react.",
    previewImageSrc: hangmanGameReact,
    title: "Hangman Game.",
    link: "https://thepmsquare.me/hangman-game-react/",
    linkAriaLabel: "Link to hangman-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about guess-color-game-react.",
    previewImageSrc: guessColorGameReact,
    title: "Guess Color Game.",
    link: "https://thepmsquare.me/guess-color-game-react/",
    linkAriaLabel: "Link to guess-color-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about lights-out-game-react.",
    previewImageSrc: lightsOutGameReact,
    title: "Lights Out Game.",
    link: "https://thepmsquare.me/lights-out-game-react/",
    linkAriaLabel: "Link to lights-out-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about minesweeper-game-react.",
    previewImageSrc: minesweeperGameReact,
    title: "Minesweeper Game.",
    link: "https://thepmsquare.me/minesweeper-game-react/",
    linkAriaLabel: "Link to minesweeper-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about multiplication-tables-exercise-react.",
    previewImageSrc: multiplicationTablesExerciseReact,
    title: "Multiplication Tables Exercise.",
    link: "https://thepmsquare.me/multiplication-tables-exercise-react/",
    linkAriaLabel: "Link to multiplication-tables-exercise-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about ttt-game-react.",
    previewImageSrc: tttGameReact,
    title: "Tic Tac Toe Game.",
    link: "https://thepmsquare.me/ttt-game-react/",
    linkAriaLabel: "Link to ttt-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about yahtzee-game-react.",
    previewImageSrc: yahtzeeGameReact,
    title: "Yahtzee Game.",
    link: "https://thepmsquare.me/yahtzee-game-react/",
    linkAriaLabel: "Link to yahtzee-game-react.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about birdIdentification.",
    previewImageSrc: birdIdentification,
    title: "Bird Identification Project (WIP).",
    link: "https://thepmsquare.me/bird-identification",
    linkAriaLabel: "Link to birdIdentification.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about fruit-ninja.",
    previewImageSrc: fruitNinja,
    title: "Fruit Ninja Clone (PC only).",
    link: "https://github.com/thepmsquare/fruit-ninja",
    linkAriaLabel: "Link to fruit-ninja.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about 2048.",
    previewImageSrc: _2048,
    title: "2048 Game Clone.",
    link: "https://thepmsquare.me/2048/",
    linkAriaLabel: "Link to 2048.",
  },
  {
    key: uuidv4(),
    ariaLabel: "Info about Hospital Management System.",
    previewImageSrc: gungeet,
    title: "Hospital Management System.",
    link: "gungeet-e199c.web.app/",
    linkAriaLabel: "Link to Hospital Management System.",
  },
];
const myAppsSorted = myApps.sort((a, b) => a.title.localeCompare(b.title));
const myCurrentEmail = "thepmsquare@gmail.com";
const myGithubUsername = "thepmsquare";
// Export sorted array by title.
export { myAppsSorted as myApps, myCurrentEmail, myGithubUsername };
