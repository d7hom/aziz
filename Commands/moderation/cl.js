const Discord = require("discord.js")

module.exports = {
    name: 'cal',
    category:"info",
    description: 'Make a calculator',
    usage: 'calculator',
    timeout: "2000",
    execute(client, message, args) {
const simplydjs = require('simply-djs')


simplydjs.calculator(message, {
    embedColor: 'GREEN',
    credit: "Ice", 
})
}
}