module.exports = {
    name: 'ttt',
    category:"info",
    description: 'Make a ttt',
    usage: 'calculator',
    timeout: "2000",
    execute(client, message, args) {
const simplydjs = require('simply-djs')

// message event
// tictactoe command
simplydjs.tictactoe(message)
}
}