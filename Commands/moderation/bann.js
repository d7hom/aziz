const { MessageEmbed } = require("discord.js");
const axios = require("axios");
const moment = require('moment');
module.exports = {
    name: 'banner',
    execute(client, message, args) {
        
 const member = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
 if (!member) return message.reply({ embeds: [new MessageEmbed().setDescription('You need to mention someone.').setColor('Black')] }); // لو مافي احد متمنشن
        
        axios.get(`https://discord.com/api/users/${member.id}`, {
            headers: {
                Authorization: `Bot ${client.token}`
            },
        }).then((res) => {
            const { banner } = res.data;
            if (banner) {
                let extension = banner.startsWith('a_') ? '.gif' : '.png';
                let url = `https://cdn.discordapp.com/banners/${member.id}/${banner}${extension}?size=512`;
                let BannerEmbed = new MessageEmbed()
                    .setTitle(member.tag)
                    .setImage(url)
                    .setColor(message.guild.members.cache.get(client.user.id).displayHexColor)
                    .setFooter(`Requested by ${message.guild.members.cache.get(message.author.id).nickname || message.author.username} | ${moment().format("YYYY/M/D h:mm:ss A")}`, message.author.avatarURL())
                message.reply({ embeds: [BannerEmbed] });
            } else {
                return message.reply({ embeds: [new MessageEmbed().setDescription("The mentioned member doesn't have banner.").setColor('Black')] }); // لو ما عنده بنر
            }
        })    

    }
} 