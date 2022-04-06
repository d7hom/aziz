const { Permissions } = require("discord.js")


module.exports = {
    name: 'say',

    execute(client, message, args) {

    
      if (!message.member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)) {
            return message.reply(` You need **MANAGE CHANNELS** permission for this command`)
            .then(msg => {
                setTimeout(() => msg.delete(), 1)
            })
            .catch("Eror")
        }
        message.delete();
       message.channel.send(`${args.join(" ")}`)

    }
}
