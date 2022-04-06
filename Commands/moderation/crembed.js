module.exports = {
    name: 'crembed',
    category:"info",
    description: '',
    usage: 'crembed',
    timeout: "2000",
    execute(client, message, args) {
      if (!message.member.permissions.any(["ADMINISTRATOR","MANAGE_MESSAGES"])) {
        return message.reply("❌ You don't have `MANAGE_MESSAGE or Administrator` power to use this command.");
      }
      const simplydjs = require('simply-djs')
      // messageCreate event

simplydjs.embedCreate(message)
    }
}
