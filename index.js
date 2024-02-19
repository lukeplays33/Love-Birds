import { net } from "./js/main.js";

function generateResponse(input) {
  const output = net.run(input);
  console.log("Chatbot response:", output.response);
  // Update UI or perform other actions
}

function encodeText(text) {
  return text.split("").map((char) => char.charCodeAt(0) / 255);
}

document.getElementById("msg").onchange = function () {
  const userInput = { type: "greeting", content: this.value };
  const normalizedInput = encodeText(userInput.content); // Normalize user input
  generateResponse(normalizedInput);
};