import { net } from "./js/main.js";

function generateResponse(input) {
    const output = net.run({ type:"greeting", content: encodeText(input.content) });
    console.log(output)
    document.getElementById('response').innerHTML = output;
    // You can use or display the generated response in the UI or perform any other action here
  }

  function encodeText(text) {
    return text.split('').map(char => char.charCodeAt(0) / 255);
  }

document.getElementById('msg').onchange = function () {
    generateResponse({ type: 'greeting', content: this.value });
}