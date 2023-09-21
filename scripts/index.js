import {Name, StudentNumber, Program} from './formatting.js';

var name = Name("Samantha");
var studentNumber = StudentNumber("A00989415");
var program = Program("Digital Design and Development Diploma");
var sentence = name + " " + studentNumber + " " + program;

console.log(sentence);

document.getElementById("person").innerHTML = sentence;
