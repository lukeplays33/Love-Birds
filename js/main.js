import { dictionary } from "./dictionary.js";

console.log(dictionary);

const net = new brain.NeuralNetwork();
  
  // Train the chatbot with user messages
  dictionary.forEach((message) => {
    net.train([{ input: message.message, output: message.id }]);
  });

export { net }; 