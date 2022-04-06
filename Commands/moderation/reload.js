const glob = require('glob');

module.exports = {
    name: 'restart',
    aliases: [],
    
    execute(client, message, args) {

        if (message.author.id !== '923249789217431583') return;
        client.commands.sweep(() => true);
        glob(`${__dirname}/../**/*js`, async (err, filePath) => {
            if (err) return console.log(err);
            filePath.forEach((file) => {
                delete require.cache[require.resolve(file)];
                const pull = require(file);
                if (pull.name) {
                     console.log(`Reloaded ${pull.name} (cmd)`)
                    client.commands.set(pull.name, pull);
                }
      
                 // message.reply(`Restarting...`)
            });
        });

    }
}