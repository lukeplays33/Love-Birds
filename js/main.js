import { greetingData } from "./greetings/greetings.js";

let trainingData = [
    greetingData
];

const net = new brain.NeuralNetwork();

net.train(trainingData, { iterations: 1000, errorThresh: 0.01 });