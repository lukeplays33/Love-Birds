import { net } from "./js/main.js";

function generateResponse(input) {
    net.run(input);

    const responseId = Object.keys(output)[0];
const responseMessage = userMessages.find((message) => message.id === parseInt(responseId));

    document.getElementById('response').innerHTML = responseMessage;
    // You can use or display the generated response in the UI or perform any other action here
  }

document.getElementById('msg').onchange = function () {
    generateResponse({ type: 'greeting', content: this.value });
}