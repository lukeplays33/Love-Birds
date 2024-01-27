const generateRandomTemplate = require('./Templates/randomTemplate.js');

class AIBrain {
    constructor (data, AIBrainReady) {
        this.AIBrainReady = function () {}

        generateRandomTemplate().then((datas) => {
            this.data = datas;

            this.AIBrainReady();
        });
    }
}

module.exports = { AIBrain }