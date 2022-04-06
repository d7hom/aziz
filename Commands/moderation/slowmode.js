
module.exports = {
    name: 'slowmode',
    execute(client, message, args) {
        client.on('messageCreate', async (message) => {
            if (message.content.toLowerCase().startsWith(PREFIX + "slow")) {
             if (message.author.bot) return;
             if (message.channel.type == "dm") {
               return;
             }
             var args = message.content.split(" ")
             if (isNaN(args[1])) return message.reply('ضع رقم فقط!')
             message.reply('** تم وضع السلو مود الى ' + args[1] + ' ثانيه **')
             message.channel.setRateLimitPerUser(args[1])
           }
         })
       

    }
}