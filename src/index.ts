import { printHello } from "./print";
import "./styles.css";

const text = document.createElement("h1");
document.querySelector("#root").append(text);

text.innerHTML = "Hello typescript";
text.classList.add("title");

printHello("Vim and Typescripr");
