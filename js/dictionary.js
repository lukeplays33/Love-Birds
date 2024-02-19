function encodeText(text) {
    return text.split("").map((char) => char.charCodeAt(0) / 255);
  }

const dictionary = [
    {
      input: encodeText("Hello"), // Normalize input
      output: { response: 1 }, // Example label
    },
    // Add more training examples
  ];
  
  export { dictionary };