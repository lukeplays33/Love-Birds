import { encodeText } from "../utils/encoder.js";

let greetingData = {
    input: { type: 'greeting', content: encodeText('Hello') },
      output: { response: 'Hi there!' }
}

export { greetingData }