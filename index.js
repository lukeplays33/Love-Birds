import { net } from "./js/main.js";
import { dictionary } from "./dictionary.js";

function generateResponse(input) {
  const output = net.run(input);

  const responseId = Object.keys(output)[0];
  const responseMessage = responseId

  document.getElementById('response').innerHTML = responseMessage;
  // You can use or display the generated response in the UI or perform any other action here
}

document.getElementById('msg').onchange = function () {
  generateResponse({ type: 'greeting', content: this.value });
}