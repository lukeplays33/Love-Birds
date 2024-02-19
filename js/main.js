import { greetingData } from "./greetings/greetings.js";

let trainingData = [
    greetingData
];

console.log(trainingData)

const net = new brain.NeuralNetwork();

net.train(trainingData);

export { net }; 