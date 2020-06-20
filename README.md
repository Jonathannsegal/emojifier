# Emojifier
🐊 🛠 🌂 🌤 🌄 Package for generating strings of emojis 🐫🔏 🔨 😊 🌻

[![npm (scoped)](https://img.shields.io/npm/v/@jonathansegal/emojifier.svg)](https://www.npmjs.com/package/@jonathansegal/emojifier)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jonathansegal/emojifier.svg)](https://www.npmjs.com/package/@jonathansegal/emojifier)

# @jonathansegal/emojifier

## TODO

- Make Deno module
- Make CLI

Fun emoji commands

## Install

```
$ npm install @jonathansegal/emojifier
```

## Usage

```js
const emojifier = require("@jonathansegal/emojifier");

emojifier('😀') 
// => "😀 : grinning face"
emojifier('grinning face') 
// => "😀 : grinning face"

emojifier('Here is test that does not define an emoji') 
// => ☁️🤎🧙🏻‍♂️👶🏻🤜🦸🏾‍♀️🕶️🧏🏻‍♀️👩🏻‍🔧🙋🏼🟧🧖🏼‍♂️👳🏼‍♀🧚🏼‍♂️🕶️

emojifier(0)
// => Really, 😕 you downloaded emojifier to not see any emojis 🤪
emojifier(10)
// => 🧛🏾‍♂👨🏽‍🤝‍👨🏻♒🕵️🕯️🕰️⛳⛹️‍♀🎅🏾🐖

emojifier()
// => 🦿🙋🏻‍♂🧑🏻‍🤝‍🧑🏼🎄🦯♟🇵🇦🧏🏽‍♂️👱🏽‍♀🔚🚵👨🏾‍🚒👨‍🔧🏂🏿💁🏻‍♀🚓🏌🏻‍♀️🚧🎅🏽🧜🏻‍♀🚸🙋🏼🤱🏾🏄🏾👨🏾🈺👩🏻‍🤝‍👩🏼🇳🇱👨🏽‍🏭🧏🏼
‍♀🤷🏻🕸🤷🏼‍♂️🧝‍♂️🚵🏼‍♂️🇬🇦🏌🏻‍♀️🇸🇳🧝🏼‍♂🏊🏻‍♂️✊🏻🕷💨💒👳�
🙇🏽☘☘❄️💂🏾👊🏻🧍🏼‍♂👩🏽‍🎨🏵️🙇‍♀🏄‍♂🧟‍♀️🤽🏼💆🏽‍♂️💹🇲🇺🧒🏾💇
emojifier(true)
// => 😡 Emojifier does not like your input 😠
```