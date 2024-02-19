function encodeText(text) {
    return text.split("").map((char) => char.charCodeAt(0) / 255);
  }

const dictionary = [
    {
      input: encodeText("Hello"), // Normalize input
      output: { response: "Hello" }, // Example label
    },
    // Add more training examples
  ];
  
  export { dictionary };