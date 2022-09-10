/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.querySelector("#excuse").innerHTML = excuseGen();
  //write your code here
  // console.log("Hello Rigo from the console!");
};
function excuseGen() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "the keys", "the car"];
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let randomwho = Math.floor(who.length * Math.random());
  let randomaction = Math.floor(action.length * Math.random());
  let randomwhat = Math.floor(what.length * Math.random());
  let randomwhen = Math.floor(when.length * Math.random());

  return (
    who[randomwho] +
    " " +
    action[randomaction] +
    " " +
    what[randomwhat] +
    " " +
    when[randomwhen] +
    " "
  );
}
