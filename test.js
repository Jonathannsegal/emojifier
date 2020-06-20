const emojifier = require("./index.js");

console.log(emojifier('😀'));
console.log(emojifier('grinning face'));

console.log(emojifier('Here is test that does not define an emoji'));

console.log(emojifier(0));
console.log(emojifier(10));

console.log(emojifier());
console.log(emojifier(true));