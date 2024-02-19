function encodeText(text) {
    return text.split('').map(char => char.charCodeAt(0) / 255);
  }

  export {encodeText }