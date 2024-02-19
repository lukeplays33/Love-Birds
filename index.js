function generateResponse(input) {
    const output = net.run(input);
    document.getElementById('response').innerHTML = output;
    // You can use or display the generated response in the UI or perform any other action here
  }

document.getElementById('msg').onchange = function () {
    generateResponse({ type: 'greeting', content: this.value });
}