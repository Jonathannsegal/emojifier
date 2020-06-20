module.exports = function emojifier(input) {
    var emoji = require('./emoji.json')

    if (typeof input === "string") {
        if (emoji.findIndex(item => item.char === input) !== -1) {
            return `${emoji.find(item => item.char === input).char} : ${emoji.find(item => item.char === input).name}`;
        } else if (emoji.findIndex(item => item.name === input) !== -1) {
            return `${emoji.find(item => item.name === input).char} : ${emoji.find(item => item.name === input).name}`;
        } else {
            let emojiString = "";
            for (let i = 0; i < input.length; i++) {
                emojiString += (emoji[Math.floor(Math.random() * emoji.length)].char);
            }
            return emojiString;
        }
    } else if (typeof input === "number") {
        if (input === 0) {
            return "Really, 😕 you downloaded an emoji cli to not see any emojis 🤪"
        }
        let emojiString = "";
        for (let i = 0; i < input; i++) {
            emojiString += (emoji[Math.floor(Math.random() * emoji.length)].char);
        }
        return emojiString;
    } else if (typeof input === "undefined") {
        let emojiString = "";
        for (let i = 0; i < (Math.random() * (1000 - 50) + 50); i++) {
            emojiString += (emoji[Math.floor(Math.random() * emoji.length)].char);
        }
        return emojiString;
    } else {
        return "😡 Emojifier does not like your input 😠"
    }
};