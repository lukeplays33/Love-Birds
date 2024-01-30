function generateRandomTemplate() {
    return {
        personality: {
            opennessToExperience: {
                creativity: Math.random(),
                curiosity: Math.random(),
                hungerForKnowledge: Math.random(),
                speedOfLearning: Math.random(),
                divergent: Math.random(),
                abstractThinking: Math.random()
            },
            neuroticism: {
                anxiety: Math.random(),
                depression: Math.random(),
                selfDoubt: Math.random()
            },
            conscientiousness: {
                reliable: Math.random(),
                goalOriented: Math.random(),
                hardWorking: Math.random()
            },
            agreableness: {
                cooperative: Math.random(),
                polite: Math.random(),
                friendly: Math.random()
            },
            extroversion: {
                outgoingness: Math.random(),
                highEnergy: Math.random(),
                talkativeness: Math.random()
            }
        },

        character: {
            intergrity: Math.random(),
            honesty: {
                truthfullness: Math.random(),
                straightforwardness: Math.random(),
                lying: Math.random(),
                cheating: Math.random(),
                theft: Math.random(),
                loyalness: Math.random(),
                fairness: Math.random(),
                sincerity: Math.random()
            }
        },

        beliefs: {
            religion:'Pastafarian'
        }
    };
}

module.exports = { generateRandomTemplate }