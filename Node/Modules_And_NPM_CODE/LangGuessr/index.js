const franc = require("franc");
const langs  = require("langs");
const colors = require("colors")
const input = process.argv[3];
const langCode = franc(input) // => 'afr'

if(langCode === 'und'){
    console.log("Sorry couldnt Figure out")
}
else{
    const language = langs.where("3", langCode);
console.log(`Our best guess is ${language.name}`.green)
}
