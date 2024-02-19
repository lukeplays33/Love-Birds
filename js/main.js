import { dictionary } from "./dictionary.js";

console.log(dictionary)

const net = new brain.NeuralNetwork();

net.train(dictionary);

export { net }; 